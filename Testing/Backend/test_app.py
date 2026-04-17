import os
import sys
from pathlib import Path

import pytest


BASE_DIR = Path(__file__).resolve().parents[2]
BACKEND_APP_DIR = BASE_DIR / "Backend" / "experiment-13"
DB_PATH = Path(__file__).resolve().parent / "test_students.db"

# Set sqlite DB before importing the Flask app.
os.environ["DATABASE_URL"] = f"sqlite:///{DB_PATH.as_posix()}"
sys.path.insert(0, str(BACKEND_APP_DIR))

from app import app, db  # noqa: E402


@pytest.fixture(autouse=True)
def clean_db():
    app.testing = True
    with app.app_context():
        db.drop_all()
        db.create_all()
    yield
    with app.app_context():
        db.session.remove()
        db.drop_all()


@pytest.fixture
def client():
    return app.test_client()


def test_create_student(client):
    response = client.post(
        "/students",
        json={"uid": "STU-1", "name": "Student-1", "age": 20},
    )
    assert response.status_code == 201
    assert response.json["name"] == "Student-1"
    assert response.json["uid"] == "STU-1"


def test_get_students(client):
    client.post("/students", json={"uid": "STU-2", "name": "Student-2", "age": 21})
    response = client.get("/students")
    assert response.status_code == 200
    assert isinstance(response.json, list)
    assert len(response.json) == 1


def test_get_student(client):
    create_response = client.post(
        "/students",
        json={"uid": "STU-3", "name": "Student-3", "age": 22},
    )
    student_id = create_response.json["id"]

    response = client.get(f"/students/{student_id}")
    assert response.status_code == 200
    assert response.json["name"] == "Student-3"


def test_update_student(client):
    create_response = client.post(
        "/students",
        json={"uid": "STU-4", "name": "Student-4", "age": 23},
    )
    student_id = create_response.json["id"]

    response = client.put(
        f"/students/{student_id}",
        json={"name": "Student-4 Updated", "age": 24},
    )
    assert response.status_code == 200
    assert response.json["name"] == "Student-4 Updated"
    assert response.json["age"] == 24


def test_delete_student(client):
    create_response = client.post(
        "/students",
        json={"uid": "STU-5", "name": "Student-5", "age": 25},
    )
    student_id = create_response.json["id"]

    delete_response = client.delete(f"/students/{student_id}")
    assert delete_response.status_code == 200

    get_response = client.get(f"/students/{student_id}")
    assert get_response.status_code == 404
