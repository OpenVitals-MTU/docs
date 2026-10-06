# OpenVitals Docs

Nextra documentation site for OpenVitals.

Repository:

```text
https://github.com/OpenVitals-MTU/docs
```

Website URL:

```text
https://docs.openvitals.health/
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
https://github.com/OpenVitals-MTU/docs
```

If a local checkout still points to the previous repository slug, update it with:

```bash
git remote set-url origin https://github.com/OpenVitals-MTU/docs
```

## Fly.io

The GitHub Actions workflow (`.github/workflows/test.yml`) builds the Nextra site and, on a push to `main`, deploys the container to Fly.io app `openvitals-docs`.

One-time setup:

```bash
fly apps create openvitals-docs --yes
fly tokens create deploy -a openvitals-docs -x 8760h -n github-actions-openvitals-docs
```

Store the full token as the repository Actions secret `FLY_API_TOKEN`.

Add a Fly certificate for `docs.openvitals.health`, then point DNS to the records shown by Fly. The apex `openvitals.health` belongs to the landing page's Fly app, not this one.

```bash
fly certs add docs.openvitals.health -a openvitals-docs
```

## License

The OpenVitals documentation site is licensed under the [`GNU Affero General Public License v3.0 or later`](LICENSE).
