# Body Metrics

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `features/body`, `features/manualentry/body`, `data/repository/BodyRepository.kt`.
> **Navigation:** `Screen.Metric`, body entry routes; widgets `WEIGHT`, `HEIGHT`, `BMI`, `FFMI`, `BODY_FAT`, `LEAN_MASS`, `BMR`, `BONE_MASS`, `BODY_WATER_MASS`.
> **Related:** [Feature map](feature-map.md), [Manual entry of metrics](manual-entry-metrics.md), [Statistics](statistics.md).

The body feature owns period-based detail screens for body measurement and composition metrics read from Health Connect.

## Implemented Metrics

Body metric detail screens currently cover:

- Weight.
- Height.
- BMI.
- Body fat.
- Lean mass.
- Basal metabolic rate.
- Bone mass.
- Body water mass.

BMI and FFMI-style context are derived from available measurements. Derived values should explain missing prerequisites instead of pretending the calculation is complete.

## Detail Pattern

Body metrics follow the canonical period-detail pattern:

- Day, week, month, and year ranges.
- Previous/next period navigation capped at the current period.
- Calendar selection and pull to refresh.
- Period charts, selected-day entries, statistics, comparisons, personal baselines, and data confidence.
- Entry lists that allow edit/delete only for OpenVitals-created records.
- Reorderable metric detail sections.

Manual body entry lives under `features/manualentry/body` and writes explicit user-entered records to Health Connect. The dashboard and body detail screens remain read-oriented.

## Charts Over A Period

Week, month and year draw a trend line over a scale fitted to your values; only
Day uses the intraday chart.

Month and year used to show a calendar of coloured dots, one per day, shaded by
how big that day's number was. That works for something that can be zero and can
be huge, like steps. It does not work for weight, which spends its life inside a
narrow band: forty dots of near-identical colour answered "did you weigh
yourself on the 14th" while hiding the thing you opened the screen to see, which
is which way the line is going.

The scale is fitted to your readings rather than starting at zero, because a
kilogram of drift is invisible on an axis that begins at nothing.

## Data Boundaries

The body feature reads through `BodyRepository`. Each body dashboard tile opens its own focused metric screen directly — tapping Weight opens the weight detail, not an intermediate Body overview. New body metric work should keep feature-specific formatting, cards, charts, and rows in `features/body`; shared components should only move out when another feature really reuses them.
