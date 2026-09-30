# Spark VideoGen

A full-stack AI video generation SaaS built with Next.js 15, Supabase, Tailwind CSS, and Hugging Face Gradio/ZeroGPU.

## Stack
- Next.js 15 App Router + TypeScript
- Supabase Auth + Postgres + Storage
- Google OAuth
- Hugging Face Gradio API (`@gradio/client`)
- Wan2.1 T2V 1.3B
- Netlify deployment

## Setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Create a Storage bucket named `videos` (the SQL migration can create it when supported).
4. Configure Google OAuth in Supabase Auth.
5. Copy `.env.example` to `.env.local` and add your keys.
6. Install dependencies with `npm install`.
7. Run `npm run dev`.

### Hugging Face
Set `HF_TOKEN` and `HF_SPACE_ID`. The default Space is `numanajmal0/Wan-Video-API`, a ZeroGPU Wan 2.1 video API. Hugging Face documents Gradio Spaces as API endpoints and recommends the JavaScript `@gradio/client` for JavaScript integrations. See the Space's API documentation if its endpoint signature changes.

### Important
ZeroGPU quotas and availability are controlled by Hugging Face. This project does not promise unlimited free inference. Generated files are copied into Supabase Storage when the Space returns a downloadable URL.

## Deployment
Deploy the repository to Netlify using the Next.js runtime. Add all variables from `.env.example` in Netlify environment variables.
