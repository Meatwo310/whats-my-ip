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

```bash
npm install
npx wrangler pages deploy
```
