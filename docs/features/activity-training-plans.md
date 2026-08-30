# Activity And Training Plans

> **Status:** Current implemented behavior.
> **Audience:** Users and contributors.
> **Implementation:** `features/activity`, `features/manualentry/activity`.
> **Navigation:** `Screen.Activity`, `Screen.ActivityEntry`, widget `WORKOUT`.
> **Related:** [Feature map](feature-map.md), [Recording of activity](activity-recording.md), [Settings and preferences](settings-and-preferences.md).

OpenVitals supports both activity entry setup and planned workout context.

## Workout Plans

Since 2.7.1 the app builds, stores and runs workout plans of its own. Plans are Health Connect planned exercise sessions, so a plan made in another app appears here too, and one made here appears there.

### Building a plan

The Workout plans screen (Manage plans from the activity screen) lists plans as today, upcoming and past. A plan has a session type, and one or more blocks; each block has a round count and a list of steps. A step is an exercise picked from a searchable catalogue with a goal of reps or seconds, or a rest of so many seconds. Push-ups ride on Health Connect's "other workout" segment with a label, which is what makes them read as "Push-ups" in every app that shows the plan. Steps another app wrote in a shape the builder does not edit are kept as they are.

A plan created by another app can be started or copied to today, but not edited. A logged workout can be saved as a plan from its entry form, and a recent plan can be repeated.

### Running a plan

Start walks the plan as a guided run, with the setup screen listing every step and, for steps the phone can count, the sensor it will use. During the run:

- The banner shows the step, its round, the reps counted against the goal or the seconds left, and what comes next.
- Reps are counted by the phone where it can: push-ups and squats on the proximity sensor, pull-ups, rope skipping and trampoline jumping on the accelerometer. A step is matched to its recognizer by its segment type, and for the shared "other workout" segment by its label, loosely - "Pushups", "push ups" and the exercise's name in the phone's language all count. Steps nothing can sense are counted with the + and - buttons.
- Timed steps and rests count down on a ring that empties clockwise and move on by themselves. The last five seconds of a rest beep and vibrate.
- Every step and rest is spoken, and the notification carries the same progress.
- Done ends the step early, Skip skips it, Skip rest ends a rest, and Back a step reopens the one just finished with its count restored.
- Finish session saves the workout with the plan linked; the workout's detail screen shows the link and opens the plan.

## Planned Workouts

When Health Connect provides planned exercise data and permissions are granted, OpenVitals shows planned workouts in activity views. Plans created by other apps are read-only; OpenVitals does not edit plans created by other apps.

## Activity Defaults

The activity entry and recording flows can use helpful defaults:

- Latest recorded activity type.
- Favorite activity type from Settings.
- Route-capable defaults when starting route workflows.

These defaults reduce repeated setup without hiding the final review step.

## Training Structure

Activity entries and recordings can include repetition-oriented details such as total repetitions, sets, rest minutes, and strength-training context where Health Connect supports the saved data.

## Review And Save

Manual, imported, and recorded activities are reviewed before saving. This keeps the dashboard read-only while still allowing explicit writes to Health Connect.
