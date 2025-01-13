// Importar Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXeISiEa-PZlH9YIX67uM7AOMtA98H01w",
  authDomain: "muelle-beats.firebaseapp.com",
  projectId: "muelle-beat",
  storageBucket: "muelle-beats.firebasestorage.app",
  messagingSenderId: "35536559976",
  appId: "1:35536559976:web:95d9c4b69b644c54a3c0dd",
  measurementId: "G-S9FCEXTHXC",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
