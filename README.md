# Instagram Aesthetic AI Agent

An AI-powered agent that analyzes an Instagram brand’s aesthetic and generates on-brand palette ideas and mood captions. The current app provides a brand workspace with palette management and local AI generation via Ollama.

---

## What It Does (Current)

- Create brands and palettes
- Store palettes in Postgres via Prisma
- Generate palette suggestions + mood captions with a **local** AI model (Ollama)

---

## Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS

### Backend
- Node.js / TypeScript
- Prisma ORM
- Local AI via Ollama (no API key required)

### Database
- Postgres (Docker recommended)

---

## Supabase Setup (IG.AI Design Director, No Docker)

### 1) Create a Supabase project

- In Supabase, create a project and copy:
- `Project URL`
- `anon public key`
- `service_role key`

### 2) Configure environment

Create `.env.local` (or update `.env`) using `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT_REF.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SUPABASE_SERVICE_ROLE_KEY"
OLLAMA_BASE_URL="http://localhost:11434"
OLLAMA_MODEL="qcwind/qwen2.5-7B-instruct-Q4_K_M"
```

`OLLAMA_MODEL` can also be set to `llama3.1:8b`.

### 3) Run SQL migration in Supabase

Open Supabase SQL Editor and run:

```sql
-- MVP assets table only:
-- file: supabase/migrations/20260304_assets_mvp.sql

-- Optional expanded pipeline tables + policies:
-- file: supabase/migrations/20260304_design_director.sql
```

This creates:
- `assets`
- private buckets: `uploads`, `renders` are expected to already exist in Storage

For upload MVP, buckets remain private and previews are fetched via signed URLs.

### 4) Install and run

```bash
npm install
npm run dev
```

API endpoints added:
- `POST /api/upload` (server-side upload to private `uploads` bucket + insert into `assets`)
- `POST /api/assets/signed-url` (signed preview URL for private upload)
- `POST /api/assets/upload` (authenticated variant from earlier pipeline)
- `POST /api/designs/generate`

Test page:
- Open `http://localhost:3000/upload-test`
- Select a PNG/JPEG and click **Upload & Preview**

---

## Legacy Prisma Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Start Postgres (Docker)

```bash
docker run --name ig-ai-postgres   -e POSTGRES_USER=igai   -e POSTGRES_PASSWORD=igai_password   -e POSTGRES_DB=ig_ai   -p 5432:5432   -d postgres:16
```

If the container already exists:

```bash
docker start ig-ai-postgres
```

### 3) Configure environment

Create or update `.env`:

```
DATABASE_URL="postgresql://igai:igai_password@localhost:5432/ig_ai?schema=public"
```

### 4) Create DB schema

```bash
npm run db:push
```

### 5) Run the app

```bash
npm run dev
```

Open `http://localhost:3000`.

---

## Local AI (Ollama)

Install and run Ollama, then pull the model:

```bash
ollama run llama3.1:8b
```

Sanity check:

```bash
curl http://localhost:11434/api/tags
```

---

## Prisma Commands

```bash
npm run db:generate
npm run db:push
npm run db:migrate
npm run db:studio
```

---

## Roadmap (Planned)

- Screenshot ingestion + palette extraction
- Aesthetic memory profile
- Design brief generation
- Exportable Figma/Canva design recipes
