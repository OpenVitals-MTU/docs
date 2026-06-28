# Add Offline Maps

OpenVitals can render activity routes without app-level internet access when you import offline map packs. This guide explains where to get compatible files, how to prepare them, and how to import them on your phone.

For a short feature overview, see [Offline Maps Support](../features/offline-maps-support.md).

## Supported Formats

OpenVitals supports two offline map formats:

| Format | File extensions | Best for |
| --- | --- | --- |
| **PMTiles** | `.pmtiles` | General basemaps derived from OpenStreetMap. OpenVitals expects **Protomaps-compatible** PMTiles basemaps. |
| **Mapsforge** | `.map`, `.maps` | Vector outdoor maps, often with hiking and trail detail. |

You can import multiple packs, but OpenVitals renders **one format at a time**. Choose **PMTiles** or **Mapsforge** in Settings after import.

!!! tip "Start small"
    Regional map files are much easier to manage than a full-world download. Aim for the area where you record or preview activities.

## Option A: Download PMTiles

PMTiles is a single-file archive format. OpenVitals uses a Protomaps-style basemap renderer, so use PMTiles built from the [Protomaps Basemap](https://protomaps.com/) or another Protomaps-compatible source.

### Where to get PMTiles

**1. Protomaps daily builds (recommended starting point)**

Protomaps publishes OpenStreetMap-based basemap builds as PMTiles archives:

- Browse builds: [maps.protomaps.com/builds](https://maps.protomaps.com/builds)
- Documentation: [Protomaps Basemap Downloads](https://docs.protomaps.com/basemaps/downloads)

The full planet file is very large. For phone use, extract only the region you need (see below).

**2. Extract a regional file with the PMTiles CLI**

This is the most practical way to create a phone-sized `.pmtiles` file:

1. Install the [pmtiles CLI](https://docs.protomaps.com/pmtiles/cli) on your computer.
2. Pick a recent build from [maps.protomaps.com/builds](https://maps.protomaps.com/builds).
3. Choose the area you want. You can use:
   - A bounding box from a tool like [bboxfinder.com](http://bboxfinder.com/)
   - A GeoJSON polygon for your region
4. Run an extract command on your computer:

```bash
pmtiles extract https://build.protomaps.com/20260518.pmtiles my_area.pmtiles --bbox=MIN_LON,MIN_LAT,MAX_LON,MAX_LAT
```

Replace the input URL with a current build from the builds page, and replace the bounding box with your coordinates.

To keep the file smaller, limit zoom levels:

```bash
pmtiles extract https://build.protomaps.com/20260518.pmtiles my_area.pmtiles --bbox=MIN_LON,MIN_LAT,MAX_LON,MAX_LAT --maxzoom=14
```

Each extra zoom level can roughly double file size. Zoom 14 is often enough for running and cycling routes; zoom 15 adds more street-level detail.

5. Copy the finished `my_area.pmtiles` file to your phone.
6. Open **OpenVitals → Settings → Activities → Offline maps**.
7. Tap **Import offline map** and select your `.pmtiles` file.
8. Wait for the import to finish. Large files may continue importing in the background.

When import completes, the map appears in your offline map list with its file name, format, and size.

**3. Other PMTiles sources**

You may also find Protomaps-compatible `.pmtiles` files from map communities, self-hosted mirrors, or tools that output PMTiles. Before importing, confirm the file is a **vector basemap** in PMTiles format and not a terrain-only or incompatible tileset.

### PMTiles licensing

Protomaps basemaps are derived from OpenStreetMap. Respect the license terms of the map you download and keep attribution in mind when sharing screenshots or exports.

## Option B: Download And Import Mapsforge `.map` Files

Mapsforge maps use a single `.map` or `.maps` file per region. They work well for outdoor activities and include roads, paths, and land-cover detail from OpenStreetMap.

Download prebuilt maps from the official server, then import them into OpenVitals:

**[https://download.mapsforge.org/maps/v5/](https://download.mapsforge.org/maps/v5/)**

1. Open the link above in your phone or computer browser.
2. Choose the folder for your part of the world:
   - `africa/`
   - `asia/`
   - `australia-oceania/`
   - `central-america/`
   - `europe/`
   - `north-america/`
   - `russia/`
   - `south-america/`
   - `world/` (very low-detail overview only)
3. Open subfolders until you reach your country or regional map file. For example:
   - `north-america/` → `us/` or files like `us-west.map`
   - `europe/` → country folders such as `germany/`, `france/`, or `netherlands/`
4. Download the `.map` file and wait until it finishes. Files are often hundreds of megabytes to a few gigabytes.
5. If you downloaded on a computer, copy the file to your phone (USB, cloud storage, Syncthing, or similar). On your phone, downloads usually land in **Downloads**.
6. Open **OpenVitals → Settings → Activities → Offline maps**.
7. Tap **Import offline map** and select your `.map` file.
8. Wait for the import to finish. Large maps may continue importing in the background.
9. Under **Render format**, choose **Mapsforge** if you also imported PMTiles files.
10. Start or preview an activity — the map renders automatically when your route is inside the downloaded area.

!!! tip "Pick the smallest region you need"
    Prefer a country or regional `.map` file over a very large multi-region file. Smaller maps import faster and use less storage.

Maps on this server are © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, licensed under ODbL.

### Other Mapsforge sources (optional)

If you need a different style or more outdoor detail, these community sources also provide `.map` files:

- [OpenAndroMaps](https://www.openandromaps.org/en/downloads) — hiking-focused maps, often packaged in `.zip` archives
- [Freemap Slovakia](https://www.freemap.sk/pages/download-mapsforge/) — detailed maps for Slovakia

Extract any `.zip` archive first, then import the `.map` file using steps 6–8 above.

## Choose Which Format To Render

If you imported only PMTiles packs or only Mapsforge packs, OpenVitals uses that format automatically.

If you imported both types:

1. Stay in **Settings → Activities → Offline maps**.
2. Under **Render format**, choose **PMTiles** or **Mapsforge**.
3. OpenVitals renders every imported pack in the selected format together.

Switch formats any time. Your imported files stay on the device until you delete them.

## Use Your Offline Maps

Imported maps are used automatically when map data is available for:

- GPS activity recording
- Saved activity route previews
- Imported route previews before saving

No separate map selection is required during recording. OpenVitals uses the active offline map library for the current render format.

If the route falls outside your downloaded region, you may still see the track line but with less or no surrounding map detail.

## Manage Imported Maps

From **Settings → Activities → Offline maps** you can:

- Import additional packs for the same format
- Switch the active render format
- Delete a map pack you no longer need

Deleting a pack removes only the local map file. It does not delete Health Connect activities or routes.

## Troubleshooting

**Import failed or file not recognized**

- Confirm the extension is `.pmtiles`, `.map`, or `.maps`.
- For PMTiles, verify the file is a Protomaps-compatible basemap.
- For Mapsforge, verify the `.map` file is complete and not a corrupted or partial download.

**Map looks empty during recording**

- Check that the activity is inside the downloaded region.
- Confirm the correct **Render format** is selected.
- Try zooming or recentering the map if a recenter control is shown.

**File is too large**

- For PMTiles, re-run `pmtiles extract` with a smaller bounding box or lower `--maxzoom`.
- For Mapsforge, download a smaller regional map instead of a large country file.

**Import is slow**

- This is normal for multi-gigabyte files. Leave the import running or allow the background notification to finish.
- Prefer regional extracts over full-country or planet files when possible.

## Quick Reference

| Goal | Format | Typical source |
| --- | --- | --- |
| City and road basemap for a custom area | PMTiles | [Protomaps builds](https://maps.protomaps.com/builds) + `pmtiles extract` |
| Prebuilt regional `.map` files | Mapsforge | [download.mapsforge.org/maps/v5/](https://download.mapsforge.org/maps/v5/) |
| Import location in app | Either | **Settings → Activities → Offline maps → Import offline map** |
