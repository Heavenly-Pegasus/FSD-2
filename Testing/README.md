# Experiment-16: Unit Testing and CI for Frontend/Backend

## Learning Outcomes
* **Implemented backend unit testing with pytest**: Added tests for create, read (all and by id), update, and delete endpoints for the Flask students API.
* **Implemented frontend component testing with Vitest**: Added React Testing Library tests for form rendering, validation behavior, and successful submission flow.
* **Generated and analyzed coverage reports**: Produced terminal and HTML coverage reports for both backend and frontend modules.
* **Set up automated testing in GitHub Actions**: Configured CI to run backend and frontend test jobs on push and pull requests.
* **Documented practical API verification**: Validated API CRUD flows using Postman and captured evidence screenshots for submission.

## Folder Structure

```text
Testing/
├── Backend/
│   ├── requirements.txt
│   └── test_app.py
├── Frontend/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── setupTests.js
│       └── components/
│           ├── Form.jsx
│           └── Form.test.jsx
├── screenshots/
│   ├── exp16_postman_01_create_student_success.png
│   ├── exp16_postman_02_get_students_success.png
│   ├── exp16_postman_03_get_student_by_id_success.png
│   ├── exp16_postman_04_update_student_success.png
│   ├── exp16_postman_05_delete_student_success.png
│   ├── exp16_postman_06_create_duplicate_uid_error.png
│   ├── exp16_terminal_01_backend_pytest_coverage.png
│   ├── exp16_terminal_02_backend_frontend_html_listing.png
│   └── exp16_terminal_03_frontend_vitest_coverage.png
└── README.md
```

## Backend Testing (Flask + pytest)

### Dependencies
- Flask
- Flask-SQLAlchemy
- marshmallow
- PyMySQL
- pytest
- pytest-cov

### Run backend tests
From `Testing/Backend`:

```bash
python -m pytest -v
python -m pytest test_app.py
python -m pytest test_app.py::test_create_student
```

### Backend coverage

```bash
python -m pytest --cov=app --cov-report=term-missing --cov-report=html
```

HTML report path:
- `Testing/Backend/htmlcov/index.html`

## Frontend Testing (Vite + Vitest + React Testing Library)

### Dependencies
- vitest
- @testing-library/react
- @testing-library/jest-dom
- jsdom
- @vitest/coverage-v8

### Run frontend tests
From `Testing/Frontend`:

```bash
npm run test:run
```

or

```bash
npx vitest
npx vitest run
```

### Frontend coverage

```bash
npx vitest run --coverage
npx vitest run --coverage --coverage.reporter=html
```

HTML report path:
- `Testing/Frontend/coverage/index.html`

## CI/CD Workflow

GitHub Actions workflow file:
- `.github/workflows/ci.yml`

Workflow name:
- `Fullstack Tests`

Jobs:
- `backend-test` (Python setup, backend dependencies, pytest run)
- `frontend-test` (Node setup, npm install, vitest run)

Trigger:
- Push to `main`
- Pull requests

## Postman Validation Flow

Base URL:
- `http://127.0.0.1:5000`

Request sequence used:
1. `POST /students`
2. `GET /students`
3. `GET /students/{id}`
4. `PUT /students/{id}`
5. `DELETE /students/{id}`
6. `GET /students/{id}` (delete verification)

## Notes

- The backend `uid` field is unique. Reusing an existing `uid` can return server error if duplicate handling is not explicitly implemented.
- Frontend coverage provider version should match the installed Vitest major/minor version.
