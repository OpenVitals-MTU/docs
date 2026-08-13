# Bluetooth LE Sensors

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `features/settings`, `features/manualentry/activity/recording`.
> **Navigation:** `Screen.SettingsSensors`, `Screen.ActivityEntry`.
> **Related:** [Feature map](feature-map.md), [Recording of activity](activity-recording.md), [Smartwatches](smartwatches.md), [Permissions](../app/permissions.md).

OpenVitals has experimental Bluetooth LE support for activity recording.

This page covers sensors that stream while you record — a chest strap, a cadence sensor, a power meter. A smartwatch is not a sensor in this sense: it records on its own and syncs afterwards through its companion app, and OpenVitals deliberately does not pair with watches at all. See [Smartwatches](smartwatches.md).

## Supported Recording Signals

Supported sensor families can include:

- Heart rate.
- Cycling cadence.
- Cycling power.
- Footpod-style movement data.

Sensor availability depends on the device, Android permissions, and the Bluetooth sensor's advertised services.

## Where Sensors Are Used

BLE sensors are used during activity recording and repetition-oriented training when compatible data is available. Heart-rate sensors can enrich GPS recordings, strength training, and repetition training summaries.

## Sensor Settings

Settings can show saved sensor devices, connection status, and battery information when available.

## Permissions And Timeouts

OpenVitals requests Bluetooth and notification permissions only where Android requires them. During recording, stale sensor values are timed out so old readings do not continue to appear as live data.

## Privacy

Sensor data is used locally for recording and review. Saved activity data is written through Health Connect only when the user chooses to save the recording.
