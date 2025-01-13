import app from "./firebase-config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

// Función para registrar usuarios
export function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuario registrado:", userCredential.user.email);
      alert("Registro exitoso. Bienvenido " + userCredential.user.email);
    })
    .catch((error) => {
      console.error("Error al registrar:", error.message);
    });
}

// Función para iniciar sesión
export function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Inicio de sesión exitoso:", userCredential.user.email);
      alert("Bienvenido " + userCredential.user.email);
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error.message);
    });
}

// Función para cerrar sesión
export function logoutUser() {
  signOut(auth)
    .then(() => {
      console.log("Cierre de sesión exitoso.");
      alert("Sesión cerrada.");
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error.message);
    });
}

// Escuchar cambios de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario autenticado:", user.email);
    document.getElementById("auth-status").innerText = `Bienvenido ${user.email}`;
  } else {
    console.log("No hay usuario autenticado.");
    document.getElementById("auth-status").innerText = "No has iniciado sesión.";
  }
});
