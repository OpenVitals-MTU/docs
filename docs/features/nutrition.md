# Nutrition

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `features/nutrition`, `features/manualentry/nutrition`, `data/repository/NutritionRepository.kt`.
> **Navigation:** `Screen.Nutrition`, `Screen.CarbsEntry`, `Screen.Metric`; widgets `CALORIES_IN`, `PROTEIN`, `CARBS`, `FAT`.
> **Related:** [Feature map](feature-map.md), [Manual entry of metrics](manual-entry-metrics.md), [Preloaded beverage nutrition reference](preloaded-beverage-nutrition.md).

The nutrition feature owns period-based nutrition detail screens for intake metrics read from Health Connect.

## Implemented Metrics

Nutrition metric detail screens currently cover:

- Calories in.
- Protein.
- Carbohydrates.
- Fat.

Caffeine is intentionally separate. It is a caffeine-specific analytics and setup experience described in [`beverage-logging-and-caffeine.md`](beverage-logging-and-caffeine.md).

## Detail Pattern

Nutrition metrics follow the canonical period-detail pattern:

- Day, week, month, and year ranges.
- Selected anchor date.
- Previous/next navigation and calendar selection.
- Pull to refresh.
- Goal progress for supported intake metrics.
- Period charts, selected-day breakdowns, entries, statistics, comparisons, confidence, and source labels.
- Reorderable detail sections.

Nutrition records remain in Health Connect. OpenVitals writes nutrition records through explicit entry flows such as carbohydrate entry and beverage logging; the nutrition detail screens remain read-oriented.

## Daily Averages Over A Period

Nobody eats by the month. Over a week, month or year each nutrient tile leads
with the **daily average** and keeps the period total underneath, so the number
you read first is the one that means something. This covers the vitamin and
mineral grids as well as calories, protein, carbs and fat.

A single day is left alone: its total already is the day.

### Which days the average divides by

Settings, Nutrition holds one switch: **Average logged days only**, on by
default.

- **On** — divides by the days you logged food. The average of the meals you
  actually recorded, undiluted by the days you did not.
- **Off** — divides by every day of the period so far. A day with nothing
  recorded counts as a day you ate little.

Either way, a period still running divides only by the days that have happened.
On the 13th of the month, your monthly average is this month's food over
thirteen days, not thirty-one.

## Related Features

- [`manual-entry-metrics.md`](manual-entry-metrics.md): carbohydrate entry.
- [`beverage-logging-and-caffeine.md`](beverage-logging-and-caffeine.md): beverage nutrition defaults.
- [`preloaded-beverage-nutrition.md`](preloaded-beverage-nutrition.md): preset beverage reference data.
