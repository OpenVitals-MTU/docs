# Features

This inventory reflects the current Android app source, the changelog through 1.2.2, release notes, and recent feature commits.

## Local-First App

- No account required.
- No ads, analytics SDK, or OpenVitals cloud health-data sync.
- No app-level internet permission in the current local app.
- Health Connect remains the source of truth for health records.
- Dashboard and detail views are read-only by default.
- Writes happen only when the user explicitly saves an entry back to Health Connect.
- Cycle tracking is disabled by default and must be explicitly enabled.

## App Shell And Onboarding

- Material 3 Android app shell with adaptive navigation.
- Summary-first navigation with dashboard quick actions for Log and Start.
- Activities, Sleep, and other metric screens open from dashboard cards and section links.
- Settings access from the app bar.
- First-run Health Connect onboarding with clear permission categories.
- One-tap setup for requestable Health Connect permissions.
- Separate handling for manual permissions such as workout route access.
- Health Connect availability checks for unsupported devices, missing providers, provider updates, and work-profile limitations.

## Dashboard

- Daily Summary dashboard grouped by activity, recovery, intake, body, heart, vitals, mindfulness, and optional cycle data.
- Editable dashboard widget ordering.
- Visible-widget-aware loading so hidden widgets do not trigger unnecessary Health Connect reads.
- Dashboard widgets for steps, distance, total calories, active calories, floors, elevation, workout, sleep, hydration, calories in, macros, body measurements, heart data, vitals, weekly cardio load, mindfulness, and cycle data.
- Sleep widget shows a compact duration and rating summary.
- Weekly cardio widget summarizes progress toward the weekly activity load target.

## Detail Screens

- Period navigation for day, week, month, and year views.
- Pull-to-refresh and calendar date picking.
- Timeframe-scoped record lists with pagination.
- Week and month charts that can reveal records for a selected day.
- Period totals, averages, best-day stats, tracked-day counts, streaks, goal progress, and previous-period comparison where supported.
- Calendar and heatmap-style history views for longer ranges.
- Personal baseline, source consistency, and data-confidence context in metric views.
- Metric interpretation cards for selected health signals.
- Cross-metric insights for sleep vs HRV, workouts vs resting heart rate, hydration vs weight fluctuation, and mindfulness vs sleep.

## Activity And Workouts

- Steps, distance, total calories, active calories, floors climbed, elevation gain, workout sessions, and cardio load.
- Activities detail screen with an integrated period overview, key metric cards, recent workout list, and direct links to steps, distance, total calories, HRV, and cardio load.
- Configurable week mode for Activities and weekly cardio load: fixed Monday-Sunday or rolling last 7 days.
- Optional OpenVitals total-calorie estimates can fill missing Health Connect totals from active calories plus BMR.
- Workout detail screens with metadata, source information, segments, laps, routes, moving time, average pace, and average speed when available.
- Cardio load detail screen using heart-rate-based TRIMP when possible, with movement fallback when heart-rate coverage is limited.
- Route previews when Health Connect route permission is granted.
- Open saved routes in external map apps.
- Export activity routes as GPX or KMZ.

## Activity Logging

- Manual activity entry saved to Health Connect.
- GPX, KML, and KMZ route import with preview and review before saving.
- Inference of route time, title, notes, type, distance, elevation gain, moving time, average pace, and average speed where possible.
- Activity entries preselect the latest recorded activity type unless a favorite activity is configured.
- GPS activity recording from OpenVitals with start, pause, resume, finish, discard, route preview, moving time, distance, elevation gain, and point count.
- Finished GPS activity drafts remain recoverable while the app process stays open.
- Finished GPS activity drafts can be discarded before saving.
- Recording starts from the already locked GPS fix when one is available.
- Saving a new activity returns to the dashboard after the Health Connect write completes.
- Persistent recording notification while GPS recording is active.
- Active and total calorie estimates for imported and recorded activities.

## Sleep And Recovery

- Sleep sessions and sleep-stage breakdowns.
- Sleep detail screen with integrated overview cards for score, duration, schedule, REM, deep sleep, and efficiency.
- Sleep session detail views.
- Configurable sleep range assignment: rolling 24 hours, noon, or 18:00 boundary.
- Sleep score based on duration, efficiency, continuity, and regularity.
- Sleep efficiency detail with confidence notes.
- Recovery explanations are framed as wellness context, not diagnosis.

## Heart, Vitals, And Body

- Heart rate samples and daily summaries.
- Resting heart rate and HRV.
- High and low heart-rate threshold checks with adjustable settings.
- Blood pressure, SpO2, respiratory rate, body temperature, and VO2 max.
- Weight, height, BMI, body fat, lean mass, basal metabolic rate, and bone mass.
- BMI, blood pressure, oxygen saturation, respiratory rate, body temperature, resting heart rate, macro split, workout guideline, and sleep-target interpretation cards where data is available.

## Hydration, Nutrition, And Mindfulness

- Hydration totals by day and period.
- Drink choices and editable per-container serving sizes for hydration entries.
- Optional hydration reminders with active hours, interval scheduling, notification permission handling, boot rescheduling, and pause after the daily goal is reached.
- Nutrition views for calories in, meals, protein, carbs, fat, fiber, and sugar where Health Connect provides them.
- Mindfulness session lists and totals when the Health Connect provider supports mindfulness sessions.
- Mindfulness manual minute logging.
- Meditation timer with bell previews, interval bells, optional looping background sounds, save, and discard controls.
- Optional mindfulness reminders with configurable timing.

## Manual Entries

- Add entry area separate from the read-only dashboard.
- Configurable Add entry widgets.
- Manual entries for hydration, activities, mindfulness, weight, height, body fat, blood pressure, SpO2, respiratory rate, and body temperature.
- Write-permission requests are scoped to the entry workflow that needs them.
- OpenVitals-created entries can be edited or deleted later.
- Records from other apps remain read-only.
- Ownership is checked before updating or deleting Health Connect records.

## Cycle Tracking

- Optional cycle tracking, off by default.
- Period days, menstruation flow, ovulation tests, cervical mucus observations, and basal body temperature.
- Cycle permissions are requested only after explicit opt-in during onboarding or in Settings.

## Achievements

- Achievement screen with progress summary, filters, tracked-day stats, best steps, total distance, best floors, and total floors.
- Source-confirmed badge categories for daily steps, lifetime distance, daily floors, and lifetime floors.
- Long activity-history reads are chunked so achievement history can load more reliably from Health Connect.

## Settings And Preferences

- Language preference: system, English, Spanish, or German.
- Metric and imperial unit systems.
- Activity week mode.
- Favorite activity type override for activity entry defaults.
- Total-calorie data mode: Health Connect totals only, or optional OpenVitals estimates from active calories plus BMR.
- Sleep range mode.
- App theme mode: system, light, dark, or AMOLED.
- Cycle tracking opt-in.
- Hydration reminder configuration.
- Mindfulness reminder configuration.
- Health Connect status and permission management.
- App version and privacy summary.

## Source Audit

Checked sources:

- `README.md`
- `CHANGELOG.md`
- `docs/releases/changelog.md`
- Current navigation, dashboard metric, manual entry, Health Connect model, settings, achievement, and insight source files
- Recent feature commits through the current `android-app` main branch
