# Changelog

This page summarizes the English release notes for the local Android app.

For full localized notes, see the Android app repository changelog.

OpenVitals was rebuilt on Flutter in 2.0.1. Entries for 1.9.0 and earlier describe the previous Kotlin app. (2.0.0 was prepared but never published, so 2.0.1 carries everything since 1.9.0.)

## 2.0.4 - 2026-07-12

The app's insides were rebuilt this release, and the rebuild is what found the bugs. Moving every calculation out of the screens that were doing it mid-draw put a lot of arithmetic side by side for the first time — and several numbers, it turned out, disagreed with each other.

- **The sleep card called your watch's recordings "hand-typed", and never noticed the ones that really were.** Health Connect labels how a record was made — actively recorded, automatically recorded, typed in by a person — and the data-confidence card was checking that label against the wrong value. It warned you about manual entries whenever your watch had recorded the night properly, and a night you genuinely did type in was never counted at all.
- **The hydration goal bar filled up if you logged a single day.** It measured the average of the days you *logged* against your goal — so a week in which you logged Monday, hit your target and never opened the app again showed a completely full bar, with "1 of 1 days met" above it. Log nothing and you cannot fall short of anything. It now counts the days you met your goal against the days that have actually happened, and stops at today.
- **A day's heart rate could print an average outside its own low and high.** The average came from Health Connect's summary of the day while the low and the high came from the individual readings — two different sets of numbers printed as one. All three now come from the readings.
- **The skin-temperature card went blank while its own chart carried on drawing.** A reading that arrives without a temperature difference emptied the card while the chart underneath it plotted the readings that had one.
- **Respiratory rate showed two different averages on one screen**, and said neither which was which: the average of your days under the chart, the average of every reading on the card below it.
- **An Apple Health import that failed on permissions offered no way to fix it.** The "grant permission" button could never appear, because a permission failure was never reported as one.
- **Screens could spin forever after a failed permission check** — on the dashboard, in onboarding, and while saving an activity, the error was thrown where nothing was listening.
- **The app was rebuilt on Flutter's app-architecture guidelines.** Every screen now works out what to show once, when its data loads, rather than recalculating charts, totals and statistics on every redraw while you scroll. It is invisible if it went well, which is the point — and it is the groundwork for iOS.

## 2.0.3 - 2026-07-12

- **An activity could show no heart rate at all, and its splits fell back to estimates.** Health Connect stores heart rate, speed and cadence as *series* records — one record holding many timestamped samples — and filters them by the boundary of the record, never by the times of the samples inside it. A device may group a whole day of beats into a single record, and a 36-minute workout sitting inside one was therefore invisible: the read succeeded and returned nothing, so the activity reported "Not available" for a heart rate it had recorded the entire time. The same read backs the speed samples, so the 1 km splits quietly dropped to being estimated from the average on exactly the same activities.
- **The sleep graphs were blank.** The night's stage timeline and the "share of time in bed" bars drew their coloured bands with zero height — beside durations and percentages that were correct all along.
- **The weekly activities view lost the strip showing which days you trained.** It is back.
- **Beverages logged from a home-screen widget were silently dropped.** The release build strips code it cannot see being used, and the widget's buttons are found by reflection at the moment you tap them — so the tap did nothing and the drink was never recorded.
- **A strength session was cut into distance splits.** A phone left on a bench picks up a couple of hundred metres of GPS drift, and a lifting session was sliced into "1.0 km" and "181 m" laps at a 30:29 min/km pace. Whether an activity has splits is now a question about the kind of activity, not about whether a distance happens to exist for it.
- **Focus mode now fills the screen.** It was rendering under an app bar whose Back arrow did exactly what focus mode's own exit button — and the system back gesture — already do. The height it was taking now goes to the metrics.

## 2.0.2 - 2026-07-12

