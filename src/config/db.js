// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set, get } from "firebase/database";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDqe5n_h7Aep6ThjhwTy_6GtyzB2vyPfiU",
//   authDomain: "team7-e5280.firebaseapp.com",
//   databaseURL: "https://team7-e5280-default-rtdb.firebaseio.com", // Gunakan URL Realtime Database
//   projectId: "team7-e5280",
//   storageBucket: "team7-e5280.firebasestorage.app",
//   messagingSenderId: "92957058272",
//   appId: "1:92957058272:web:838178bdf7a20672d95c85",
//   measurementId: "G-V3XZ4LBLSN"
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// // Function to save data to Realtime Database
// function saveDataToFirebase(data) {
//   const dataRef = ref(database, 'iotData/');
//   set(dataRef, data)
//     .then(() => {
//       console.log("Data successfully saved!");
//     })
//     .catch((error) => {
//       console.error("Error saving data:", error);
//     });
// }

// // Function to retrieve data from Realtime Database
// function getDataFromFirebase() {
//   const dataRef = ref(database, 'iotData/');
//   get(dataRef)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error("Error retrieving data:", error);
//     });
// }


// // Ekspor database untuk digunakan di file lain
// export default database ;


import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Konfigurasi Firebase Anda
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

// Inisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };