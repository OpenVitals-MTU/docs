# Contributing

OpenVitals is early and practical feedback is valuable.

## Useful Bug Reports

Include:

- Device model.
- Android version.
- Health Connect provider and version if known.
- OpenVitals version.
- Which permissions were granted.
- Which screen or workflow failed.
- Whether the data exists in Health Connect.
- Screenshots or logs when they help explain the issue.

## Where To Report Issues

Use the Android app repository for app bugs:

[codeberg.org/OpenVitals/android-app/issues](https://codeberg.org/OpenVitals/android-app/issues)

Use the documentation repository for documentation or website issues:

[codeberg.org/OpenVitals/docs/issues](https://codeberg.org/OpenVitals/docs/issues)

For contributor discussion, join the OpenVitals Zulip:

[openvitals.zulipchat.com](https://openvitals.zulipchat.com/)

## Development Workflow

1. Clone the Android app repository.
2. Build or run `./gradlew verifyLocalApp`.
3. Keep the local app internet-free.
4. Keep Health Connect writes inside explicit Add entry or edit-entry workflows.
5. Add tests when changing shared behavior, permissions, period selection, formatting, or Health Connect query logic.

## Documentation Workflow

1. Clone the documentation repository.
2. Install npm dependencies.
3. Run `npm run dev` for local preview.
4. Run `npm run build` before opening a pull request.

```bash
git clone https://codeberg.org/OpenVitals/docs.git
cd docs
npm install
npm run build
```

## Translation Notes

The Android app currently supports English, Spanish, German, Italian, and Estonian language preferences.

Translate OpenVitals on Codeberg Translate:

[translate.codeberg.org/projects/openvitals/android-app](https://translate.codeberg.org/projects/openvitals/android-app/)

When changing user-facing app copy, keep translations in sync or call out the missing translation work clearly in the issue or pull request.
