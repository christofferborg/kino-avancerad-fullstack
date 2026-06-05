This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Lokal utveckling med Docker

Applikationen och dess PostgreSQL-databas är helt containeriserade och konfigurerade för att köras i en isolerad miljö via Docker Compose. Följ dessa två steg för att starta systemet lokalt från grunden:

## 1. Starta Docker
Säkerställ att Docker Desktop är igång. Kör sedan följande kommando i projektets rotmapp för att bygga och starta Next.js-servern och databasen:

```bash
docker compose up --build
```

## 2. Initiera databasen
När containrarna är igång och Next.js-loggarna visar att servern är redo (✓ Ready in 0ms), öppna en ny flik eller ett nytt fönster i din terminal och initiera databasschemat med Prisma:

```bash
npx prisma migrate dev
```

## Deployment

Projektet är deployat med Render.

Live version

https://kino-avancerad-fullstack.onrender.com/

## Hur projektet deployades
Kopplade GitHub-repository till Render
Skapade en Web Service
Valde branch main

Ställde in build- och start commands:

npm install && npm run build
npm start
Deploy sker automatiskt vid varje push till main

## Environment Variables

Miljövariabler används för att hantera API-nycklar och känslig data.

De sätts i Render under:

Environment → Add Environment Variable

Exempel:

OMDB_API_KEY=********

## CI/CD (automatisk deploy)

Varje gång kod pushas till GitHub:

Render bygger om projektet
nya ändringar publiceras automatiskt

## Teststrategi

Testningen sker med hjälp av Cypress och består av E2E-tester och komponenttester.
Testerna är centrerade kring filmsidan, som innehåller en lista av filmer i form av filmkort.
Eftersom all funktionalitet inte finns än, testar testerna bara det som är implementerat än så länge.

### E2E-tester
E2E-testerna använder den faktiska datan från API:et och testar följande:
- Navigering till filmsidan via navbar
- Att 10 filmer visas vid sidladdning
- Att filmbilderna laddar korrekt
- Att statiskt innehåll visas korrekt

### Komponenttester
Komponenttesterna använder mock-data för att säkerställa att komponenterna fungerar självständigt.

**MovieCard**
- Att filmens bild renderas med korrekt src och alt-attribut
- Att filmens titel renderas
- Att filmens genre renderas

**MoviesGrid**
- Att endast 10 filmer visas initialt
- Att 10 fler filmer laddas när "Visa mer filmer" klickas
- Att knappen försvinner när alla filmer visats
- Att knappen inte visas när färre än 10 filmer finns
- Att sista filmen laddas korrekt när färre än 10 filmer återstår

## Testkommandon

| Kommando | Beskrivning |
|---|---|
| `npm run cypress:open` | Öppnar Cypress UI för lokal testning (port 3000) |
| `npm run cy:open:prod` | Öppnar Cypress UI mot den deploy:ade sidan |
| `npm run cy:run` | Kör alla tester headless i terminalen |
| `npm run cy:run:e2e` | Kör endast E2E-tester i terminalen |
| `npm run cy:run:component` | Kör endast komponenttester i terminalen |