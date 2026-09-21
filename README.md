# CarePoint Pharmacy Management System

A full-stack pharmacy website. The current `v0.1` prototype delivers the first core flow: customers can search and filter medicines, see stock levels, and add products to a cart. The backend provides a validated CRUD API for medicine inventory.

## Technology stack

- Frontend: React + Vite
- Backend: Java 17 + Spring Boot
- Data: H2 for local development; MySQL-ready through environment variables
- Quality: ESLint, Vitest, JUnit, GitHub Actions

## Current features

- Responsive medicine catalogue
- Search and category filters
- Stock availability and low-stock alerts
- Cart quantity and total calculation
- REST API to create, read, update, delete, and search medicines
- Request validation and automated backend tests

## Project structure

```text
frontend/              React customer interface
backend/               Spring Boot REST API
docs/                  Project and API documentation
.github/workflows/     Continuous integration
```

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

### Backend

```bash
cd backend
mvn spring-boot:run
```

The API is available at `http://localhost:8080/api/medicines`.

## MySQL configuration

Set `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` before starting the backend. Create the `pharmacy` database first. Never commit real passwords or `.env` files.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/medicines` | List medicines |
| GET | `/api/medicines?search=para` | Search by name |
| GET | `/api/medicines/{id}` | Get one medicine |
| POST | `/api/medicines` | Create medicine |
| PUT | `/api/medicines/{id}` | Update medicine |
| DELETE | `/api/medicines/{id}` | Delete medicine |

## Roadmap

1. Connect the React catalogue to the API.
2. Add registration, login, and role-based access.
3. Add order checkout and order management.
4. Add an admin inventory dashboard.
5. Add prescription upload after the MVP.

## Author

Benjamin Obeng Akyea

