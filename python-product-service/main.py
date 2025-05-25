from flask import Flask, jsonify, request

app = Flask(__name__)

# In-Memory-Datenbank (als Beispiel)
products = [
    {"id": 1, "name": "Python Product 1", "price": 49.99},
    {"id": 2, "name": "Python Product 2", "price": 79.99}
]

@app.route('/products', methods=['GET'])
def get_all_products():
    return jsonify(products)

@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

@app.route('/products', methods=['POST'])
def create_product():
    data = request.json
    new_id = max(p["id"] for p in products) + 1 if products else 1
    new_product = {"id": new_id, "name": data["name"], "price": data["price"]}
    products.append(new_product)
    return jsonify(new_product), 201

@app.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.json
    product = next((p for p in products if p["id"] == product_id), None)
    if product:
        product.update(data)
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    global products
    products = [p for p in products if p["id"] != product_id]
    return jsonify({"message": "Product deleted"})

if __name__ == '__main__':
    app.run(port=3001)
