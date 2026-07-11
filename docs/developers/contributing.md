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

[codeberg.org/OpenVitals/mobile-app/issues](https://codeberg.org/OpenVitals/mobile-app/issues)

Use the documentation repository for documentation or website issues:

[codeberg.org/OpenVitals/docs/issues](https://codeberg.org/OpenVitals/docs/issues)

For contributor discussion, join the OpenVitals Zulip:

[openvitals.zulipchat.com](https://openvitals.zulipchat.com/)

## Development Workflow

OpenVitals is a Flutter app (Riverpod, freezed, go_router, drift). See [Build from source](build.md) for the toolchain, including the two prerequisites that most often bite: the `platforms;android-37.0` SDK package and CMake 3.21+ with Ninja.

1. Clone the Android app repository and run `flutter pub get`.
2. Run the app with `flutter run`.
3. Run the checks before pushing:

   ```bash
   flutter analyze lib test
   flutter test
   dart run tool/verify_l10n.dart
   ```

4. Re-run `dart run build_runner build --delete-conflicting-outputs` after changing a freezed model, a drift table, or a Riverpod generator annotation. Generated code is committed and CI does not regenerate it.
5. Keep the local app internet-free.
6. Keep Health Connect writes inside explicit Add entry or edit-entry workflows.
7. Add tests when changing shared behavior, permissions, period selection, formatting, or Health Connect query logic.

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

Translate OpenVitals on Codeberg Translate:

[translate.codeberg.org/projects/openvitals/mobile-app](https://translate.codeberg.org/projects/openvitals/mobile-app/)

### Where The Strings Live

App strings are **Flutter ARB catalogs**, not Android `strings.xml`. Weblate edits the ARB files directly and opens pull requests against the app repository, so a hand edit and a Weblate edit are the same kind of change.

- `lib/l10n/app_en.arb` is the template and source language.
- `lib/l10n/app_de.arb`, `app_es.arb`, `app_it.arb`, `app_et.arb` are the shipped translations.
- `lib/l10n/app_localizations*.dart` are generated from the ARB files by `flutter gen-l10n`. They are committed, and CI fails if they are stale.

When adding or changing user-facing copy, edit the key in `lib/l10n/app_en.arb`, run `flutter gen-l10n`, and leave the other locales to Weblate. A missing key falls back to English. Validate with `dart run tool/verify_l10n.dart`.

### Placeholders Are ICU

Placeholders use ICU braces such as `{arg0}`, `{count}`, or `{value}` — **not** the old Android `%1$s` / `%1$d` forms, and the doubled `%%` escape no longer exists. Preserve plural and select structures (`{count, plural, ...}`) including every category the source uses. Apostrophes are literal: write `Couldn't`, not `Couldn''t`.

### Hosting Versus Shipping

Hosting a language and shipping it are two different things:

- A language is **hosted** in Codeberg Translate from **0%**, so translators have somewhere to put their work.
- A language is **shipped** — offered in the in-app language picker and matched against the device locale — only once it is **above 70%** translated and someone adds the corresponding app-language constant. Crossing 70% is a notice from CI, never a build failure.

Shipped app languages today are English, Spanish, German, Italian, and Estonian.
