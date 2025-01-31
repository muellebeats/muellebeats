from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Tu API Key de OpenAI
openai.api_key = '01LvV9GBFURWSd6WjesFrfmEIjJDZ9Vwpa9PZIbp12j9pqj0DSSV5UZJkWjHVmallIqtefgggpT3BlbkFJ9rAD1llMu9vThy5YSf4Ycv9XGuuP7kUkzA3xvtkJHiE6V0k61-D3fwXBK6_z7hXOyuegWW7_8A   '

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.json['input']
    response = openai.Completion.create(
        engine="text-davinci-003",  # Usa el modelo que prefieras
        prompt=user_input,
        max_tokens=150
    )
    return jsonify({"response": response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)
