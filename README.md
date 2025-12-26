# Birthday Manager

This repository contains the Birthday Manager application — a simple MERN-style project with a Node.js/Express backend and a React frontend for managing birthday records.

## Project Overview

- Backend: Node.js + Express + Mongoose (MongoDB) exposing a small REST API to create, read, update and delete birthday records.
- Frontend: React (Create React App) providing UI for adding, viewing, editing, and deleting birthdays.
- design_for_frontend: static HTML/CSS assets used for reference/design.

## Repository Structure

- `backend/`
  - `index.js` — Express server and route definitions
  - `db/config.js` — Mongoose/MongoDB connection (default: `mongodb://localhost:27017/bday_manager`)
  - `db/DOB.js` — Mongoose schema for birthday records

- `frontend/` — React app created with Create React App. Key files:
  - `package.json` — dependencies and scripts
  - `src/Components/` — main UI components (`HomePage`, `AddBday`, `EditBday`, `ViewProfile`, etc.)

- `design_for_frontend/` — static HTML/CSS samples

## API Endpoints (backend)

- POST `/add` — Create a new birthday entry. Payload: { name, day, month, year, mobile, mail, insta, tags }
- GET `/displayall` — Retrieve all birthday records
- GET `/dob/:id` — Retrieve a single birthday by id
- PUT `/dob/:id` — Update a birthday record by id (body contains updated fields)
- DELETE `/dob/:id` — Delete a birthday record by id

The backend listens on port `5000` by default.

## Data Model

The `DOB` schema fields (see `backend/db/DOB.js`):

- `name` (String)
- `day`, `month`, `year` (Strings) — stored separately
- `mobile` (Number)
- `mail` (String)
- `insta` (String)
- `tags` (Array)

## Local Setup (development)

Prerequisites:
- Node.js (LTS recommended)
- npm
- MongoDB running locally (or set a remote connection string)

1) Backend

```bash
cd backend
npm install
# edit backend/db/config.js to set your MongoDB URI if needed
npm start
```

2) Frontend

```bash
cd frontend
npm install
npm start
```

Open the frontend at `http://localhost:3000` and ensure the backend is reachable at `http://localhost:5000` (default). The frontend components call the API endpoints on port `5000`.

## Notes & Recommendations

- `node_modules` directories are intentionally excluded from the repository. Run `npm install` in `backend/` and `frontend/` after cloning.
- The DB connection in `backend/db/config.js` currently points to `mongodb://localhost:27017/bday_manager` — update for production use and do not commit secrets.
- Add a `.env` in each subproject for configuration (and add `.env` to `.gitignore`).
- I added a `.gitignore` to exclude `node_modules` and common artifacts.

## Troubleshooting

- If the frontend cannot fetch data, ensure the backend is running and CORS is enabled (the backend uses `cors` already).
- If MongoDB connection fails, verify that MongoDB is running and the connection string is correct.

## What I changed in this upload

- Copied local `birthday_manager` project into this repository (excluding `node_modules`).
- Added this top-level `README.md` and a repository `.gitignore`.

## Branching & next steps

- This code has been committed on a feature branch named `latest`. If you'd like I can open a PR to `main` or rename the branch.

---

If you'd like a trimmed README for each subproject (backend/frontend) or a sample `.env.example`, tell me and I'll add them.
