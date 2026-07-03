# Build From Source

## Android App

Clone the local app repository:

```bash
git clone https://codeberg.org/OpenVitals/android-app.git
cd android-app
./gradlew verifyLocalApp
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
