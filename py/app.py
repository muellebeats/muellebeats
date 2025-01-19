from flask import Flask, request, jsonify
import uuid

app = Flask(__name__)

# Base de datos simulada (en memoria) para almacenar tokens
users = {}

# Ruta para generar un token
@app.route('/generate-token', methods=['POST'])
def generate_token():
    data = request.get_json()
    user_id = data.get('userId')

    if not user_id:
        return jsonify({"error": "Falta el userId"}), 400

    # Generar un token único
    token = str(uuid.uuid4())
    users[user_id] = {"token": token}

    return jsonify({"userId": user_id, "token": token})

# Ruta para validar un token
@app.route('/validate-token', methods=['POST'])
def validate_token():
    data = request.get_json()
    user_id = data.get('userId')
    token = data.get('token')

    if users.get(user_id) and users[user_id]["token"] == token:
        return jsonify({"valid": True})
    
    return jsonify({"valid": False})

# Ejecutar el servidor
if __name__ == '__main__':
    app.run(debug=True)

