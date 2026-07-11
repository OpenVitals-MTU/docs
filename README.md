# OpenVitals Docs

Nextra documentation site for OpenVitals.

Repository:

```text
https://codeberg.org/OpenVitals/docs
```

Expected website URL:

```text
https://openvitals.health/
```

## Local Preview

```bash
npm install
npm run dev
```

## Build

```bash
npm run typecheck
npm run build
```

## Repository Rename

This repository is expected to live at:

```text
ssh://git@codeberg.org/OpenVitals/docs.git
```

If a local checkout still points to the previous repository slug, update it with:

```bash
git remote set-url origin ssh://git@codeberg.org/OpenVitals/docs.git
```

## Fly.io

The Woodpecker pipeline builds the Nextra site and deploys the container to Fly.io app `openvitals-docs`.

One-time setup:

```bash
fly apps create openvitals-docs --yes
fly tokens create deploy -a openvitals-docs -x 8760h -n woodpecker-openvitals-docs
```

Store the full token in Woodpecker as `FLY_API_TOKEN`.

Add Fly certificates for `openvitals.health` and `www.openvitals.health`, then point DNS to the records shown by Fly:

```bash
fly certs add openvitals.health -a openvitals-docs
fly certs add www.openvitals.health -a openvitals-docs
```
