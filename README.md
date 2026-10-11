# Dr Dounia Chraïbi – Orthophoniste · Website

One-page site for Dr Dounia Chraïbi, speech therapist (orthophoniste) at Bd Abdelmoumen, Casablanca. French (default), English and Arabic (RTL), light/dark mode, and online booking through Google Calendar.

Built with Next.js 16 (App Router) and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /fr
```

Without Google credentials, `npm run dev` runs booking in **demo mode**: the form works but nothing is saved. In production, booking refuses requests (`not_configured`) until Calendar is configured, so patients never get a false confirmation.

## Where to edit things

| What | File |
| --- | --- |
| Texts (FR / EN / AR) | `src/i18n/dictionaries/fr.ts`, `en.ts`, `ar.ts` |
| Phone, WhatsApp, e-mail, address, map, photos, reviews | `src/lib/site.ts` |
| Opening hours (08:00–13:00 / 15:00–20:00, Mon–Sat), 20-min slots, 60-day window, 2-hour notice | `src/lib/schedule.ts` |
| Colours and fonts | `src/app/globals.css`, `src/app/[lang]/layout.tsx` |
| Logo | `src/components/Logo.tsx`, `src/app/icon.svg` |

**Photos:** the gallery uses placeholders (`public/images/*.svg`). Add real photos (JPG/WebP, about 1600×1000 for the practice and 800×1000 for the portrait) to `public/images/` and update the paths in `src/lib/site.ts`. The first gallery photo is also the hero portrait.

**Reviews** in `src/lib/site.ts` are copied verbatim from Google. Do not edit their text.

**Arabic texts** were not written by a native speaker: have them proofread before going live.

## Google Calendar setup

Appointments are written by a Google **service account** into a calendar that is shared with it. Slots that overlap a busy event in that calendar are shown as unavailable.

1. Go to <https://console.cloud.google.com/>, create a project, and enable the **Google Calendar API**.
2. *IAM & Admin → Service Accounts → Create service account*. Open it → *Keys → Add key → JSON*, and download the file.
3. In Google Calendar (the account that should receive bookings), open *Settings → the calendar → Share with specific people*, add the service account's email, and give it **"Make changes to events"**.
4. Set the environment variables (`.env.local` locally, or the hosting dashboard in production), see `.env.example`:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` – `client_email` from the JSON
   - `GOOGLE_PRIVATE_KEY` – `private_key` from the JSON (keep the `\n`)
   - `GOOGLE_CALENDAR_ID` – the calendar owner's Gmail address (or the calendar ID from its settings)

**Switching calendars later:** share the new calendar with the same service account (step 3) and change `GOOGLE_CALENDAR_ID`. Nothing else changes.

Each booking creates an event "RDV · Patient name" with the phone and reason in its description. To block time (holidays, training days…), add a "Busy" event in the calendar. All-day events block the day only if they are set to "Busy".

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). Add the environment variables above, then set `NEXT_PUBLIC_SITE_URL` to the final domain.
