# Backend (Rails API)

This is the API backend for the Business Filing Tracker. It exposes endpoints for managing business filing tasks.

## Endpoints
- `GET /filings` — List all filings
- `POST /filings` — Add a new filing
- `PATCH /filings/:id` — Update a filing (status, notes, etc)

## Data model
- `FilingTask`: company_name, state, filing_type, status, due_date, notes, created_at, updated_at
- Statuses: Not Started, In Progress, Filed, Rejected
- Filing types: LLC Formation, Annual Report, Registered Agent Update, Foreign Qualification, Amendment, Dissolution

## Setup
1. `bundle install`
2. `rails db:create db:migrate db:seed`
3. `rails server -p 3000`

## Notes
- CORS is enabled for `http://localhost:5173`
- Uses SQLite and seed data for demo purposes
- No authentication or user management