- **A walk or run recorded by a watch now shows its steps, distance, calories and elevation.** A watch writes an activity as a session carrying little more than a duration, and puts those numbers in *separate* Health Connect records covering the same window — so the activity's page reported "Not available" for figures the watch had in fact recorded, directly above a chart of that same activity's step cadence and splits that added up to a distance the page refused to show. A device that records speed but no distance at all, such as a treadmill, now gets a distance derived from its speed, by the same arithmetic the splits already used.
- **Speed and cadence recorded on a ride or run are charted again**, and the metrics list no longer advertises figures the activity was never going to have — "Wheelchair pushes" and "Floors climbed" on a bike ride, permanently "Not available". A metric now appears when it has a value, or when its absence is worth reporting for that kind of activity; a value that was actually recorded is never hidden.
- Fix the large empty gap above and below the recording dashboard, which in outdoor mode's black background read as a broken screen.
- Fix the crash when importing an offline map pack or a large Apple Health export. The file picker read the whole file into memory before the import began, so a 205 MB pack ran out of memory before any import code ran.
- Fix adding a home-screen widget: the metric widget opened the beverage picker (and vice versa), the picker could crash after a selection, and the widget was sometimes never created at all.

## 2.0.1 - 2026-07-11

- **Your Health Connect data is not affected by this update.** Health Connect stores it outside OpenVitals, so the rewrite cannot touch it: steps, sleep, workouts, heart rate, hydration, and every other record stay exactly as they are.
- **Two app settings reset:** the dashboard tile order, and the beverage picked in the quick-beverage home-screen widget. Set them again after updating. A one-time migration carries the rest across automatically — goals, units, theme, the caffeine profile, the body and heart-rate profile, reminders, custom drinks, paired Bluetooth LE sensors, activity marker notes, offline map packs, and your logged beverages.
- Rebuild OpenVitals on Flutter. Same app, same features, same Health Connect data — and the foundation for an iOS version later. The package name and signing certificate are unchanged, so it installs as a normal update.
- **Activity splits.** Any activity with a distance is broken into segments — 1 km by default, configurable in Settings — showing pace, average heart rate, elevation, and how each segment compares to the activity's own average. Laps recorded by a watch are shown exactly as recorded; an activity with no per-time distance data is split evenly and labelled as an estimate rather than presented as a measurement.
- Make Apple Health imports much faster on large exports by skipping records in categories you did not select, and show real progress while the export is scanned instead of sitting at 0%.
- Fix missing heart rate at the start of a recorded activity.
- Fix the dashboard showing the default daily goals instead of yours, the beverage breakdown showing the app's package name instead of drink names, the missing beverage list in the Day view, and the metric carousel refusing to swipe after a tile was moved between pages.
- Share sanitized diagnostics logs directly from Settings.
- **Reminders may now arrive a few minutes later than the time you set.** Google restricts exact alarms to alarm-clock and calendar apps, so hydration and mindfulness reminders are delivered within a short window instead of on the dot.

## 1.9.0 - 2026-07-09

- Make Apple Health imports resumable with checkpointed parsing, staged write batches, and better recovery after interruptions.
- Move GPX, KML, KMZ, and FIT imports into Settings, Data Importers, and add bulk GPX/KML/KMZ import for saving multiple route files directly.
- Add Activities filtering by activity type and aggregate activity-type statistics for distance, duration, calories, heart rate, pace, and sessions.
- Improve period navigation with rolling day, week, month, and year ranges and clearer localized titles.
- Fix mindfulness availability handling, polish weight entry behavior, and add Weblate translation validation plus stronger language-picker coverage.

## 1.8.0 - 2026-07-06

- Add Estonian and an in-app language picker so the interface can be switched independently of the system language.
- Refine starting activities and the sleep graph in the weekly and monthly views.
- Improve Body Energy and fix a file permission issue affecting imports.
- Fix the quick-beverage home-screen widget and dashboard refreshing, and harden the XML importer against malformed data.
- Polish the design system across the app.

## 1.7.7 - 2026-07-05

- Add Body Energy explainability, breaking down which factors drive your daily score over time with a dedicated timeline chart.
- Clean up and harden the Apple Health importer with clearer category handling, geo-distance helpers, and more consistent activity/route/workout conversions.
- Improve the quick-beverage home-screen widget with better drink ordering and configuration handling.
- Refresh docs for the Apple Health import and privacy/support/diagnostics pages.

