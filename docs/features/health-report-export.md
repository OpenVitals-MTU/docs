# Health Report Export

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `features/reports/`, `data/repository/report/`, `domain/report/` (Kotlin app).
> **Navigation:** Settings, Import & export, Health report.
> **Related:** [Feature map](feature-map.md), [Settings and preferences](settings-and-preferences.md), [Heart and vitals](heart-and-vitals.md).

Health report export builds a PDF of your health data straight from Health Connect: pick the metrics, a detail level, and how far back to go, and OpenVitals produces a document you can hand to a doctor or keep for your records. The report is generated entirely on the device with the platform's own PDF engine - nothing leaves the phone unless you share it.

## Building a Report

1. **Pick metrics.** All exportable metrics your Health Connect provider supports are listed, grouped by section.
2. **Pick detail and range.** Daily, weekly, or monthly buckets; a preset lookback (30, 90, 180, or 365 days) or a custom start and end date.
3. **Build.** Progress shows the metric being read, and the build can be cancelled. A metric that fails or times out costs its own section, never the report.
4. **Share or save.** The finished PDF can be shared to any app or saved through the system file picker.

## What the PDF Contains

Every metric gets a chart (bars for totals, a min-max banded trend line for averages), a stats strip, and a data table. Metrics with more structure get clinical sections:

- **Blood pressure:** separate systolic and diastolic statistics, averages by meal context, and every reading listed with its body position and cuff location. Contexts chosen at entry are shown as such; estimated ones are marked.
- **Blood glucose:** averages by relation to meal, fasting first. Continuous-monitor volumes fall back to the daily chart.
- **Workouts:** totals per activity type and the full session list.
- **Sleep:** average bedtime and wake-up, the deep/REM/light/awake stage mix, and one row per night.
- **Body metrics** show their change over the range; **body temperature** lists every reading.

## Honest About What Is Missing

The report says so, in print, when something could not be included: metrics without read permission, a range truncated by the missing history permission, a cancelled build, or a metric whose read failed.
