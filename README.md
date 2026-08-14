# greeting-app

Simple Express + TypeScript app with one endpoint `/greeting`.

Run locally:

```bash
cd greeting-app
npm install
npm run dev
```

Build and run:

```bash
npm run build
npm start
```

The app exposes `POST /greeting` expecting JSON `{ "name": "your name" }` and returns `{ "greeting": "Hello, your name!" }`.