## 1.7.6 - 2026-07-04

- Add a configurable quick beverage home-screen widget so saved containers can log hydration, caffeine, and nutrition faster.
- Improve beverage entry with tap-to-save containers, better daily-goal context, custom amount and category handling, and persisted nutrition defaults.
- Upgrade activity import with richer FIT activity/course/workout parsing, route-less FIT support, imported calories, duration and title inference, and clearer import errors.
- Split Heart and Vitals into clearer metric destinations, add a blood-pressure vitals view, and streamline Settings and navigation flows.
- Refresh docs, README screenshots, and Play Store screenshots, including the reorganized app guide, feature guide, how-to pages, and offline maps notes.

## 1.7.5 - 2026-07-03

- Add a dedicated Caffeine detail flow with active-caffeine modeling, source and time-of-day insights, bedtime guidance, dashboard support, and configurable sensitivity and limits.
- Expand beverage logging with a Room-backed drink catalog, 215 preset drinks, editable categories, custom drinks, and nutrition defaults while keeping Health Connect records as the source of truth.
- Save richer beverage entries by pairing effective hydration with caffeine and nutrition values, and preserve custom drink ordering and categories across app launches.
- Backfill activity detail data from related Health Connect records so historical workouts can show more complete sessions and metrics.
- Improve support and release stability with crash-report email drafts, database migration coverage, Zulip links, and cleaner Gradle/Woodpecker release steps.

## 1.7.4 - 2026-07-02

- Add a dedicated Body Energy detail flow with calibration controls, timeline loading, dashboard support, and widget data.
- Show saved Bluetooth LE sensor connection status and battery levels in dashboard and recording surfaces.
- Add a rest-timer bell for repetition activity recordings.
- Use fuller raw samples in day metric views so same-day charts and detail data stay more accurate.
- Keep the local app internet-free by removing inherited network access, while improving diagnostics, Apple Health import logging, and release automation.

## 1.7.3 - 2026-06-30

- Remove the local dashboard summary cache and related warmup controls so metric refreshes read directly from Health Connect with less stale state.
- Simplify dashboard refresh loading and repository queries after cache removal.
- Improve sleep handling by merging overlapping sessions and surfacing sleep summary data more consistently.
- Fix weekly activity progress markers so past days without activity are not drawn as completed.
- Fix data source attribution text fitting for long provider and app names, with regression coverage.

## 1.7.2 - 2026-06-30

- Add a sleep-stage time graph so overnight sessions are easier to scan by time of night.
- Improve drag-and-drop mechanics for reorderable dashboard widgets and metric detail sections.
- Fix dashboard carousel behavior after widget and layout changes.
- Fix weekly activity visuals when a day has no activity.
- Expand connected-flow and visual-regression coverage for dashboard, hydration, manual entry, settings, and shared Material components.

## 1.7.1 - 2026-06-30

- Extend reorderable metric detail sections across activities, calories, hydration, nutrition, heart/vitals, sleep, and body screens.
- Improve Apple Health import diagnostics with clearer error/report copy actions and more detailed import logging.
- Fix heart data loading for days with more than 1,000 samples by paging reads before chart aggregation.
- Refine dashboard and metric internals with feature-owned repositories, presentation mappers, and smaller screen components for steadier refreshes.
- Stabilize release/debug build signing and add coverage for weekly sleep and hydration layouts.

## 1.7.0 - 2026-06-29

- Add controls for reordering metric detail sections so charts, statistics, entries, and guidance can match your workflow.
- Add a high-contrast outdoor recording theme and improve widget-edit scrolling while recording.
- Add post-activity speed and cadence charts, and trim duplicated heart-rate sensor samples during recording.
- Make Apple Health imports safer for large exports with targeted lookups and time-window chunking.
- Fix Health Connect permission handling and reduce oversized heart/chart reads that could trigger CursorWindow errors.

## 1.6.3 - 2026-06-28

- Add a manual carbohydrate entry flow that writes total-carbohydrate NutritionRecords to Health Connect.
- Add offline activity maps by importing PMTiles or Mapsforge map packs from Settings.
- Show imported offline maps while recording activities and previewing saved or imported routes, with map recentering and background import progress.

