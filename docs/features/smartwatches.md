# Smartwatches

> **Status:** Current behavior. Garmin support is experimental.
> **Audience:** Users.
> **Related:** [Bluetooth LE sensors](ble-sensors.md), [Health Connect](../app/health-connect.md), [Feature map](feature-map.md).

OpenVitals supports wrist devices in two very different ways, depending on the make.

**Garmin watches** are read directly, over Garmin's own Bluetooth protocol. There is no vendor account and no network step; the app declares no internet permission at all. Pairing, sync, and the features below are all handled inside OpenVitals.

**Everything else** syncs through Health Connect: the app that already knows the watch does the syncing, and OpenVitals reads the result.

- **[Gadgetbridge](https://gadgetbridge.org)** — a free, open-source companion app that supports many watch brands and can sync what the watch records into Health Connect, with no vendor account.
- **Your vendor's own app** — if it writes to Health Connect, that works too.

Once a watch's data lands in Health Connect - whichever way it got there - OpenVitals picks all of it up: steps, heart rate, resting heart rate, HRV, sleep sessions and stages, SpO2, VO2 max, respiratory rate, workouts with their routes, and everything else in the app's [read coverage](../app/health-connect.md).

## Garmin Support

Verified against a single recent Garmin model; watches on Garmin's older single-link transport are not supported. The app asks each watch what it can do rather than assuming.

- **Sync.** The watch hands over the activity, sleep, and wellness files it recorded; OpenVitals imports them to Health Connect, keeps watch-only measurements (stress, Body Battery, training readiness and friends) in its own local storage, and tells the watch to archive what was copied. Sync happens by hand, or on an optional per-watch schedule of every 30 minutes, hour, or two hours - off by default, with Android choosing the exact moment; a dashboard watch tile shows the last-synced watch with its battery and a sync button.
- **Stay connected.** A per-watch mode that holds the Bluetooth link open whenever the watch is in range, the way the vendor's app behaves. It is on by default, because weather, find-my-phone, live readings, handing over a recording the moment it ends, and guidance on the wrist all depend on a held link. It costs battery on both sides, and turning it off is remembered - forgetting the watch clears that choice along with everything else. With it on, live heart rate and steps can stream to the dashboard.
- **CoMaps guidance on the watch.** Whenever CoMaps is navigating, the next turn, the distance to it, and the street can appear on the watch as a notification that updates in place. It has its own per-watch switch, off by default, and is independent of activity recording - see [CoMaps navigation context](comaps-navigation-context.md).
- **Notifications.** Phone notifications can be forwarded to the wrist, with a per-app blocklist, reply and actions from the watch, and dismissal that clears the phone too. Off by default, behind Android's own notification access.
- **Weather.** The watch's weather glance is answered from a weather app on the phone that broadcasts the Gadgetbridge generic-weather format (Breezy Weather is the tested one). OpenVitals never contacts a weather service.
- **Calendar.** The watch's calendar glance can show the phone's upcoming events. Off by default behind its own permission; events go to the watch over Bluetooth and nowhere else.
- **Find, both ways.** The phone can make the watch alert, and the watch's find-my-phone rings the phone even when silenced.
- **GPS ephemeris.** A satellite prediction file imported by hand is served to the watch on request, for cold GPS fixes in seconds instead of minutes. Nothing is downloaded.
- **Watch settings.** The watch's own settings tree and alarms are rendered live from the watch and can be changed from the phone.

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

## Data Attribution

OpenVitals shows which app wrote each record, so data synced directly, through Gadgetbridge, or through a vendor app keeps its original source visible rather than appearing to come from nowhere.

Local derived views such as [Body Energy](body-energy.md) and [Daily Readiness](daily-readiness.md) are computed on device from Health Connect data, whatever wrote it — a watch synced through Gadgetbridge feeds them the same way a directly-synced Garmin does.

## Not The Same As BLE Sensors

[Bluetooth LE sensors](ble-sensors.md) — heart-rate straps, cycling cadence and power sensors, footpods — stream live values into an activity recording as it happens, and remain fully supported. A watch records on its own and syncs afterwards. The path chosen at pairing decides the role: a device added through the sensors flow is a live sensor, one added through Settings, Watches is a watch — even when it is physically the same smartwatch.

Phone-to-phone sync — copying Health Connect records to a nearby phone over Bluetooth — is also unaffected and remains supported.
