# Features

OpenVitals is a local-first Android app for Health Connect data, activity logging, imports, and simple on-device insights. This index points to current implemented behavior.

Use the [feature map](/features/feature-map) when you need the route/widget/package mapping.

## Dashboard And App Experience

- [Health Connect metrics dashboard](/features/health-connect-metrics-dashboard): summary widgets and focused metric detail entry points.
- [Non Health Connect metrics dashboard](/features/non-health-connect-metrics-dashboard): local derived views such as cardio load, readiness, Body Energy, and sleep recovery context.
- [Metric detail customization](/features/metric-detail-customization): reorder dashboard widgets, manual entry widgets, and metric detail sections.
- [Home screen widgets](/features/home-widgets): Android launcher widgets for metric summaries, readiness, Body Energy, Today Vitals, and quick beverage logging.
- [Onboarding and permissions](/features/onboarding-and-permissions): first-run Health Connect setup, permission categories, and privacy expectations.
- [Settings and preferences](/features/settings-and-preferences): language, units, theme, goals, reminders, Health Connect access, imports, sensors, and diagnostics.
- [Privacy, support, and diagnostics](/features/privacy-support-diagnostics): local-first privacy model, diagnostics surfaces, support links, and health disclaimer.
- [Achievements](/features/achievements): local badge progress for supported wellness categories.

## Health Metrics

- [Activity metrics](/features/activity-metrics): steps, distance, calories, active calories, floors, elevation, wheelchair pushes, workouts, and cardio-load context.
- [Sleep tracking](/features/sleep-tracking): sleep period overview and sleep-session detail flow.
- [Sleep score and recovery](/features/sleep-score-and-recovery): sleep score, sleep efficiency, recovery details, and confidence.
- [Daily readiness](/features/daily-readiness): the readiness card inside the Body Energy view, with Training Readiness, HRV status, stress context, and adaptive guidance.
- [Body Energy](/features/body-energy): selected-day energy timeline, calibration, confidence, dashboard support, and widgets.
- [Heart rate recovery](/features/heart-rate-recovery): how far your heart rate falls after hard effort, measured from a guided test during recording.
- [Heart and vitals](/features/heart-and-vitals): heart rate, resting heart rate, HRV, blood pressure, SpO2, VO2 max, respiratory rate, body temperature, blood glucose, skin temperature, and Today Vitals.
- [Body metrics](/features/body-metrics): weight, height, BMI, body fat, lean mass, BMR, bone mass, body water mass, and FFMI context.
- [Nutrition](/features/nutrition): calories in, protein, carbohydrates, fat, and selected nutrient totals.
- [Hydration](/features/hydration): hydration period detail, entry history, goals, and reminder controls.
- [Mindfulness](/features/mindfulness): mindfulness period detail, session history, goals, reminders, and manual-entry relationship.
- [Cycle tracking](/features/cycle-tracking): supported Health Connect cycle records in dashboard and period detail views.
- [Statistics](/features/statistics): period ranges, comparisons, baselines, confidence, and trends across detail screens.

## Logging, Import, And Recording

- [Manual entry of metrics](/features/manual-entry-metrics): explicit user-entered records written back to Health Connect.
- [Beverage logging and caffeine](/features/beverage-logging-and-caffeine): drink logging with hydration, caffeine, presets, custom catalog choices, and selected nutrition defaults.
- [Food logging](/features/food-logging): a catalog of your own foods with their nutrients, logged by portion as one nutrition record each.
- [Recording of activity](/features/activity-recording): GPS and repetition-oriented activity recording before saving to Health Connect.
- [Activity and training plans](/features/activity-training-plans): planned workouts, activity setup defaults, favorite activities, repetitions, sets, and review flows.
- [Bluetooth LE sensors](/features/ble-sensors): supported heart-rate, cadence, power, and footpod sensors during activity recording.
- [Smartwatches](/features/smartwatches): experimental Garmin pairing and sync, with no vendor account and no network step — or keep using Gadgetbridge or a vendor app and let OpenVitals read what they write.
- [GPX/KML/KMZ route import](/features/route-file-import): route file import for review before saving.
- [FIT files import](/features/fit-files-import): Settings Data Importers support for FIT activity, course, and workout files.
- [Offline maps support](/features/offline-maps-support): PMTiles or Mapsforge packs for local activity maps.
- [Elevation correction](/features/elevation-correction): imported routes take their altitude from SRTM tiles stored on the phone, for watches with a drifting barometer.
- [CSV import](/features/csv-import): body measurements, vitals and steps from any CSV, with the columns mapped by hand — a smart scale's history, a temperature log, a glucose export, a step history.
- [Sync with another phone](/features/device-sync): copy Health Connect records straight to a nearby phone over Bluetooth, with no account and no server.
- [Apple Health import](/features/apple-health-import): supported Apple Health export records written into Health Connect.
- [Preloaded beverage nutrition reference](/features/preloaded-beverage-nutrition): imported caffeine beverage presets, nutrition families, common serving values, and source links.
- [Reminders](/features/reminders): local hydration and mindfulness reminders with Android notification handling.
