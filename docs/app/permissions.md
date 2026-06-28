# Permissions

OpenVitals asks for permissions by purpose. The local app does not request Android `INTERNET` permission.

## Health Connect Read Permissions

Used to show records in the dashboard and detail screens:

- `android.permission.health.READ_STEPS`
- `android.permission.health.READ_DISTANCE`
- `android.permission.health.READ_EXERCISE`
- `android.permission.health.READ_EXERCISE_ROUTES`
- `android.permission.health.READ_SLEEP`
- `android.permission.health.READ_HEART_RATE`
- `android.permission.health.READ_RESTING_HEART_RATE`
- `android.permission.health.READ_HEART_RATE_VARIABILITY`
- `android.permission.health.READ_WEIGHT`
- `android.permission.health.READ_HEIGHT`
- `android.permission.health.READ_BODY_FAT`
- `android.permission.health.READ_LEAN_BODY_MASS`
- `android.permission.health.READ_BASAL_METABOLIC_RATE`
- `android.permission.health.READ_BONE_MASS`
- `android.permission.health.READ_BODY_WATER_MASS`
- `android.permission.health.READ_FLOORS_CLIMBED`
- `android.permission.health.READ_ACTIVE_CALORIES_BURNED`
- `android.permission.health.READ_ELEVATION_GAINED`
- `android.permission.health.READ_WHEELCHAIR_PUSHES`
- `android.permission.health.READ_TOTAL_CALORIES_BURNED`
- `android.permission.health.READ_SPEED`
- `android.permission.health.READ_POWER`
- `android.permission.health.READ_STEPS_CADENCE`
- `android.permission.health.READ_CYCLING_PEDALING_CADENCE`
- `android.permission.health.READ_PLANNED_EXERCISE`
- `android.permission.health.READ_HYDRATION`
- `android.permission.health.READ_NUTRITION`
- `android.permission.health.READ_MINDFULNESS`
- `android.permission.health.READ_BLOOD_PRESSURE`
- `android.permission.health.READ_OXYGEN_SATURATION`
- `android.permission.health.READ_RESPIRATORY_RATE`
- `android.permission.health.READ_BODY_TEMPERATURE`
- `android.permission.health.READ_VO2_MAX`
- `android.permission.health.READ_BLOOD_GLUCOSE`
- `android.permission.health.READ_SKIN_TEMPERATURE`

## Cycle Tracking Permissions

Cycle data is sensitive. These permissions are grouped separately in onboarding and Settings so you can skip or grant them explicitly:

- `android.permission.health.READ_MENSTRUATION`
- `android.permission.health.READ_OVULATION_TEST`
- `android.permission.health.READ_CERVICAL_MUCUS`
- `android.permission.health.READ_BASAL_BODY_TEMPERATURE`
- `android.permission.health.READ_INTERMENSTRUAL_BLEEDING`
- `android.permission.health.READ_SEXUAL_ACTIVITY`

## Health Connect Write Permissions

Declared for explicit save and supported Apple Health import workflows; requested only when a workflow needs them:

- `android.permission.health.WRITE_STEPS`
- `android.permission.health.WRITE_EXERCISE`
- `android.permission.health.WRITE_SLEEP`
- `android.permission.health.WRITE_EXERCISE_ROUTE`
- `android.permission.health.WRITE_DISTANCE`
- `android.permission.health.WRITE_ELEVATION_GAINED`
- `android.permission.health.WRITE_ACTIVE_CALORIES_BURNED`
- `android.permission.health.WRITE_TOTAL_CALORIES_BURNED`
- `android.permission.health.WRITE_HEART_RATE`
- `android.permission.health.WRITE_RESTING_HEART_RATE`
- `android.permission.health.WRITE_HEART_RATE_VARIABILITY`
- `android.permission.health.WRITE_WEIGHT`
- `android.permission.health.WRITE_HEIGHT`
- `android.permission.health.WRITE_BODY_FAT`
- `android.permission.health.WRITE_LEAN_BODY_MASS`
- `android.permission.health.WRITE_BASAL_METABOLIC_RATE`
- `android.permission.health.WRITE_BONE_MASS`
- `android.permission.health.WRITE_BODY_WATER_MASS`
- `android.permission.health.WRITE_FLOORS_CLIMBED`
- `android.permission.health.WRITE_WHEELCHAIR_PUSHES`
- `android.permission.health.WRITE_HYDRATION`
- `android.permission.health.WRITE_NUTRITION`
- `android.permission.health.WRITE_MINDFULNESS`
- `android.permission.health.WRITE_BLOOD_PRESSURE`
- `android.permission.health.WRITE_OXYGEN_SATURATION`
- `android.permission.health.WRITE_RESPIRATORY_RATE`
- `android.permission.health.WRITE_BODY_TEMPERATURE`
- `android.permission.health.WRITE_VO2_MAX`
- `android.permission.health.WRITE_BLOOD_GLUCOSE`
- `android.permission.health.WRITE_MENSTRUATION`
- `android.permission.health.WRITE_OVULATION_TEST`
- `android.permission.health.WRITE_CERVICAL_MUCUS`
- `android.permission.health.WRITE_BASAL_BODY_TEMPERATURE`
- `android.permission.health.WRITE_INTERMENSTRUAL_BLEEDING`
- `android.permission.health.WRITE_SEXUAL_ACTIVITY`

## Health Connect Access Modes

- `android.permission.health.READ_HEALTH_DATA_HISTORY`: used when you grant access to older records.
- `android.permission.health.READ_HEALTH_DATA_IN_BACKGROUND`: used where supported for background Health Connect reads.

## Android Runtime Permissions

- `android.permission.ACCESS_FINE_LOCATION`: required for reliable GPS activity recording.
- `android.permission.ACCESS_COARSE_LOCATION`: declared with location access for Android permission compatibility.
- `android.permission.ACTIVITY_RECOGNITION`: used where Android requires activity-recognition access for recorded activity workflows.
- `android.permission.BLUETOOTH_SCAN`: used to find paired Bluetooth LE sensors for experimental activity recording.
- `android.permission.BLUETOOTH_CONNECT`: used to connect to paired Bluetooth LE sensors for experimental activity recording.
- `android.permission.FOREGROUND_SERVICE`: used for activity recording and user-started Apple Health import foreground services.
- `android.permission.FOREGROUND_SERVICE_DATA_SYNC`: marks long-running Apple Health imports as user-started data sync work.
- `android.permission.FOREGROUND_SERVICE_LOCATION`: marks the recording service as location-based.
- `android.permission.FOREGROUND_SERVICE_HEALTH`: marks the recording service as health-related where Android supports it.
- `android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE`: marks recording with connected Bluetooth LE devices where Android supports it.
- `android.permission.HIGH_SAMPLING_RATE_SENSORS`: supports higher-rate sensor access for activity recording on devices that expose it.
- `android.permission.POST_NOTIFICATIONS`: used for activity recording, Apple Health import progress, and reminder notifications.
- `android.permission.RECEIVE_BOOT_COMPLETED`: used to reschedule hydration reminders after reboot or app update.

## File And Route Intents

OpenVitals can receive GPX, KML, KMZ, and FIT files through Android open/share intents so imported activities can be reviewed and saved to Health Connect. It can also import PMTiles and Mapsforge map packs from Settings for offline activity maps.

The app also uses a local file provider to export route files, such as GPX or KMZ, to other apps.
