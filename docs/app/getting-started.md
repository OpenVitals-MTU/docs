# Getting Started

## First Launch

OpenVitals starts with onboarding so you can connect the app to Health Connect and decide which data categories it may read.

The dashboard can work with partial permissions. Grant Activity and Sleep first if you want the smallest useful setup, then add Heart, Body, Nutrition, Hydration, Mindfulness, Vitals, and Cycle only when you need those areas.

## Basic Setup

1. Install or enable Health Connect.
2. Open OpenVitals.
3. Review the Health Connect permission categories.
4. Use one-tap setup if you want to grant all requestable permissions.
5. Use category-by-category setup if you want a smaller permission set.
6. Return to the Summary screen and wait for Health Connect data to load.

## If No Data Appears

- Check that another app or device is writing data into Health Connect.
- Open Health Connect settings and confirm OpenVitals has the relevant read permissions.
- Grant Health history access if you want older records outside the recent access window.
- For route previews, open Health Connect permissions manually and approve workout route access.
- If Health Connect reports rate limiting, wait and try again later.

## Adding Entries

The Summary dashboard is read-only. Use Log or Add entry when you want to save a new record to Health Connect.

Supported entries:

- Hydration.
- Activity sessions.
- Mindfulness sessions.
- Weight, height, and body fat.
- Blood pressure, SpO2, respiratory rate, and body temperature.

OpenVitals-created entries can be edited or deleted later. Records created by other apps stay read-only.

## Importing Or Recording Activities

Activity entry supports three workflows:

- Create a manual activity.
- Import GPX, KML, KMZ, or FIT route files and review the detected details before saving.
- Record a GPS activity from OpenVitals, then review and save it to Health Connect.
- Connect experimental Bluetooth LE sensors while recording activities.

GPS recording needs precise location permission. Bluetooth LE sensor recording needs nearby-device Bluetooth permission on Android versions that require it. Finished GPS drafts can be discarded before saving. Recording notifications and hydration reminders need notification permission on Android versions that require it.

## Home Screen Widgets

After setup, long-press the Android home screen and add an OpenVitals widget for a selected metric, Daily Readiness, Body Energy, or Today Vitals. Widgets use the same on-device Health Connect data as the app.

## Importing Apple Health Exports

Settings includes a Data Import section for supported Apple Health `export.xml` or `export.zip` records. Imported records are written into Health Connect after the required write permissions are granted. Large imports can continue in the background and show progress while OpenVitals scans and writes records.
