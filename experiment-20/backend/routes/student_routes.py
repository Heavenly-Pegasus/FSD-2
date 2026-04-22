from flask import Blueprint, request, jsonify

student_bp = Blueprint("students", __name__)

# In-memory storage
students = []
current_id = 1


@student_bp.route("/students", methods=["POST"])
def create_student():
    global current_id

    data = request.get_json()

    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    student = {
        "id": current_id,
        "name": data["name"],
        "age": data.get("age", None),
        "course": data.get("course", "N/A"),
        "gender": data.get("gender", "N/A"),
    }

    students.append(student)
    current_id += 1

    return jsonify(student), 201


@student_bp.route("/students", methods=["GET"])
def get_students():
    return jsonify(students), 200


@student_bp.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    return jsonify(student), 200


@student_bp.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    data = request.get_json()
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    student["name"] = data.get("name", student["name"])
    student["age"] = data.get("age", student["age"])
    student["course"] = data.get("course", student.get("course", "N/A"))
    student["gender"] = data.get("gender", student.get("gender", "N/A"))

    return jsonify(student), 200


@student_bp.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    global students

    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    students = [s for s in students if s["id"] != student_id]

    return jsonify({"message": "Deleted successfully"}), 200
