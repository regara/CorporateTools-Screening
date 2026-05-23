
# Business Filing Tracker

I built this as a small practical tool around business filing workflows. I kept it intentionally scoped to a short coding sample: clear status tracking, filtering, and readable code over unnecessary infrastructure. If expanded, I would add persistence, audit history, user roles, background reminders, and deployment automation.

## What this is
A simple full-stack dashboard for tracking business filing tasks, built with Rails (API) and React (frontend). It's designed for internal business operations - no auth, no cloud, just practical status tracking and summary metrics.

## Why I built it
To demonstrate practical product thinking and full-stack ability for a Corporate Tools software engineer application. The focus is on clarity, ownership, and a human touch, not overengineering.

## How to run it
1. In one terminal:
   - `cd backend`
   - `bundle install`
   - `rails db:create db:migrate db:seed`
   - `rails server -p 3000`
2. In another terminal:
   - `cd frontend`
   - `npm install`
   - `npm run dev`
3. Visit [http://localhost:5173](http://localhost:5173)

## Tech used
- Ruby on Rails (API mode, SQLite, seed data)
- React (Vite, hooks, functional components)
- No auth, no cloud, no paid services

## Tradeoffs
- No persistent user accounts or audit history
- No background jobs or reminders
- No production deployment config
- Seeded data only (no DB persistence across environments)

## What I would improve next
- Add user roles and authentication
- Add audit history and activity log
- Add background reminders for due/overdue filings
- Add production deployment automation
- Add more granular status and filing type options

---

*No filings found. Either everything is done or the paperwork goblin is hiding it.*


