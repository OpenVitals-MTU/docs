# Local And Connected Editions

OpenVitals is being split into two clearly different Android apps.

## Local App

Repository: [OpenVitals/android-app](https://codeberg.org/OpenVitals/android-app)

The local app is the Health Connect-only app.

- No account.
- No OpenVitals server.
- No app-level internet permission.
- Reads Health Connect records on device.
- Writes only entries the user explicitly saves.
- Keeps local preferences such as units, language, widget order, hydration reminders, and cycle opt-in.

This is the app documented on this website unless a page explicitly says otherwise.

## Connected App

Repository: [OpenVitals/android-app-connected](https://codeberg.org/OpenVitals/android-app-connected)

The connected app is planned as a separate app and repository for online features.

Possible connected features include accounts, activity sharing, and Fitpub-like social workflows. Those features should not be mixed into the local app.

## Why Separate Them?

The split keeps the local app easy to reason about:

- Users can verify that the local app has no internet access.
- Health Connect data does not silently cross into account or sharing code.
- Release pipelines can prove which app they build.
- Connected features can evolve without weakening the local app's privacy boundary.

## Shared Code

Shared implementation should move only into stable libraries or artifacts when it is mature enough. The local app should not depend on connected-app behavior, accounts, or servers.
