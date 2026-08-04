# Smartwatches

> **Status:** Current behavior.
> **Audience:** Users.
> **Related:** [Bluetooth LE sensors](ble-sensors.md), [Health Connect](../app/health-connect.md), [Feature map](feature-map.md).

OpenVitals deliberately does not link to smartwatches. There is no watch pairing, no watch sync, no watch settings, and no notification forwarding in the app.

Instead, OpenVitals reads everything from Health Connect, and the app that already knows your watch does the syncing:

- **[Gadgetbridge](https://gadgetbridge.org)** — a free, open-source companion app that supports many watch brands and can sync what the watch records into Health Connect, with no vendor account.
- **Your vendor's own app** — if it writes to Health Connect, that works too.

Once the watch's data lands in Health Connect, OpenVitals picks all of it up: steps, heart rate, resting heart rate, HRV, sleep sessions and stages, SpO2, VO2 max, respiratory rate, workouts with their routes, and everything else in the app's [read coverage](../app/health-connect.md). Nothing needs configuring inside OpenVitals beyond the usual Health Connect read permissions.

## Why No Direct Watch Link

Speaking each brand's watch protocol is a project of its own, and one that projects like Gadgetbridge already do well across many brands at once. OpenVitals stays focused on reading, showing, and understanding the data, and leaves device connectivity to the apps built for it.

## Data Attribution

OpenVitals shows which app wrote each record, so data synced through Gadgetbridge or a vendor app keeps its original source visible rather than appearing to come from nowhere.

Local derived views such as [Body Energy](body-energy.md) and [Daily Readiness](daily-readiness.md) are computed on device from Health Connect data, whatever wrote it — a watch synced through Gadgetbridge feeds them the same way any other source does.

## Not The Same As BLE Sensors

[Bluetooth LE sensors](ble-sensors.md) — heart-rate straps, cycling cadence and power sensors, footpods — are different and remain fully supported. They stream live values into an activity recording as it happens. A watch, by contrast, records on its own and syncs afterwards through its companion app.

Phone-to-phone sync — copying Health Connect records to a nearby phone over Bluetooth — is also unaffected and remains supported.
