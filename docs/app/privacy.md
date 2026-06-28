# Privacy

OpenVitals is designed as a local-first app. The local Android app is intentionally separate from the future connected app.

The main Android app:

- does not request internet access
- does not create cloud accounts
- does not upload health data to an OpenVitals server
- does not include ads
- does not include an analytics SDK
- reads supported records through Health Connect
- writes supported records only after an explicit save or import action

Local app preferences may include onboarding state, acknowledged permission prompts, unit settings, widget order, timer/background-sound settings, and hydration reminders.

## Health Records

Health Connect is the source of truth. OpenVitals reads Health Connect records to show dashboard summaries and detail screens.

Manual entries, including carbohydrate totals, are saved back to Health Connect only when the user chooses to save them. Supported Apple Health export records are written to Health Connect only when the user imports an export file from Settings. OpenVitals-created records can be edited later; records created by other apps remain read-only.

## Sensitive Data

Cycle tracking uses sensitive Health Connect records and is shown only after cycle permissions are granted explicitly.

Workout route previews require manual Health Connect approval. GPS recording requires location permission because OpenVitals needs location points to build the route. Imported PMTiles or Mapsforge map packs stay local on the device.

## Permission Details

See [Permissions](permissions.md) for the current permission list and why each group is requested.

See [Local And Connected Editions](editions.md) for the boundary between the local app and the planned connected app.

For full details, see the Android app repository privacy file:

[OpenVitals privacy policy](https://codeberg.org/OpenVitals/android-app/src/branch/main/PRIVACY.md)
