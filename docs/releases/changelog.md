# Changelog

This page summarizes the English release notes for the local Android app.

For full localized notes, see the Android app repository changelog.

OpenVitals was rebuilt on Flutter in 2.0.1. Entries for 1.9.0 and earlier describe the previous Kotlin app. (2.0.0 was prepared but never published, so 2.0.1 carries everything since 1.9.0.)

## 2.2.8 - 2026-07-20

This release adds heart-rate recovery, rebuilds hydration and mindfulness reminders so they survive an app update rather than only a reboot, and ties the numbers on screen to the research behind them. It also fixes a Calories screen that could hang and a 30-day calendar that only drew part of the month.

- **Heart-rate recovery.** A guided test measures how quickly your heart rate falls in the minute after exertion. Recovery also appears on a workout, and is tracked over weeks and months, read from the samples Health Connect already holds. It is measured only from a deliberate test now, so a heart rate that rose after exercise is no longer misreported as a recovery.
- **Reminders that survive an app update.** Hydration and mindfulness reminders were rebuilt from the ground up so they keep firing after every update, not just after a reboot. Hydration nudges now anchor to your last drink — the countdown resets each time you log one, and is skipped if you drank recently — and fire on the exact minute when you allow exact alarms.
- **Every number shows its science.** The sleep, daily-readiness, body-energy, cardio-load and caffeine screens carry tappable links to the research behind their calculations. The sleep goal also counts only the time you were actually asleep, so awake time inside a sleep session no longer counts toward it.
- **Tap a day in the month calendar to open it.** On any metric's month view, tapping a day drops you straight into that day's detail. You can also read the time off the sleep hypnogram by scrubbing across it, and it steps aside when a night is only partly staged instead of drawing a misleading graph.
- **The Calories Day view could hang on its loading spinner forever** on some phones; it no longer does. The "Last 30 days" calendar now shows all thirty days across a month boundary instead of only the part that fell in one calendar month, and a past 30-day window is titled by its dates rather than a single month it mostly is not in.
- **The sleep score and sleep efficiency detail screens are reachable again**, and the sleep day view no longer draws the hypnogram over its own labels, drops stats that did not belong there, and calls the duration "time in bed".
- **Recording fixes.** A workout could fail to save because it never asked to write its own heart rate; a session could end before its last sample; and your own edits now show immediately, writing through the daily cache instead of waiting for the next sync.
- Spanish, German, Estonian and Italian are fully translated.

## 2.2.7 - 2026-07-17

A maintenance release that brings back editing and deleting your own entries, makes large Apple Health imports dramatically faster with a working report at the end, and fixes the sleep chart, the workout rest bell and the hydration widget.

- **Editing and deleting the entries you logged in the app works again.** Swipe a hydration, nutrition, caffeine or mindfulness entry to delete it, tap the pencil to edit a hydration or mindfulness entry, and edit or delete an activity from its detail screen. Only entries OpenVitals wrote are editable; records from other apps stay read-only. These were lost when the app moved to Flutter.
- **Large Apple Health imports are dramatically faster.** The per-batch duplicate check is bounded to the batch's own time window instead of scanning your whole history on every batch, which grew slower and slower as the import went on. The report you can copy or save when it finishes works again too: a big export's report reaches tens of megabytes, which the previous store could not hold, so it is now written to a file.
- **The workout rest-timer bell ducks your music or podcast for the chime** instead of stopping it, then restores it to full volume.
- **Logging a drink from the 1x1 home-screen widget clears an active hydration reminder**, the same as logging it inside the app.
- **The sleep chart no longer looks broken.** The day view no longer draws its stage graph over its own lane labels at larger system font sizes, and a day that includes a nap keeps the same rounded bars as every other day in the month view.

## 2.2.6 - 2026-07-17

The largest release since the Flutter rebuild. Large Apple Health exports import without running out of memory, Garmin FIT files import from a folder, and the long-range overviews are much faster.

