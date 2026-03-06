# Experiment 9: Flask Authentication Methods

## Learning Outcomes

By completing this experiment, you will be able to:

1. **Implement Basic Authentication** — Use HTTP Basic Authentication to protect endpoints by validating username and password credentials from the `Authorization` header.

2. **Create Simple Token Authentication** — Build a custom token-based authentication system using base64 encoding to generate and validate tokens, demonstrating how to implement custom authentication mechanisms.

3. **Implement JWT Authentication** — Use Flask-JWT-Extended to create and validate JSON Web Tokens (JWTs), the industry-standard method for stateless authentication in REST APIs.

4. **Handle authentication headers** — Parse and validate different types of authentication headers (`Authorization` for Basic Auth, `x-auth-token` for custom tokens, and `Bearer` tokens for JWT).

5. **Protect API endpoints** — Apply authentication decorators and middleware to secure routes, ensuring only authenticated users can access protected resources.

---

## About the Experiment

This experiment demonstrates **three different authentication methods** for securing Flask APIs: Basic Authentication, Simple Token Authentication, and JWT (JSON Web Token) Authentication. Each method has its own use cases and security characteristics, and this experiment provides hands-on experience with all three approaches.

### What's Implemented

| Endpoint | Method | Description | Authentication | Status Codes |
| --- | --- | --- | --- | --- |
| `/` | GET | Health check and API information | None | 200 (success) |
| `/basic-protected` | GET | Protected route using Basic Auth | Basic Auth header | 200 (success), 401 (unauthorized) |
| `/token-login` | POST | Generate simple token | Username/password in body | 200 (success), 401 (invalid credentials) |
| `/token-protected` | GET | Protected route using simple token | `x-auth-token` header | 200 (success), 401 (unauthorized) |
| `/jwt-login` | POST | Generate JWT access token | Username/password in body | 200 (success), 401 (invalid credentials) |
| `/jwt-protected` | GET | Protected route using JWT | `Authorization: Bearer <token>` | 200 (success), 401 (unauthorized) |

### Key Observations

- **Basic Authentication**: Uses the standard HTTP Basic Auth mechanism where credentials are sent in the `Authorization` header as `Basic <base64(username:password)>`. Simple but credentials are sent with every request.

- **Simple Token Authentication**: A custom implementation where a base64-encoded username is used as a token. The token is obtained via `/token-login` and sent in the `x-auth-token` header. This demonstrates how to build custom authentication systems.

- **JWT Authentication**: Uses Flask-JWT-Extended to generate and validate JSON Web Tokens. JWTs are stateless, can contain user information, and are the preferred method for modern REST APIs. Tokens are obtained via `/jwt-login` and sent in the `Authorization` header as `Bearer <token>`.

- **In-memory user store**: User credentials are stored in a Python dictionary for simplicity. In production, this would be replaced with a database.

- **JWT Manager**: The `JWTManager` is initialized with the Flask app and configured with a secret key. The `@jwt_required()` decorator protects routes, and `get_jwt_identity()` retrieves the authenticated user.

### Tech Stack

- **Flask** 3.1.3 — Web framework for building REST APIs
- **Flask-JWT-Extended** 4.7.1 — JWT authentication extension for Flask
- **PyJWT** 2.11.0 — Python library for encoding and decoding JWTs
- **Gunicorn** 25.1.0 — Production WSGI HTTP server
- **Werkzeug** 3.1.6 — WSGI utility library (Flask dependency)
- **Jinja2** 3.1.6 — Template engine (Flask dependency)

### Project Structure

```text
experiment-9/
├── app.py                 # Main application with all authentication routes
├── requirements.txt       # Python dependencies
├── render.yaml            # Render deployment configuration
└── vir-exp-9/            # Virtual environment
```

### How to Run

#### 1. Set up Virtual Environment (if not already done)

```bash
# Create virtual environment
python -m venv vir-exp-9

# Activate virtual environment
# On Windows:
.\vir-exp-9\Scripts\Activate.ps1
# On macOS/Linux:
source vir-exp-9/bin/activate
```

#### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

#### 3. Run the Application

**Development mode:**

```bash
python app.py
```

**Production mode with Gunicorn:**

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

The server will start on [http://localhost:5000](http://localhost:5000)

### Test Users

The application comes with two pre-configured users:

- **Username:** `admin`, **Password:** `admin123`, **Role:** `admin`
- **Username:** `john`, **Password:** `john123`, **Role:** `user`

### API Usage Examples

#### 1. Basic Authentication

```bash
# Using curl with Basic Auth
curl -u admin:admin123 http://localhost:5000/basic-protected

# Or manually set the Authorization header
curl -H "Authorization: Basic YWRtaW46YWRtaW4xMjM=" http://localhost:5000/basic-protected
```

#### 2. Simple Token Authentication

**Step 1: Get a token**

```bash
curl -X POST http://localhost:5000/token-login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

**Response:**
```json
{
  "token": "YWRtaW4="
}
```

**Step 2: Use the token to access protected route**

```bash
curl -H "x-auth-token: YWRtaW4=" http://localhost:5000/token-protected
```

#### 3. JWT Authentication

**Step 1: Get a JWT access token**

```bash
curl -X POST http://localhost:5000/jwt-login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

**Step 2: Use the JWT token to access protected route**

```bash
curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." \
  http://localhost:5000/jwt-protected
```

#### 4. Health Check

```bash
curl http://localhost:5000/
```

### Deployment on Render

This application is configured for deployment on Render using the `render.yaml` file.

**Deploy using Render CLI:**

```bash
render deploy
```

**Or deploy via Render Dashboard:**
1. Connect your GitHub repository
2. Render will auto-detect the `render.yaml` configuration
3. The service will be automatically deployed

**Note:** Make sure to set the `JWT_SECRET_KEY` environment variable in Render dashboard for production use (currently hardcoded for development).

---

## Author

Made by Chinmay
