<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
    <header>
        <button onclick="location.href='index.html'">Volver atrás</button>
    </header>
    <main>
        <h1>Iniciar Sesión</h1>
        <section>
            <h2>Registrarse</h2>
            <form id="registerForm">
                <input type="email" placeholder="Correo electrónico" required>
                <input type="password" placeholder="Contraseña" required>
                <button type="submit">Registrarse</button>
            </form>
        </section>
        <section>
            <h2>Iniciar sesión</h2>
            <form id="loginForm">
                <input type="email" placeholder="Correo electrónico" required>
                <input type="password" placeholder="Contraseña" required>
                <button type="submit">Iniciar sesión</button>
            </form>
        </section>
    </main>
</body>
</html>
