# Experiment 8: Flask REST API with Blueprints

## Learning Outcomes

By completing this experiment, you will be able to:

1. **Build RESTful APIs with Flask** — Create a complete CRUD (Create, Read, Update, Delete) API using Flask to handle HTTP methods (GET, POST, PUT, DELETE) and return JSON responses.

2. **Organize code with Flask Blueprints** — Use Flask Blueprints to modularize your application by grouping related routes together, making the codebase more maintainable and scalable as the application grows.

3. **Implement application factory pattern** — Use the `create_app()` factory function to initialize Flask applications, allowing for better testing, configuration management, and multiple app instances.

4. **Handle JSON requests and responses** — Parse incoming JSON data from request bodies using `request.get_json()` and return structured JSON responses with appropriate HTTP status codes (200, 201, 400, 404).

5. **Manage in-memory data storage** — Implement a simple in-memory data store using Python lists and dictionaries, with unique ID generation for managing student records.

---

## About the Experiment

This experiment demonstrates how to **build a RESTful API backend** using Flask with Blueprints. The application provides a complete CRUD API for managing student data, including endpoints to create, read, update, and delete student records. The code is organized using Flask Blueprints for modularity, and the application uses the factory pattern for initialization.

### What's Implemented

| Endpoint | Method | Description | Status Codes |
| --- | --- | --- | --- |
| `/students` | POST | Create a new student | 201 (success), 400 (validation error) |
| `/students` | GET | Get all students | 200 (success) |
| `/students/<id>` | GET | Get a specific student by ID | 200 (success), 404 (not found) |
| `/students/<id>` | PUT | Update a student by ID | 200 (success), 404 (not found) |
| `/students/<id>` | DELETE | Delete a student by ID | 200 (success), 404 (not found) |
| `/` | GET | Health check endpoint | 200 (success) |

### Key Observations

- **Blueprint organization**: The `student_bp` Blueprint groups all student-related routes in `routes/student_routes.py`, which is then registered in the main `app.py` using `app.register_blueprint(student_bp)`. This keeps the code modular and maintainable.

- **Application factory pattern**: The `create_app()` function creates and configures the Flask app instance, allowing for better testing and configuration management. This pattern is essential for larger applications.

- **In-memory storage**: Student data is stored in a Python list (`students`) with a global `current_id` counter for unique ID generation. This is suitable for development but would be replaced with a database in production.

- **JSON handling**: All endpoints accept and return JSON data. The `request.get_json()` method parses incoming JSON, and `jsonify()` converts Python dictionaries to JSON responses with proper headers.

- **Error handling**: The API returns appropriate HTTP status codes (400 for validation errors, 404 for not found) along with error messages in JSON format.

### Tech Stack

- **Flask** 3.1.2 — Web framework for building REST APIs
- **Gunicorn** 25.1.0 — Production WSGI HTTP server
- **Werkzeug** 3.1.5 — WSGI utility library (Flask dependency)
- **Jinja2** 3.1.6 — Template engine (Flask dependency)

### Project Structure

```text
Experiment-8/
├── app.py                 # Main application file with factory pattern
├── run.py                 # Entry point to run the application
├── routes/
│   └── student_routes.py  # Student CRUD routes using Blueprint
├── requirements.txt       # Python dependencies
└── vir-exp-8/            # Virtual environment
```

### How to Run

#### 1. Set up Virtual Environment (if not already done)

```bash
# Create virtual environment
python -m venv vir-exp-8

# Activate virtual environment
# On Windows:
.\vir-exp-8\Scripts\Activate.ps1
# On macOS/Linux:
source vir-exp-8/bin/activate
```

#### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

#### 3. Run the Application

**Development mode:**

```bash
python run.py
```

**Production mode with Gunicorn:**

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

The server will start on [http://localhost:5000](http://localhost:5000)

### API Usage Examples

#### Create a Student

```bash
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "age": 20}'
```

#### Get All Students

```bash
curl http://localhost:5000/students
```

#### Get a Specific Student

```bash
curl http://localhost:5000/students/1
```

#### Update a Student

```bash
curl -X PUT http://localhost:5000/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "age": 21}'
```

#### Delete a Student

```bash
curl -X DELETE http://localhost:5000/students/1
```

---

## Author

Made by Chinmay
