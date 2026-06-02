# Build From Source

## Android App

Clone the local app repository:

```bash
git clone https://codeberg.org/OpenVitals/android-app.git
cd android-app
./gradlew verifyLocalApp
```

The local app is the Health Connect-only app and should stay internet-free.

## Connected App

Clone the connected app repository:

```bash
git clone https://codeberg.org/OpenVitals/android-app-connected.git
cd android-app-connected
./gradlew :app:assembleDebug
```

## Website

Clone this website repository:

```bash
git clone https://codeberg.org/OpenVitals/website.git
cd website
python -m pip install -r requirements.txt
mkdocs serve
```
