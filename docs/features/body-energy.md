# Body Energy

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `lib/features/bodyenergy/`, `lib/features/readiness/`, `lib/domain/insights/body_energy_timeline.dart`, `lib/data/repository/body_energy_timeline_cache_store.dart` (the app's only derived-value cache; it lives in `SharedPreferences`, not drift).
> **Navigation:** `/daily_readiness/body_energy/:bodyEnergyDate` (the dashboard Body Energy tile and the readiness home screen widget land here); calibration under `/settings/recovery`.
> **Related:** [Feature map](feature-map.md), [Daily readiness](daily-readiness.md), [Home screen widgets](home-widgets.md).

Body Energy is a local derived view that estimates available energy across the day from supported wellness signals. It is intentionally a selected-day experience rather than a canonical `Day / Week / Month / Year` metric-detail screen.

## What It Shows

Body Energy can appear in:

- The dashboard tile.
- The Body Energy detail view, which also hosts [Daily Readiness](daily-readiness.md).
- Android home screen widgets.

The detail view reads as a story for the selected day: the battery first (the score and the day's timeline share one card), then what moved it, then the Daily Readiness verdict those movements feed, then the inputs used and how the estimate is made. Day navigation moves the readiness card and the timeline together.

## Calibration

Body Energy supports calibration during onboarding and in Recovery settings. Calibration helps the local estimate better fit the user, and can be reset when needed.

## Signals

Body Energy is calculated locally from available Health Connect-backed signals and app preferences. Missing or sparse source data lowers confidence instead of pretending the estimate is complete.

The measured battery also feeds the Daily Readiness verdict: a drained day holds training recommendations back, and a charged one lifts them. See [Daily Readiness](daily-readiness.md).

## Data Model

Body Energy is not a raw Health Connect record. It is an OpenVitals-derived wellness estimate and should be treated as general guidance, not medical advice.

## Privacy

The calculation runs on device. OpenVitals does not upload Body Energy inputs or results to an OpenVitals server.
