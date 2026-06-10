# Health Connect

Health Connect is Android's on-device health data store. OpenVitals reads records from Health Connect and writes only the entries you explicitly save.

OpenVitals does not replace Health Connect and does not keep a separate cloud copy of your health records.

## Read Coverage

OpenVitals can show these Health Connect areas when permission and data are available:

- Activity: steps, distance, exercise sessions, floors climbed, elevation gain, wheelchair pushes, active calories, total calories, speed, power, cadence, planned exercise, and workout routes.
- Sleep: sessions and sleep stages.
- Heart: heart rate, resting heart rate, and HRV.
- Body: weight, height, BMI, body fat, lean mass, basal metabolic rate, and bone mass.
- Hydration and nutrition: hydration totals, calories in, meals, and macros.
- Mindfulness: mindfulness sessions when the installed Health Connect provider supports them.
- Vitals: blood pressure, SpO2, respiratory rate, body temperature, and VO2 max.
- Cycle: menstruation, ovulation tests, cervical mucus, and basal body temperature after explicit opt-in.

## Write Coverage

OpenVitals writes to Health Connect only from explicit entry or import workflows:

- Hydration.
- Sleep sessions from supported imports.
- Exercise sessions and optional route, distance, elevation gain, active calories, and total calories records.
- Heart rate and resting heart rate from supported imports.
- Lean body mass, basal metabolic rate, bone mass, body water mass, floors climbed, wheelchair pushes, nutrition, VO2 max, blood glucose, and cycle records from supported imports where Health Connect allows them.
- Mindfulness sessions.
- Weight, height, and body fat.
- Blood pressure, SpO2, respiratory rate, and body temperature.

## History And Background Access

Health Connect may limit how much historical data an app can read unless Health history access is granted.

OpenVitals can request Health history and background-read access where Android and Health Connect support them. Long reads may still be chunked or retried to avoid Health Connect rate limits.

## Routes

Workout routes are sensitive Health Connect data. Route previews require manual approval from Health Connect settings.

OpenVitals can import route files into activity entries, record GPS routes, open saved routes in map apps, and export routes as GPX or KMZ when the required data is available.

## Platform Notes

- Android 14 and newer include Health Connect as part of the system.
- Android 13 and older need the separate Health Connect app.
- Work profiles do not support Health Connect.
- Mindfulness support depends on the installed Health Connect provider version.
