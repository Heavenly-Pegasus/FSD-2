# Experiment 20 - Full Stack (Flask + React)

This experiment now contains:

- `backend/` Flask API (MySQL-backed)
- `frontend/` React app (Vite) connected to the backend

## Local Run

### 1) Backend

```bash
cd backend
python -m pip install -r requirements.txt
python run.py
```

Backend runs on `http://localhost:5000`.

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` by default.

Create `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Deploy Backend on Render

Create a new **Web Service** from this repo with:

- **Root Directory:** `experiment-20/backend`
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `gunicorn app:app`
- **Runtime:** Python 3.10+

Set environment variables in Render:

- `SQLALCHEMY_DATABASE_URI` (optional, if using full DB URL)
- `DB_DRIVER` (usually `mysql+pymysql`)
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `CORS_ORIGINS` (set to your Netlify URL, e.g. `https://your-site.netlify.app`)

After deploy, copy your backend URL, for example:

`https://your-backend.onrender.com`

## Deploy Frontend on Netlify

Create a new Netlify site from this repo and set:

- **Base directory:** `experiment-20/frontend`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Add Netlify environment variable:

- `VITE_API_BASE_URL=https://your-backend.onrender.com`

Then redeploy.

## API Routes used by frontend

- `GET /students`
- `POST /students`
- `PUT /students/<id>`
- `DELETE /students/<id>`

## Output Screenshots

### Frontend - Student Manager UI

![Frontend Student Manager](./screenshots/frontend-student-manager.png)

### POST /students in Postman

![Postman POST Student](./screenshots/postman-post-student.png)

### GET /students in Postman

![Postman GET Students](./screenshots/postman-get-students.png)

### Students table in MySQL Workbench

![MySQL Workbench Students Table](./screenshots/mysql-workbench-students.png)
