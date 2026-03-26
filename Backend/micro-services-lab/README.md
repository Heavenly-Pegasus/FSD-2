# Experiment 11: Microservices Backend with Flask

## Learning Outcomes

By completing this experiment, you will be able to:

1. **Design a microservice-based backend** — Split backend functionality into independent services (`customer-service` and `order_service`) with clear responsibilities.

2. **Implement service-to-service communication** — Use HTTP requests from one Flask service to another (`customer-service` calling `order_service`) to aggregate data.

3. **Build REST endpoints with Flask** — Create and test GET and PUT APIs that return structured JSON responses with appropriate status codes.

4. **Handle dependency failures gracefully** — Use exception handling and timeouts for inter-service calls so one service can respond safely even if another is unavailable.

5. **Deploy multiple services on Render** — Deploy both services from one repository using separate Render Web Services, root directories, and environment variables.

---

## About the Experiment

This experiment demonstrates a simple **microservice architecture** using Flask:

- **Order Service** manages order data and order status updates.
- **Customer Service** manages customer data and calls the Order Service to return customer + order details in one response.

The services run independently and communicate using HTTP, which is a core idea in microservice systems.

### What's Implemented

#### Customer Service (`customer-service`)

| Endpoint | Method | Description | Status Codes |
| --- | --- | --- | --- |
| `/` | GET | Service health/info response | 200 |
| `/health` | GET | Health check endpoint | 200 |
| `/customers/<user_id>/orders` | GET | Return customer details and their orders (from Order Service) | 200, 404 |

#### Order Service (`order_service`)

| Endpoint | Method | Description | Status Codes |
| --- | --- | --- | --- |
| `/` | GET | Service health/info response | 200 |
| `/health` | GET | Health check endpoint | 200 |
| `/orders/user/<user_id>` | GET | Get all orders for a specific user | 200 |
| `/orders/<order_id>/status` | PUT | Update order status | 200, 400, 404 |

### Key Observations

- **Service boundaries**: Customer-related logic and order-related logic are separated into different deployable units.
- **Aggregation pattern**: The customer service acts as an aggregator by fetching order data from another service.
- **Environment-based config**: `ORDER_SERVICE_URL` allows switching between local and deployed environments without code changes.
- **Production readiness basics**: Both services support Render deployment with `gunicorn`, `PORT`, and `0.0.0.0` binding.

### Tech Stack

- **Flask** 3.0.0 — Web framework for building APIs
- **Requests** — HTTP client for service-to-service calls
- **Gunicorn** — Production WSGI server for deployment
- **Werkzeug** 3.0.1 — WSGI utilities (Flask dependency)

### Project Structure

```text
micro-services-lab/
├── customer-service/
│   ├── customer_app.py
│   └── requirements.txt
├── order_service/
│   ├── order_app.py
│   └── requirements.txt
└── .gitignore
```

---

## How to Run Locally

### 1. Install Dependencies

Install dependencies for both services:

```bash
pip install -r order_service/requirements.txt -r customer-service/requirements.txt
```

### 2. Run Order Service

```bash
cd order_service
python order_app.py
```

Runs on: [http://localhost:5002](http://localhost:5002)

### 3. Run Customer Service (new terminal)

```bash
cd customer-service
python customer_app.py
```

Runs on: [http://localhost:5001](http://localhost:5001)

---

## API Usage Examples

### Order Service

```bash
curl http://localhost:5002/
curl http://localhost:5002/orders/user/101
curl -X PUT http://localhost:5002/orders/2/status \
  -H "Content-Type: application/json" \
  -d '{"order_status":"Delivered"}'
```

### Customer Service

```bash
curl http://localhost:5001/
curl http://localhost:5001/customers/101/orders
```

---

## Postman Test Plan

1. **GET** `http://localhost:5002/orders/user/101`  
   Verify list of orders is returned.

2. **PUT** `http://localhost:5002/orders/1/status` with body:

```json
{
  "order_status": "Shipped"
}
```

3. **GET** `http://localhost:5001/customers/101/orders`  
   Verify response contains both `customer` and `orders`.

---

## Deployment on Render

Deploy as **two separate Web Services** from the same GitHub repository.

### 1) Order Service

- **Root Directory**: `Backend/micro-services-lab/order_service`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn order_app:app`

### 2) Customer Service

- **Root Directory**: `Backend/micro-services-lab/customer-service`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn customer_app:app`
- **Environment Variable**:
  - `ORDER_SERVICE_URL=https://<your-order-service>.onrender.com`

### Verification after deploy

- `https://<order-service>.onrender.com/`
- `https://<customer-service>.onrender.com/`
- `https://<customer-service>.onrender.com/customers/101/orders`

---

## Author

Made by Chinmay
