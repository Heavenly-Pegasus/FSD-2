import { useEffect, useMemo, useState } from "react";

const configuredBase = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").replace(/\/$/, "");

function fallbackBaseUrl(url) {
  if (url.includes("localhost:5000")) {
    return url.replace("localhost:5000", "127.0.0.1:5000");
  }
  return url;
}

const EMPTY_FORM = {
  name: "",
  age: "",
  course: "",
  gender: ""
};

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiBaseUrl, setApiBaseUrl] = useState(configuredBase);

  const activeApiBase = useMemo(() => apiBaseUrl, [apiBaseUrl]);

  const request = async (path, options = {}) => {
    const url = `${activeApiBase}${path}`;
    try {
      return await fetch(url, options);
    } catch (err) {
      const fallback = fallbackBaseUrl(activeApiBase);
      if (fallback !== activeApiBase) {
        setApiBaseUrl(fallback);
        return fetch(`${fallback}${path}`, options);
      }
      throw err;
    }
  };

  const fetchStudents = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await request("/students");
      if (!response.ok) {
        throw new Error("Failed to load students");
      }
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(`Cannot reach backend. Make sure API is running on ${activeApiBase}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const payload = {
      name: form.name.trim(),
      course: form.course.trim() || "N/A",
      gender: form.gender.trim() || "N/A"
    };

    if (!payload.name) {
      setError("Name is required.");
      return;
    }

    if (form.age !== "") {
      payload.age = Number(form.age);
    }

    const method = editingId ? "PUT" : "POST";
    const endpoint = editingId ? `/students/${editingId}` : "/students";

    try {
      const response = await request(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Request failed");
      }
      resetForm();
      await fetchStudents();
    } catch (err) {
      setError(`Request failed. Confirm backend is reachable at ${activeApiBase}`);
    }
  };

  const onEdit = (student) => {
    setEditingId(student.id);
    setForm({
      name: student.name ?? "",
      age: student.age ?? "",
      course: student.course ?? "",
      gender: student.gender ?? ""
    });
  };

  const onDelete = async (id) => {
    setError("");
    try {
      const response = await request(`/students/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Delete failed");
      }
      await fetchStudents();
      if (editingId === id) {
        resetForm();
      }
    } catch (err) {
      setError(`Delete failed. Confirm backend is reachable at ${activeApiBase}`);
    }
  };

  return (
    <main className="container">
      <h1>Experiment 20 - Student Manager</h1>
      <p className="subtitle">Connected API: {activeApiBase}</p>

      <form className="card" onSubmit={onSubmit}>
        <h2>{editingId ? "Edit Student" : "Add Student"}</h2>
        <div className="grid">
          <input name="name" placeholder="Name *" value={form.name} onChange={onChange} required />
          <input name="age" type="number" placeholder="Age" value={form.age} onChange={onChange} />
          <input name="course" placeholder="Course" value={form.course} onChange={onChange} />
          <input name="gender" placeholder="Gender" value={form.gender} onChange={onChange} />
        </div>
        <div className="actions">
          <button type="submit">{editingId ? "Update" : "Create"}</button>
          {editingId ? (
            <button type="button" className="secondary" onClick={resetForm}>
              Cancel Edit
            </button>
          ) : null}
        </div>
      </form>

      <section className="card">
        <div className="list-header">
          <h2>Students</h2>
          <button type="button" className="secondary" onClick={fetchStudents} disabled={loading}>
            Refresh
          </button>
        </div>

        {error ? <p className="error">{error}</p> : null}
        {loading ? <p>Loading...</p> : null}

        {!loading && students.length === 0 ? <p>No students found.</p> : null}

        <ul className="list">
          {students.map((student) => (
            <li key={student.id} className="row">
              <div>
                <strong>{student.name}</strong>
                <p>
                  Age: {student.age ?? "N/A"} | Course: {student.course ?? "N/A"} | Gender: {student.gender ?? "N/A"}
                </p>
              </div>
              <div className="actions">
                <button type="button" className="secondary" onClick={() => onEdit(student)}>
                  Edit
                </button>
                <button type="button" className="danger" onClick={() => onDelete(student.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
