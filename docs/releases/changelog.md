# Changelog

This page summarizes the English release notes for the local Android app.

For full localized notes, see the Android app repository changelog.

## 1.3.2 - 2026-06-10

- Move Apple Health export imports to a WorkManager-backed background job so large `export.xml` or `export.zip` imports can continue after leaving Settings.
- Add live import progress, foreground notification text, and clearer parsed, imported, duplicate, unsupported, skipped, and failed result counts.
- Stream Apple Health parsing and record writing to reduce memory pressure on large exports while preserving diagnostics and per-type summaries.
- Declare the data-sync foreground service path needed for reliable long-running Apple Health imports on newer Android versions.

## 1.3.1 - 2026-06-10

- Update AndroidX Health Connect to 1.2.0-alpha04 and align activity recording with newer activity-recognition, health foreground-service, and high-sampling sensor permissions.
- Expand recorded activity support with newer exercise types and repetition-set details where Health Connect provides them.
- Redesign the Apple Health import implementation into a dedicated importer package with clearer parser/converter tests and broader write-permission handling for supported records.
- Split dashboard, settings, manual entry, activity recording, route import, period helpers, and metric sections into smaller feature-owned files.
- Move app-local models, insights, and preferences into domain packages while keeping HealthRepository focused on availability, permissions, and dashboard aggregation.

## 1.3.0 - 2026-06-09

- Add Apple Health export import from Settings for supported activity, heart, body, hydration, and vitals records.
- Add FIT route file import alongside GPX/KML/KMZ, with parser tests and clearer route metadata handling.
- Add wheelchair activity support, wheelchair push summaries, charts, dashboard widgets, and Health Connect permission coverage.
- Expand Heart & Vitals with a combined overview screen, stronger charts, and high/low heart-rate check summaries.
- Unify Body and Nutrition detail screens with richer period overviews, body composition coverage, and meal/macro chart improvements.
- Rework Settings into grouped sections with data import permissions, clearer controls, and improved unit and chart formatting.

## 1.2.3 - 2026-06-09

- Add a Calories detail screen with period statistics, total and active calorie trends, BMR context, and day-level breakdown rows.
- Link dashboard and Activities calorie cards to the new Calories screen so calorie data has a full drill-down path.
- Clarify dashboard messaging for missing Health Connect total-calorie records and OpenVitals active calories plus BMR estimates.
- Improve hydration entry cup-size controls with better alignment and more readable saved values.
- Add auto-resizing text to compact dashboard, metric, and chart cards.
- Fix Activities today handling and update CI/build tooling for Android SDK 37, AGP 9.1.1, and the newer Material 3 library.

## 1.2.2 - 2026-06-09

- Move the app toward a Summary-first flow by folding the old Activities and Sleep tab content into richer metric detail screens with overview cards and direct metric links.
- Add a total-calories preference that keeps Health Connect totals as the default and can optionally fill missing totals from active calories plus BMR.
- Make weekly cardio load respect the Activity week setting, so Last 7 days uses a rolling selected-date window while Mon-Sun remains fixed.
- Persist edited hydration container sizes per preset and add a discard action for unfinished GPS recording drafts.
- Polish dashboard, activity, and sleep UI with clearer colors, denser widgets, and better text fitting.

## 1.2.1 - 2026-06-06

- Remember the latest recorded activity type and preselect it for future activity entries.
- Add a Settings option to choose a favorite activity type that overrides the latest recorded activity default.
- Return to the dashboard after saving a new activity so users do not land back on the activity-entry screen.

## 1.2.0 - 2026-06-06

- Add System, Light, Dark, and AMOLED theme options, with AMOLED keeping Material You accent colors and pure black backgrounds.
- Add swipe-to-delete for OpenVitals-owned hydration, activity, mindfulness, body measurement, and vitals entries while keeping records from other apps read-only.
- Let users edit the default hydration container size so quick hydration logging can match their real bottle or glass.
- Add configurable mindfulness reminders alongside the existing hydration reminder support.
- Improve GPS activity recording by using the already locked GPS fix, keeping finished recordings recoverable after navigating back, and renaming the final action to Save activity.
- Compact the dashboard sleep widget and improve its contrast.

## 1.1.1 - 2026-06-01

- Show sleep score and its rating directly in the dashboard sleep widget.
- Fix achievements history loading by allowing step-only history and chunking long activity-history reads.
- Keep average pace and average speed visible after GPS recording ends.
- Use moving time for activity pace and speed when pause segments are available.

## 1.1.0 - 2026-06-01

- Add achievement badges for activity history.
- Add opt-in hydration reminders with active hours, interval scheduling, notification permission handling, boot rescheduling, and automatic pause after the daily goal is reached.
- Add an Activities setting for fixed Monday-Sunday weeks or rolling last 7 days.
- Add one-tap onboarding for requestable read, write, and additional Health Connect permissions.
- Keep cycle tracking explicitly opt-in and workout route access manual.

## 1.0.0 - 2026-05-31

- Revamp the dashboard with a denser widget grid, editable widget ordering, and clearer summary cards.
- Add recovery views with sleep score, sleep efficiency, trend detail screens, confidence notes, and localized explanations.
- Add an Activities overview with cardio load, weekly progress, route-aware activity summaries, and a cardio load detail screen.
- Open saved GPS routes in external map apps.
- Import GPX, KML, and KMZ route files and export activity routes as GPX or KMZ.
- Add high and low heart-rate threshold checks with adjustable settings.
- Improve Health Connect query performance and test coverage.

## 0.7.1 - 2026-05-28

- Edit OpenVitals-created hydration, activity, mindfulness, body measurement, and vitals entries from detail and browse lists.
- Keep records from other apps read-only.
- Verify Health Connect ownership before every update.
- Prefill edit screens with existing values and save changes back to the original Health Connect record.
- Add localized release notes and Play Store changelogs.

## 0.7.0 - 2026-05-27

- Add Activity entry support for Health Connect exercise sessions with optional route, distance, elevation gain, active calories, and total calories records.
- Import GPX, KML, and KMZ routes with preview and review before saving.
- Record GPS activities in OpenVitals with pause, resume, discard, route preview, distance, elevation gain, moving time, and a persistent recording notification.
- Estimate active and total calories for imported routes and recorded activities.
- Update release flow for beta publishing and production promotion.

## 0.6.1 - 2026-05-26

- Refresh the app shell with Material 3 adaptive navigation, updated theming, clearer dashboard cards, and scroll-aware detail screens.
- Move Add entry into a contextual create action.
- Improve manual-entry UX and accessibility.
- Update mindfulness entry with bell previews, looping background sounds, circular timer, and simplified minutes input.
- Add new Play screenshots.

## 0.6.0 - 2026-05-25

- Add a dedicated Add entry area.
- Keep the dashboard read-only while manual entries save directly to Health Connect.
- Add hydration entries with drink and serving choices.
- Add manual entries for weight, height, body fat, blood pressure, blood oxygen, respiratory rate, and body temperature.
- Add mindfulness timer and manual minute entry.
- Modernize app architecture with Hilt, shared period queries, cached Health Connect reads, and CI/release improvements.

## 0.5.2 - 2026-05-24

- Show timeframe-scoped entry lists across metric detail screens.
- Let week and month charts reveal a tapped day's entries.
- Simplify the dashboard workout widget.
- Improve dashboard edit mode and carousel reordering.

## 0.5.1 - 2026-05-24

- Refresh OpenVitals branding with the new logo and launcher icons.
- Use distinct launcher icons for production and debug builds.
- Show the new logo during onboarding.
- Update README screenshots and project branding.
