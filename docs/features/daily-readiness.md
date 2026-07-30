# Daily Readiness

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `lib/features/readiness/` (the card and the stress and training-readiness detail screens), `lib/features/bodyenergy/` (the host screen), `lib/domain/insights/` (`daily_readiness.dart`, `stress_tracking.dart`, `body_energy_timeline.dart`).
> **Navigation:** lives inside the Body Energy view at `/daily_readiness/body_energy/:bodyEnergyDate`; details at `/daily_readiness/training_readiness/:trainingReadinessDate` and `/daily_readiness/stress/:stressDate`.
> **Related:** [Feature map](feature-map.md), [Body Energy](body-energy.md), [Sleep score and recovery](sleep-score-and-recovery.md).

Daily Readiness is a local wellness view that summarizes how ready the user may be for the day based on available Health Connect signals.

It is no longer a screen of its own. The readiness panel is a card inside the [Body Energy](body-energy.md) view: the two describe the same day from adjacent angles, and readiness linked to Body Energy for its detail anyway. The dashboard app bar icon that used to open it is gone; the view is reached through the dashboard's Body Energy tile or a Daily Readiness home screen widget.

## What It Includes

- Daily Readiness score.
- Training Readiness, with its own detail screen.
- HRV status.
- Intensity minutes.
- Physiological stress, with its own detail screen.
- Recommended activity, activity to avoid, alternatives, and adaptive goal context.
- The "Why" factor list explaining what moved the verdict.

## How It Works

OpenVitals combines available sleep, heart, activity, HRV, and stress-related signals using local rules. The card explains which signals were available and how missing data affected confidence.

When the Body Energy timeline is calibrated, the verdict also weighs the measured battery itself. The measured current score replaces the internal estimate, arriving at the day drained pulls an otherwise good morning out of "ready", and a low morning score still counts after a midday recharge. Without a calibrated timeline the internal estimate stands.

## Navigation

Readiness follows the Body Energy view's selected day. Moving between days, opening the calendar, or refreshing reloads both together.

## Caveat

Daily Readiness is not medical advice. It is a local, rule-based estimate intended for general wellness context.
