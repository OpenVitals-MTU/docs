# OpenVitals Website

MkDocs Material website for OpenVitals.

Repository:

```text
https://codeberg.org/OpenVitals/website
```

Expected Codeberg Pages URL:

```text
https://openvitals.codeberg.page/website/
```

## Local Preview

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

## Build

```bash
mkdocs build --strict
```

## Codeberg Pages

The Woodpecker pipeline builds the MkDocs site and deploys the generated `site/` directory to the `pages` branch using `codeberg.org/sugar700/plugin-codeberg-pages-deploy:1`.

Required setup:

1. Create the Codeberg repository `OpenVitals/website`.
2. Add a deploy key with write access to the repository.
3. Store the matching private key in Woodpecker as `CODEBERG_PAGES_SSH_KEY`.
4. Add a Forgejo webhook in the repository settings:
   - Target URL: `https://openvitals.codeberg.page/website/`
   - Branch filter: `pages`

Codeberg Pages will serve the `pages` branch as the project website.
