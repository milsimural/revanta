# Revanta Demo Site

This project is a minimal example of a marketing site with an admin panel built with Next.js, Express and Prisma. It uses PostgreSQL for storage and DaisyUI for styling.

## Setup

1. Copy `.env.example` to `.env` and adjust the `DATABASE_URL` for your PostgreSQL instance.
2. Run `npm run prisma migrate dev` to apply migrations.
3. Run `npm run seed` to create the default admin user (`admin`/`FAX12AFAf`).
4. Start development server with `npm run dev`.

The admin panel is available at `/admin/login`.
