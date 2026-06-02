# FAQ

## Does OpenVitals Upload My Health Data?

The local OpenVitals app does not request internet access and does not upload health data to an OpenVitals server.

Health data is read from Health Connect on your device. Entries you explicitly save are written back to Health Connect.

## Why Does OpenVitals Ask For Many Health Connect Permissions?

OpenVitals has dashboard and detail screens for many health areas: activity, sleep, heart, body, hydration, nutrition, mindfulness, vitals, and optional cycle tracking.

You do not need to grant everything. The dashboard can work with partial permissions, and cycle tracking remains off until explicitly enabled.

## Why Is Cycle Tracking Opt-In?

Cycle data is sensitive. OpenVitals keeps cycle tracking disabled by default and asks for cycle permissions only after you enable that area.

## Why Can I Not See Old Data?

Health Connect restricts access to older records unless Health history access is granted. Open Health Connect permissions and grant history access if you want older data included.

Long reads can also hit Health Connect rate limits. When that happens, wait and try again later.

## Can OpenVitals Edit Records From Other Apps?

No. OpenVitals keeps third-party records read-only.

OpenVitals-created hydration, activity, mindfulness, body, and vitals entries can be edited later, but ownership is checked before updating Health Connect records.

## Why Do Routes Need Separate Approval?

Workout route data is treated as sensitive Health Connect data. Some route access must be approved manually from Health Connect settings.

## Why Does GPS Recording Need Location Permission?

OpenVitals needs precise location to record route-backed activities. Without it, the app cannot record reliable GPS tracks.

## Why Does OpenVitals Need Notification Permission?

Notification permission is used for:

- Persistent activity recording notifications.
- Optional hydration reminders.

Hydration reminders are off by default.

## Is OpenVitals A Medical App?

No. OpenVitals shows wellness context from Health Connect records. Sleep score, cardio load, vital context, and metric interpretation cards are not medical diagnosis or treatment advice.

## Does OpenVitals Work Without Google Play Services?

OpenVitals does not depend on Google Play Services for core app functionality.

Health Connect availability depends on Android version and device setup. On Android 14 and newer, Health Connect is part of the system. On Android 13 and older, the separate Health Connect app is normally installed from Google Play.

## What Is The Connected App?

The connected app is a separate app and repository for planned online features such as accounts and sharing. It is separate so the local app can remain internet-free.
