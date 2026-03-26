import os

from flask import Flask, jsonify
import requests

app = Flask(__name__)

ORDER_SERVICE_BASE = os.environ.get("ORDER_SERVICE_URL", "http://localhost:5002").rstrip("/")

customers = {
    101: {"id": 101, "name": "Customer-1", "email": "customer-1@example.com"},
    102: {"id": 102, "name": "Customer-2", "email": "customer-2@example.com"},
}


@app.route("/customers/<int:user_id>/orders")
def get_account_details(user_id):
    customer = customers.get(user_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    try:
        response = requests.get(
            f"{ORDER_SERVICE_BASE}/orders/user/{user_id}",
            timeout=10,
        )

        if response.status_code == 200:
            orders = response.json()
        else:
            orders = []
    except requests.exceptions.RequestException:
        orders = []

    account_data = {
        "customer": customer,
        "orders": orders,
    }

    return jsonify(account_data)


@app.route("/")
def home():
    return jsonify({"service": "Customer Service Running"})


@app.route("/health")
def health():
    return jsonify({"status": "healthy", "service": "customer-service"})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    debug = os.environ.get("FLASK_DEBUG", "").lower() in ("1", "true", "yes")
    app.run(host="0.0.0.0", port=port, debug=debug)