- **Importing a large Apple Health export no longer runs out of memory.** The export is now read a piece at a time instead of loaded whole, so a multi-gigabyte file that used to crash a minute or two into the analysis now imports. Re-importing the same export no longer creates duplicate entries either — the identifier each record is matched on is stable again, so records you already imported are recognised instead of written twice.
- **Body Energy.** A new screen that scores how much energy your body signals support today, from recovery-side inputs — sleep, heart-rate variability, resting heart rate, physiological stress, temperature, hydration, nutrition and mindfulness — on a 0-100 scale, and calibrates to how you say you feel.
- **Garmin FIT files import from a folder.** Point the importer at a Garmin export and it reads sleep, heart-rate variability, resting heart rate and basal metabolic rate. Files it cannot map are reported as skipped rather than failing the whole import.
- **The Year and other long-range overviews are much faster.** They keep a local cache of daily summaries and update only what changed since the last sync, instead of re-reading a year of records every time you open them.
- **Sleep is more accurate.** Daytime naps are separated from the night, and overlapping sessions recorded by more than one source — a watch and a phone logging the same night — are de-duplicated instead of double-counted.
- **Charts pinch to zoom on every range**, and the zoom keeps working while you scroll the page.

## 2.2.5 - 2026-07-14

The download now says which phone it is for.

- **The APKs on the releases page are named after the architecture they are for.** 2.2.4 split the download in two, one per architecture, but named them after an internal version code, which tells you nothing about which one your phone wants. They are now clearly labelled `arm64-v8a` and `armeabi-v7a`. Take the arm64-v8a one unless you know your phone is an older 32-bit device; F-Droid and the Play Store still pick for you. The app inside each APK is byte-for-byte what 2.2.4 shipped.

## 2.2.4 - 2026-07-14

Half the download, and none of it for a phone you do not have.

- **The APK no longer carries libraries for architectures your phone cannot run.** Every download held both builds of the app — the 64-bit one and the 32-bit one — so whichever phone you have, half of what you downloaded was for somebody else's. It also held a third set of libraries, for x86_64, that could never have run at all. There is now one APK per architecture, containing only its own, and the download falls from 60 MB to 34. The releases page offers two APKs: nearly every phone made in the last decade wants the arm64-v8a one, and armeabi-v7a is there for older 32-bit devices. F-Droid and the Play Store pick the right one on their own.

## 2.2.3 - 2026-07-13

The last of the Google out of the build.

- **Google's dependency blob is no longer stamped into the APK.** Android's build tools quietly attach a block to every APK they sign: a list of every library the app was built from, encrypted with a Google key so that only the Play Store can read it. It survived the removal of Google Play Services because it is not a dependency at all — it is added at the moment of signing, after everything else is done. It is gone from the APK now. The app bundle uploaded to Play keeps it, because that is the one place it is actually read.

## 2.2.2 - 2026-07-13

The second half of what 2.2.1 started. 2.2.1 took Google's proprietary code out of the app so that F-Droid could build it; this one makes the build reproducible, which is what F-Droid needs in order to ship it.

- **The app now builds bit-for-bit identically on someone else's computer.** F-Droid does not take our word for what is in the APK: it builds the app from source on its own servers and compares the result, byte by byte, against the release published here, and only distributes the copy we signed if the two match. Everything already matched except twenty bytes in one library: a build-id, a hash the linker stamps in that silently records the paths of the machine that did the build. It is no longer stamped, so the app you download is provably the one the source produces.

## 2.2.1 - 2026-07-13

A packaging release, and a short one. OpenVitals no longer contains a line of Google proprietary code, which is what it takes for F-Droid to build it.

- **Google Play Services are gone from the app.** The location plugin depended on Google's proprietary location library, and the app never used it. Route recording has always asked Android's own location manager for satellite fixes directly, because Google's fused provider quietly mixes in network and wifi positions that are not the GPS readings a recorded route is actually made of. So the library sat in every build being nothing but a dependency, and it was the one thing standing between OpenVitals and F-Droid, whose scanner refuses to build an app that carries it. Nothing about recording changes.

## 2.2.0 - 2026-07-13

This release is about the charts. Every one of them was a picture you could look at and not ask anything of: you could see that the line went up somewhere in the afternoon, and no way to ask when, or how much. The numbers were in the data and never on the screen. They answer now.

