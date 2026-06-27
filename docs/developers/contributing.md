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

Use the website repository for documentation or website issues:

[codeberg.org/OpenVitals/website/issues](https://codeberg.org/OpenVitals/website/issues)

## Development Workflow

1. Clone the Android app repository.
2. Build or run `./gradlew verifyLocalApp`.
3. Keep the local app internet-free.
4. Keep Health Connect writes inside explicit Add entry or edit-entry workflows.
5. Add tests when changing shared behavior, permissions, period selection, formatting, or Health Connect query logic.

## Documentation Workflow

1. Clone the website repository.
2. Install MkDocs dependencies.
3. Run `mkdocs serve` for local preview.
4. Run `mkdocs build --strict` before opening a pull request.

```bash
python -m pip install -r requirements.txt
mkdocs build --strict
```

## Translation Notes

The Android app currently supports English, Spanish, German, and Italian language preferences.

When changing user-facing app copy, keep translations in sync or call out the missing translation work clearly in the issue or pull request.