## 1.6.2 - 2026-06-27

- Add a configurable activity recording dashboard with Focus mode for a cleaner in-recording view.
- Add strength training recording with heart-rate monitoring and richer repetition training heart-rate stats.
- Keep the screen awake during activity recording when enabled and make recording setup and review flows cleaner.
- Improve Bluetooth LE sensor timeout handling so stale sensor values drop out more reliably.
- Fix daily HRV loading and defer heavier dashboard widget reads to improve dashboard responsiveness.
- Fix release automation so the signed Android App Bundle is found reliably during publishing.

## 1.6.1 - 2026-06-27

- Fix activity tracking notifications so tapping the notification reopens the active recording screen.
- Improve dashboard and background metric loading performance, including coalesced refreshes and more efficient summary reads.
- Add Italian translations and make Italian available in the in-app language selector.

## 1.6.0 - 2026-06-27

- Add a dedicated debug version that can be installed alongside production builds for safer troubleshooting.
- Automatically hide hydration reminder notifications after a hydration entry is saved.
- Add Fat-Free Mass Index (FFMI) to body composition insights when weight, height, and body fat data are available.
- Add experimental Bluetooth LE sensor integration for activity recording.
- Implement a refreshed UI/UX across the app with clearer navigation, metric screens, and entry flows.

## 1.5.1 - 2026-06-24

- Add persistent derived metric storage for dashboard and home widget summaries so calculated metrics can be reused across refreshes.
- Fix Daily Readiness and metric home widgets so cached and freshly calculated values load more reliably.
- Let OpenVitals-owned activities be deleted directly from the activity summary flow with swipe-to-delete handling.
- Improve activity entry and recording flows with safer training-plan updates, corrected planned start times, clearer repetition stats, and a fix for repetitive activity recording crashes.
- Persist the last custom hydration amount more reliably and keep release automation aligned with the restored direct Google Play production upload path.

## 1.5.0 - 2026-06-24

- Add configurable Android home screen widgets for Daily Readiness, Body Energy, Today Vitals, and selected metric summaries.
- Improve GPS activity recording with split analysis, voice announcements, marker preferences, and cleaner non-GPS activity validation.
- Add set-based training timers and Health Connect training-plan support for activity entries and recordings.
- Let OpenVitals-owned hydration, body, vitals, and mindfulness entries edit their date and time as well as values.
- Add a cached metric summary layer and background warmup to make dashboard and period detail loads faster.
- Make large Apple Health imports safer with streaming conversions, narrower import repository boundaries, and clearer worker dependency handling.
- Restore direct Google Play production uploads from the approved Woodpecker deployment.
- Refresh Health Connect permission guidance, remember the last custom hydration amount, update runtime/test dependencies with Gradle locks, add `Gemfile.lock`, and split large feature files.

## 1.4.1 - 2026-06-13

- Fix metric hydration totals so small entries such as 150 ml display as `0.15 L` instead of rounding to `0.2 L`.
- Keep hydration preset taps writing the exact tapped container volume, with regression coverage for the 150 ml tea cup preset.
- Remove the selected highlight from hydration container presets in normal add mode because tapping a preset now saves immediately.
- Remove the redundant Today label above the hydration goal progress wave.

## 1.4.0 - 2026-06-13

- Add Daily Readiness with local Body Energy, Training Readiness, HRV status, intensity minutes, physiological stress, adaptive goals, and explanation screens.
- Improve hydration logging so tapping a container size can save immediately, with container controls shown before beverage type and better today progress feedback.
- Refresh hydration details with a wavy day trend, clearer week charts, and corrected totals based on the rounded values shown in the app.
- Let day-based detail screens move between days by swiping the date header, and refresh the dashboard automatically after saving manual entries.
- Move cycle tracking into explicit Health Connect permission categories in onboarding and Settings.
- Fix the monochrome launcher icon and keep release CI publishing Codeberg artifacts while automated Google Play uploads/promotions remain disabled.

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
