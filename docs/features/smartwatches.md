# Smartwatches

> **Status:** Current behavior. Garmin support is experimental; the Wear OS app is in development.
> **Audience:** Users.
> **Related:** [Bluetooth LE sensors](ble-sensors.md), [Health Connect](../app/health-connect.md), [Feature map](feature-map.md).

OpenVitals supports wrist devices in two very different ways, depending on the make.

**Garmin watches** are read directly, over Garmin's own Bluetooth protocol. There is no vendor account and no network step; the app declares no internet permission at all. Pairing, sync, and the features below are all handled inside OpenVitals.

**Everything else** syncs through Health Connect: the app that already knows the watch does the syncing, and OpenVitals reads the result.

- **[Gadgetbridge](https://gadgetbridge.org)** — a free, open-source companion app that supports many watch brands and can sync what the watch records into Health Connect, with no vendor account.
- **Your vendor's own app** — if it writes to Health Connect, that works too.

Once a watch's data lands in Health Connect - whichever way it got there - OpenVitals picks all of it up: steps, heart rate, resting heart rate, HRV, sleep sessions and stages, SpO2, VO2 max, respiratory rate, workouts with their routes, and everything else in the app's [read coverage](../app/health-connect.md).

## Garmin Support

Verified against a single recent Garmin model. Both Garmin Bluetooth transports sync and forward notifications, so older watches such as the Instinct 2X work too; live heart rate and step streaming need the newer transport, so an older watch syncs but shows no live readings. The app asks each watch what it can do rather than assuming.

- **Sync.** The watch hands over the activity, sleep, and wellness files it recorded; OpenVitals imports them to Health Connect (activity routes get [elevation correction](elevation-correction.md) from imported tiles, for a watch with a drifting barometer), keeps watch-only measurements (stress, Body Battery, training readiness and friends) in its own local storage, and tells the watch to archive what was copied. Sync happens by hand, or on an optional per-watch schedule of every 30 minutes, hour, or two hours - off by default, with Android choosing the exact moment; a dashboard watch tile shows the last-synced watch with its battery and a sync button. An older watch that does not record light, deep and REM sleep still gets a stage timeline: OpenVitals estimates it on the phone from heart rate and movement, and the session's notes say so.
- **Stay connected.** A per-watch mode that holds the Bluetooth link open whenever the watch is in range, the way the vendor's app behaves. It is on by default, because weather, find-my-phone, live readings, handing over a recording the moment it ends, and guidance on the wrist all depend on a held link. It costs battery on both sides, and turning it off is remembered - forgetting the watch clears that choice along with everything else. With it on, live heart rate and steps can stream to the dashboard.
- **CoMaps guidance on the watch.** Whenever CoMaps is navigating, the next turn, the distance to it, and the street can appear on the watch as a notification that updates in place. It has its own per-watch switch, off by default, and is independent of activity recording - see [CoMaps navigation context](comaps-navigation-context.md).
- **Notifications.** Phone notifications can be forwarded to the wrist, with a per-app blocklist, reply and actions from the watch, and dismissal that clears the phone too. Off by default, behind Android's own notification access. Older watches such as the original Instinct receive them too.
- **Calls.** A ringing call shows on the wrist with the caller's name and leaves once it is answered. With a dialer that uses Android's call-style notification, the watch's accept and reject buttons work. It rides on notification forwarding: no phone permission is needed and nothing reads the call log.
- **Weather.** The watch's weather glance is answered from a weather app on the phone that broadcasts the Gadgetbridge generic-weather format (Breezy Weather is the tested one). OpenVitals never contacts a weather service.
- **Music controls.** "Music controls on watch" puts the phone's player on the watch's music controls. The watch shows the player, track, artist, album and position; from the wrist you can play, pause, skip, seek and change the volume. Off by default, and it needs "Stay connected". Android shows the phone's players only to an app with notification access, so switching it on without that grant shows a disclosure first; the grant alone forwards no notifications. Track details go only to the watch over Bluetooth and are never stored. Confirmed on one Garmin model.
- **Calendar.** The watch's calendar glance can show the phone's upcoming events. Off by default behind its own permission; events go to the watch over Bluetooth and nowhere else.
- **Find, both ways.** The phone can make the watch alert, and the watch's find-my-phone rings the phone even when silenced.
- **GPS ephemeris.** A satellite prediction file imported by hand is served to the watch on request, for cold GPS fixes in seconds instead of minutes. Nothing is downloaded.
- **Send a point.** A watch that can store locations gets a "Send a point" row. Type a name and coordinates - decimal degrees, degrees and decimal minutes (the geocaching format), or degrees, minutes and seconds - or share a place from a maps app: OpenVitals appears as "Send to watch" for `geo:` links and shared text, and reads Google Maps, OpenStreetMap and OsmAnd links. A short link such as `maps.app.goo.gl` holds no position and the app cannot go online to resolve it, so the form asks for the coordinates. Nothing is sent until you tap Send. The watch keeps the point in its saved locations, where it can be picked as a navigation target. Not yet confirmed on a watch.
- **Watch settings.** The watch's own settings tree and alarms are rendered live from the watch and can be changed from the phone.
- **Alarms for older watches.** A watch with no settings tree, such as the first Instinct, keeps its alarms in a list on the phone: up to ten, each with a time, repeat days, sound or vibration, backlight and a preset label. Nothing reaches the watch until you tap "Send to watch", and a send replaces every alarm on the watch. Alarms set on the watch do not show in the list. Not yet confirmed on a watch.

### Steps, distance and calories from the watch

The watch reports these three as running daily totals, so a synced file says
where the counter stood, not what happened. OpenVitals differences them against
what it already imported, which is what lets your step history show *when* you
walked instead of drawing the day as one straight ramp from midnight.

Two things are worth knowing:

- **A gap between the live step count and the day's total is normal.** The live
  reading is the number on your wrist right now; the minutes since the watch
  last closed a monitoring file have not been handed over yet. They arrive on
  the next sync.
- **Records are written so they never overlap.** This matters more than it
  sounds: Health Connect discards the overlapping span when it adds records up,
  so two step records sharing a single minute report *less* between them than
  either one claims. A day once read 889 steps while its own records summed to
  1,007.

## Wear OS

A paired Wear OS watch can be added under Settings, Watches, like a Garmin. It is recognised by its name or by the OpenVitals app installed on it, not by its Bluetooth class alone, so a Garmin, Fitbit or Huawei watch does not end up here. Its screen has a **Wear OS App Status** card: whether the watch is paired with this phone, and whether the OpenVitals Wear OS app on it answers over Bluetooth, with a **Validate Wear OS App** button to check again.

The OpenVitals Wear OS app itself is still in development and is not yet published. Until it is, the watch's recorded data reaches OpenVitals the way every non-Garmin watch's does: through Health Connect, written by the vendor's app.

## Data Attribution

OpenVitals shows which app wrote each record, so data synced directly, through Gadgetbridge, or through a vendor app keeps its original source visible rather than appearing to come from nowhere.

Local derived views such as [Body Energy](body-energy.md) and [Daily Readiness](daily-readiness.md) are computed on device from Health Connect data, whatever wrote it — a watch synced through Gadgetbridge feeds them the same way a directly-synced Garmin does.

## Not The Same As BLE Sensors

[Bluetooth LE sensors](ble-sensors.md) — heart-rate straps, cycling cadence and power sensors, footpods — stream live values into an activity recording as it happens, and remain fully supported. A watch records on its own and syncs afterwards. The path chosen at pairing decides the role: a device added through the sensors flow is a live sensor, one added through Settings, Watches is a watch — even when it is physically the same smartwatch.

Phone-to-phone sync — copying Health Connect records to a nearby phone over Bluetooth — is also unaffected and remains supported.
