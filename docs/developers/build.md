# Build From Source

## Android App

OpenVitals is a Flutter app (Riverpod, freezed, go_router, drift). It was rebuilt on Flutter in 2.0.0; the previous Kotlin/Compose implementation survives only in git history.

### Prerequisites

- **Flutter SDK 3.44.x** (Dart `^3.12.0`). CI builds on `ghcr.io/cirruslabs/flutter:3.44.0`.
- **Android SDK Platform 37**, with SDK Build-Tools 37.0.0. `compileSdk` is 37.

  Note the package is **`platforms;android-37.0`**, not `android-37` — Android ships minor-versioned platforms now. `sdkmanager` only *warns* on an unknown package and still exits 0, so a typo here does not fail there; it fails much later inside Gradle looking like an unrelated problem.

  ```bash
  sdkmanager "platforms;android-37.0" "build-tools;37.0.0"
  ```

- **CMake 3.21 or newer, and Ninja.** This one is not optional, and it is not only for builds: a native-assets build hook (`flutter_scene_importer`, pulled in by the map renderer) shells out to CMake, and **that hook also runs on `flutter test` and `flutter analyze`**. Without CMake, *every* Flutter command fails with `Building native assets failed` and a bare `ProcessException: No such file or directory / Command: cmake` — which never names the tool it is missing.

  If Flutter is installed as a snap, its bundled CMake 3.16 shadows the host one on `PATH` and produces exactly this failure even when a newer CMake is installed.

- **JDK 17**.
- `minSdk` is 26 (a Health Connect requirement); `targetSdk` is 36.

### Build And Run

```bash
git clone https://codeberg.org/OpenVitals/mobile-app.git
cd mobile-app
flutter pub get
flutter run
```

For a release build:

```bash
flutter build apk --release
```

### Checks

Run the same checks CI runs, before opening a pull request:

```bash
flutter analyze lib test
flutter test
dart run tool/verify_l10n.dart
```

`dart run tool/verify_l10n.dart` is the translation gate. It replaces the Kotlin app's `./gradlew verifyTranslations`, and it also runs as part of `flutter test`.

Generated code (`*.g.dart`, `*.freezed.dart`, and `lib/l10n/app_localizations*.dart`) is committed to the repository, and CI does not regenerate it. After changing a freezed model, a drift table, or a Riverpod generator annotation:

```bash
dart run build_runner build --delete-conflicting-outputs
```

After changing strings, regenerate the localizations and commit the result — CI fails if the generated Dart is stale:

```bash
flutter gen-l10n
```

The local app is the Health Connect-only app and should stay internet-free.

## Documentation Site

Clone this documentation repository:

```bash
git clone https://codeberg.org/OpenVitals/docs.git
cd docs
npm install
npm run dev
```
