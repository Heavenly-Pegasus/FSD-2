# Experiment 13 - Connect Backend with Database and Perform CRUD Operations

This experiment builds a Flask backend connected to MySQL and performs CRUD operations on a `students` table.

## 1) Prerequisites

- Python 3.8+
- MySQL Server running on `localhost`
- A MySQL database named `chandigarh_university_db`

Create database (if not already created):

```sql
CREATE DATABASE chandigarh_university_db;
```

## 2) Install Dependencies

From this folder:

```bash
pip install -r requirements.txt
```

## 3) Configure Database Credentials

In `app.py`, update this line if your MySQL username/password/host/database are different:

```python
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root123@localhost/chandigarh_university_db"
```

## 4) Run the Application

```bash
python app.py
```

The server starts at: `http://127.0.0.1:5000`

## 5) API Endpoints

- `GET /` - Health/info message
- `POST /students` - Create student
- `GET /students` - Get all students
- `GET /students/<id>` - Get one student
- `PUT /students/<id>` - Update student
- `DELETE /students/<id>` - Delete student

## 6) cURL Test Commands

### Home Route

```bash
curl http://127.0.0.1:5000/
```

### Create Student

```bash
curl -X POST http://127.0.0.1:5000/students ^
  -H "Content-Type: application/json" ^
  -d "{\"uid\":\"CU001\",\"name\":\"Aman Sharma\",\"age\":21}"
```

### Get All Students

```bash
curl http://127.0.0.1:5000/students
```

### Get One Student (id = 1)

```bash
curl http://127.0.0.1:5000/students/1
```

### Update Student (id = 1)

```bash
curl -X PUT http://127.0.0.1:5000/students/1 ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Aman S.\",\"age\":22}"
```

### Delete Student (id = 1)

```bash
curl -X DELETE http://127.0.0.1:5000/students/1
```

## 7) Notes

- The `students` table is auto-created by `db.create_all()` when the app starts.
- `uid` is unique; duplicate values will raise a DB error.
- Validation is handled using Marshmallow:
  - `name`: minimum 2 characters
  - `age`: 1 to 120
  - `uid`: required

## 8) Deploy on Render

This folder is Render-ready with:

- `render.yaml`
- `Procfile`
- `gunicorn` in `requirements.txt`

### Render Environment Variable

Set this in Render dashboard for your web service:

- `DATABASE_URL` = your MySQL SQLAlchemy URL  
  Example:
  `mysql+pymysql://username:password@hostname:3306/chandigarh_university_db`

### Start Command

Render uses:

```bash
gunicorn app:app
```
