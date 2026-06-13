# OpenVitals

OpenVitals is a local-first Android app for viewing health and fitness data from Health Connect.

It is designed for people who want a clear daily dashboard and focused metric detail screens without creating an account, uploading health data, or depending on an online service.

[Install](app/install.md){ .md-button .md-button--primary }
[Getting Started](app/getting-started.md){ .md-button }
[Permissions](app/permissions.md){ .md-button }

![OpenVitals dashboard](assets/images/dashboard.png){ .home-screenshot }

## What It Does

- Shows a Summary-first view of activity, sleep, heart, body, hydration, nutrition, mindfulness, cycle, and vital metrics.
- Reads from Health Connect as the source of truth.
- Supports period-based detail screens for day, week, month, and year views.
- Adds Daily Readiness with Body Energy, Training Readiness, physiological stress, HRV status, intensity minutes, and local explanation screens.
- Breaks down total, active, and BMR calorie context in a dedicated Calories detail screen.
- Imports GPX, KML, KMZ, and FIT activity route files for review before saving.
- Imports supported Apple Health export records into Health Connect, with background progress for large exports.
- Uses current Health Connect client coverage for newer activity records and recording permissions.
- Allows explicit Health Connect logging for supported manual entries.
- Keeps app preferences local on the device.

## Local First

The main OpenVitals app does not request internet access and does not include accounts, ads, or cloud sync.

## Get The Code

- Android app: [codeberg.org/OpenVitals/android-app](https://codeberg.org/OpenVitals/android-app)
- Connected app scaffold: [codeberg.org/OpenVitals/android-app-connected](https://codeberg.org/OpenVitals/android-app-connected)
- Website: [codeberg.org/OpenVitals/website](https://codeberg.org/OpenVitals/website)
