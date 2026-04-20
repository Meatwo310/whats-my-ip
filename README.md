# whats-my-ip

A minimal web app that displays your public IP address.

Built with [Cloudflare Pages](https://pages.cloudflare.com/) and a Pages Function that reads the `CF-Connecting-IP` header.

## API

```
GET /api/ip
```

```json
{ "ip": "1.2.3.4" }
```

## Deploy

**Cloudflare Pages dashboard** (Git integration):

| Setting | Value |
|---|---|
| Build command | *(empty)* |
| Deploy command | `npm run deploy` |
| Build output directory | `public` |

**CLI**:

```bash
npm install
npm run deploy
```
