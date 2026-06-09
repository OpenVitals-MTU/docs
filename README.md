# OpenVitals Website

MkDocs Material website for OpenVitals.

Repository:

```text
https://codeberg.org/OpenVitals/website
```

Expected website URL:

```text
https://openvitals.health/
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

The Woodpecker pipeline builds the MkDocs site, writes `site/.domains` for the custom domain, and deploys the generated `site/` directory to the `pages` branch using `codeberg.org/sugar700/plugin-codeberg-pages-deploy:1`.

Required setup:

1. Create the Codeberg repository `OpenVitals/website`.
2. Add a deploy key with write access to the repository.
3. Store the matching private key in Woodpecker as `CODEBERG_PAGES_SSH_KEY`.
4. Add a Forgejo webhook in the repository settings:
   - Target URL: `https://openvitals.codeberg.page/website/`
   - Branch filter: `pages`
5. Point DNS for `openvitals.health` and `www.openvitals.health` to the `OpenVitals/website` Pages target.

Keep the webhook target on the Codeberg Pages URL. The custom domain is declared through `site/.domains` and the DNS records.

Codeberg Pages will serve the `pages` branch as the project website, with `https://openvitals.health/` as the canonical custom domain.
