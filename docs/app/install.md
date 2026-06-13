# Install

OpenVitals is an Android app. It needs Health Connect because Health Connect is the app's source of truth for health and fitness records.

## Channels

| Channel | Link | Use When |
| --- | --- | --- |
| Google Play | [Install or join testing](https://play.google.com/store/apps/details?id=tech.mmarca.openvitals) | You want the normal Android install and update path. |
| Codeberg releases | [Download signed APKs](https://codeberg.org/OpenVitals/android-app/releases) | You want APKs published by the project. |
| Source | [OpenVitals/android-app](https://codeberg.org/OpenVitals/android-app) | You want to build or inspect the app yourself. |

## Requirements

- Android only.
- `minSdk` 26.
- `targetSdk` 36.
- Health Connect required.

## Health Connect

On Android 14 and newer, Health Connect is part of the Android system.

On Android 13 and older, install Health Connect separately from Google Play before using OpenVitals.

Health Connect is not supported in Android work profiles, so OpenVitals cannot read Health Connect data there.

## After Installing

1. Open OpenVitals.
2. Complete onboarding.
3. Grant the Health Connect permissions you want OpenVitals to read.
4. Grant cycle permissions only if you explicitly want period, ovulation, cervical mucus, basal temperature, intermenstrual bleeding, and sexual activity data shown.
5. Use Add entry only when you want OpenVitals to write a record back to Health Connect.
