# Student Management System - Flask MySQL CRUD API

## Learning Outcomes
* **Created a Flask API for CRUD operations**: Built a complete system to Manage student data (Create, Read, Update, Delete) using simple web routes.
* **Connected the app to a MySQL database**: Used SQLAlchemy to link the Python code to a database, allowing data to be saved and retrieved easily without writing raw SQL.
* **Added data validation to prevent mistakes**: Used Marshmallow to check names, ages, and IDs, making sure the data entered is correct before saving it.
* **Set up automatic error handling**: Created a way for the app to automatically catch errors (like missing data) and explain what went wrong in a clear way.
* **Linked Python with MySQL**: Successfully established a connection between the application and a local MySQL server using the PyMySQL driver.

## Render Deployment Settings

- Service Type: Web Service
- Runtime: Python 3
- Root Directory: `Backend/experiment-13`
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app`
- Environment Variable:
  - `DATABASE_URL=mysql+pymysql://<username>:<password>@<host>:3306/chandigarh_university_db`

This project is configured to use `DATABASE_URL` in production and a localhost fallback for local development.
