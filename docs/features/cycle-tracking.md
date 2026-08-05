# Cycle Tracking

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `features/cycle/`, `features/manualentry/cycle/`, `data/repository/CycleRepository.kt`, `healthconnect/CycleHealthReader.kt` (Kotlin app).
> **Navigation:** the Cycle dashboard tile and metric screen; logging via the Log action on the cycle screen.
> **Related:** [Feature map](feature-map.md), [Onboarding and permissions](onboarding-and-permissions.md), [Privacy](../app/privacy.md).

Cycle tracking reads and writes Health Connect cycle records. Health Connect is the only database: OpenVitals stores no cycle data of its own, and cycle permissions remain an explicit, separately granted category you can skip entirely.

## Logging

The cycle log works one category at a time - pick what you are recording and only that section's inputs appear:

- Period flow (light, medium, heavy).
- Intermenstrual bleeding (spotting).
- Sexual activity (protected, unprotected, protection unknown).
- Ovulation tests (positive, high, negative, inconclusive).
- Cervical mucus (appearance and amount).
- Basal body temperature, with the measurement location.

Each entry is saved as its own Health Connect record. Entries written by OpenVitals can be edited or deleted; records from other apps are shown read-only with their source.

## Derived Periods and Predictions

Period intervals are derived from your flow entries, so logging flow is enough - you never maintain the period record by hand. Cycle statistics follow established fertility-awareness rules: cycle length and variation over recent completed cycles, and a predicted window for the next period. When your cycles vary too much for an honest prediction, the app says so instead of guessing.

## Views

Cycle views include summary cards, a calendar with predicted days marked, basal temperature trends, and observation rows with date, time, value, and source, following the same day, week, month, and year period model as other metric screens.
