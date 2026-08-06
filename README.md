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

## Google Sheets contact form

1. Sign in to Google Drive as `oadhomes@gmail.com` and create the destination Google Sheet.
2. In the Sheet, open **Extensions → Apps Script** and replace the editor contents with `google-apps-script/Code.gs` from this project.
3. In Apps Script, open **Project Settings → Script properties** and add `CONTACT_FORM_SECRET` with a long random value.
4. Select **Deploy → New deployment → Web app**. Execute as **Me** and allow access to **Anyone**, then copy the `/exec` URL.
5. Add these server-side environment variables locally in `.env.local` and in the production host:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
CONTACT_FORM_SECRET=the-same-long-random-value
```

The Apps Script creates an `Enquiries` tab automatically and stores the submission time, name, phone, email, and message. After changing Apps Script code, create a new deployment version so the live endpoint receives the update.
