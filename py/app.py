from flask import Flask, request, jsonify
from twilio.rest import Client
import random

app = Flask(__name__)
otp_storage = {}  # Diccionario temporal para almacenar OTPs (idealmente usar base de datos)

# Configuración de Twilio
account_sid = 'TU_ACCOUNT_SID'  # Reemplaza con tu Account SID de Twilio
auth_token = 'TU_AUTH_TOKEN'    # Reemplaza con tu Auth Token de Twilio
twilio_client = Client(account_sid, auth_token)

@app.route('/send-otp', methods=['POST'])
def send_otp():
    data = request.json
    phone = data.get('phone')
    if not phone:
        return jsonify({'error': 'Número de teléfono es requerido'}), 400

    # Generar OTP de 6 dígitos
    otp = str(random.randint(100000, 999999))
    otp_storage[phone] = otp  # Almacenar el OTP temporalmente

    # Enviar SMS con Twilio
    message = twilio_client.messages.create(
        body=f'Tu código de verificación es: {otp}',
        from_='+1234567890',  # Reemplaza con tu número Twilio
        to=phone
    )

    return jsonify({'message': 'OTP enviado correctamente.'}), 200

@app.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = request.json
    phone = data.get('phone')
    otp = data.get('otp')

    # Verificar que el OTP coincida
    if otp_storage.get(phone) == otp:
        return jsonify({'message': 'Número verificado con éxito.'}), 200
    else:
        return jsonify({'error': 'Código OTP inválido o expirado.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
