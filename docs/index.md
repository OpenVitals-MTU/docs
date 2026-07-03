# OpenVitals

OpenVitals is a local-first Android app for viewing health and fitness data from Health Connect.

It is designed for people who want a clear daily dashboard and focused metric detail screens without creating an account, uploading health data, or depending on an online service.

[Install](app/install.md){ .md-button .md-button--primary }
[Getting Started](app/getting-started.md){ .md-button }
[Permissions](app/permissions.md){ .md-button }
[Support](support.md){ .md-button }

![OpenVitals dashboard](assets/images/dashboard.png){ .home-screenshot }

## What It Does

- Shows a Summary-first view of activity, sleep, heart, body, beverages, hydration, caffeine, nutrition, mindfulness, cycle, and vital metrics.
- Reads from Health Connect as the source of truth.
- Supports period-based detail screens for day, week, month, and year views, with reorderable metric sections.
- Uses a refreshed UI/UX with clearer Summary-first navigation, metric screens, and entry flows.
- Adds Daily Readiness with Body Energy, Training Readiness, physiological stress, HRV status, intensity minutes, and local explanation screens.
- Shows Fat-Free Mass Index (FFMI) when the required body composition data is available.
- Breaks down total, active, and BMR calorie context in a dedicated Calories detail screen.
- Imports GPX, KML, KMZ, and FIT activity route files for review before saving.
- Supports offline activity maps from imported PMTiles or Mapsforge packs.
- Supports a configurable activity recording dashboard with Focus mode, high-contrast outdoor mode, keep-screen-on support, strength training heart-rate monitoring, and experimental Bluetooth LE sensors.
- Imports supported Apple Health export records into Health Connect, with background progress and chunked processing for large exports.
- Uses current Health Connect client coverage for newer activity records and recording permissions.
- Allows explicit Health Connect logging for supported manual entries, including beverages with hydration, caffeine, and selected nutrition defaults.
- Keeps app preferences local on the device.

## Local First

The main OpenVitals app does not request internet access and does not include accounts, ads, or cloud sync.

## Support

OpenVitals is developed as an independent open-source project. If it is useful to you, you can help fund ongoing work through Liberapay.

[Support OpenVitals](support.md){ .md-button .md-button--primary }

## Get The Code

- Android app: [codeberg.org/OpenVitals/android-app](https://codeberg.org/OpenVitals/android-app)
- Connected app scaffold: [codeberg.org/OpenVitals/android-app-connected](https://codeberg.org/OpenVitals/android-app-connected)
- Website: [codeberg.org/OpenVitals/website](https://codeberg.org/OpenVitals/website)
