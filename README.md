# Next.js with Headless CMS

## Launch Strapi

```shell
cd headless-cms
npm install
npm run strapi import -- -f data.tar.gz
npm start
```

## Run application (WIP)

```shell
cd applications
corepack enable pnpm
pnpm install
pnpm -F commons build
```

### Next.js with Page routing

```shell
pnpm -F page-routing dev 
```

### Next.js with Page routing

```shell
pnpm -F app-routing dev 
```