- **Drag a chart to read it.** A crosshair follows your finger, a ring marks the sample, and a tooltip gives the value and the time it was taken. It snaps to a reading that was actually measured, never to a point the app invented between two of them — the curve between two readings is an interpolation, and a tooltip may only report a number that was really recorded.
- **The caffeine curve has a scale at last.** It drew the decay of caffeine in a body with no axes and no way to tell when any of it happened. It now reads milligrams down the side and midnight to midnight along the bottom, with a dashed line for the level to be under by bedtime, and a tick under each drink, so every rise sits above the drink that caused it.
- **Charts draw themselves in** — the line left to right, the bars up out of the axis, the ring round to its value. It is not decoration: it is the chart telling you which way to read it. If you have asked your phone to reduce motion, they are simply there, fully drawn.
- **Charts load into a chart-shaped skeleton instead of a spinner**, so the page no longer jumps when the data arrives. And an empty chart now looks like an empty chart, with an icon and a sentence, instead of a stray line of grey text.
- **New chart colours.** Eight of the seventeen metric accents were too faint to see against the background — gold scored 1.59:1 where 3:1 is the floor for a graphical object you are meant to see. Every accent clears it now, and keeps the hue it has always had: steps are still green, water is still blue, the heart is still rose.
- **Body Energy could draw a score above 100**, or below the lowest reading of the day, on a score defined as 0 to 100. The curve can no longer leave the range of the data it was drawn from, and it gained the 0-100 scale it never had.
- An axis could label two different heights with the same number, and a chart could fill the area under a line that was not there. Both fixed.
- German, Estonian and Italian said route import took GPX/KML/KMZ, while the app has read TCX since 2.1.0 — the one file type an indoor athlete would look for was the one those languages said it could not read. German, Spanish, Estonian and Italian are now complete.

## 2.1.0 - 2026-07-13

This release is about the activities the app was throwing away. A treadmill run, a trainer ride, a strength session — anything recorded without GPS — was refused at the door as a broken file. It was not broken. It had no route, and the app had quietly decided those were the same thing.

- **Import a whole folder of FIT files.** Pick the folder; every FIT file inside it is imported, including the ones in the sub-folders where a watch buries them. A file that will not read fails on its own and the rest of the folder carries on.
- **TCX files are now read** — the format Strava and Garmin actually export an indoor activity as, and one the app could not open at all. It is XML, so it used to fall through to the GPX reader, which found no track and blamed the file.
- **Indoor activities could not be imported.** A FIT file records *total* calories and has no active-calorie field, so the app filled the blank with an estimate — and stood that estimate next to the number the file had actually measured. A treadmill run arrived as 226 estimated active calories against its own recorded 208 total, and Health Connect refuses a record whose total is below its active. A guess was allowed to contradict a measurement. It is now estimate both or estimate neither.
- **An indoor bike ride imported as a run.** The app decided what an activity was by mashing the sport, the name and the *file name* into one string and testing "run" before "cycling" — so `Indoor_CyclingiSmoothRun.fit` was read as a run, and a 27 km ride was saved as one. The file's own sport is now asked first, and on its own. A stationary bike is also an activity type of its own at last, so a trainer ride is no longer saved as an outdoor one.
- **A GPX with no locations in it was refused.** Real exporters write indoor sessions as track points carrying a time, a heart rate and no coordinates at all — 1,931 of them for a strength session, in one of the files this was fixed against. The session was in the file the whole time: the timestamps give the start, the end and the duration, and the extensions give the heart rate.
- **A GPX with a heart rate in it lost the heart rate**, and imported as a bare line on a map.
- **Activities show an elevation profile** — where you climbed, not just how much. Health Connect stores one total for a session, so it can tell you that you climbed 240 m and never where; the profile is drawn from the route's own altitudes.
- **A speed graph appears even when the device recorded no speed**, which is most watches. It is rebuilt from the splits, which knew each segment's distance and duration all along, and drawn as a step — one flat run per split, because that is the resolution those numbers really have.

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
