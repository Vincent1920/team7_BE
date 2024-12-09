import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqe5n_h7Aep6ThjhwTy_6GtyzB2vyPfiU",
  authDomain: "team7-e5280.firebaseapp.com",
  databaseURL: "https://team7-e5280-default-rtdb.firebaseio.com",
  projectId: "team7-e5280",
  storageBucket: "team7-e5280.firebasestorage.app",
  messagingSenderId: "92957058272",
  appId: "1:92957058272:web:838178bdf7a20672d95c85",
  measurementId: "G-V3XZ4LBLSN"

};


// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }; // Named export
