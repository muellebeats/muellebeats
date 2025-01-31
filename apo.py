from flask import Flask, jsonify
import openai
import os

# Configura tu API Key de OpenAI
openai.api_key = os.getenv('01LvV9GBFURWSd6WjesFrfmEIjJDZ9Vwpa9PZIbp12j9pqj0DSSV5UZJkWjHVmallIqtefgggpT3BlbkFJ9rAD1llMu9vThy5YSf4Ycv9XGuuP7kUkzA3xvtkJHiE6V0k61-D3fwXBK6_z7hXOyuegWW7_8A')  # Usa variables de entorno para la clave API

app = Flask(__name__)

@app.route('/get_principios', methods=['GET'])
def get_principios():
    # Aquí puedes integrar OpenAI u otro proceso para generar o devolver los "principios" de tu roadmap
    principios = {
        "principio_1": "Conectar a los artistas y creadores",
        "principio_2": "Fomentar la creatividad y colaboración",
        "principio_3": "Impulsar la cultura musical en América Latina"
    }
    return jsonify(principios)

if __name__ == '__main__':
    app.run(debug=True)
