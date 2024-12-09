// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, onValue } from 'firebase/database';

// // Konfigurasi Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDqe5n_h7Aep6ThjhwTy_6GtyzB2vyPfiU",
//     authDomain: "team7-e5280.firebaseapp.com",
//     databaseURL: "https://team7-e5280-default-rtdb.firebaseio.com",
//     projectId: "team7-e5280",
//     storageBucket: "team7-e5280.firebasestorage.app",
//     messagingSenderId: "92957058272",
//     appId: "1:92957058272:web:838178bdf7a20672d95c85",
//     measurementId: "G-V3XZ4LBLSN"
  
//   };
  
  
// // Inisialisasi aplikasi Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);


// // Mendengarkan perubahan data suhu secara realtime
// const suhuRef = ref(database, 'test_data/temperature/realtime_temperature');

// onValue(suhuRef, (snapshot) => {
//   if (snapshot.exists()) {
//     const data = snapshot.val();
//     console.log('Realtime suhu:', data);
//   } else {
//     console.log('Data suhu tidak ada');
//   }
// });

// // Mendengarkan perubahan data kekeruhan secara realtime
// const kekeruhanRef = ref(database, 'test_data/turbidity/realtime_turbidity');
// onValue(kekeruhanRef, (snapshot) => {
//   if (snapshot.exists()) {
//     const data = snapshot.val();
//     console.log('Realtime kekeruhan:', data);
//   } else {
//     console.log('Data kekeruhan tidak ada');
//   }
// });



// firebase.js (fix)

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
// import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

// // Konfigurasi Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDqe5n_h7Aep6ThjhwTy_6GtyzB2vyPfiU",
//   authDomain: "team7-e5280.firebaseapp.com",
//   databaseURL: "https://team7-e5280-default-rtdb.firebaseio.com",
//   projectId: "team7-e5280",
//   storageBucket: "team7-e5280.appspot.com",
//   messagingSenderId: "92957058272",
//   appId: "1:92957058272:web:838178bdf7a20672d95c85",
//   measurementId: "G-V3XZ4LBLSN",
// };

// // Inisialisasi Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// export { database };

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDqe5n_h7Aep6ThjhwTy_6GtyzB2vyPfiU",
  authDomain: "team7-e5280.firebaseapp.com",
  databaseURL: "https://team7-e5280-default-rtdb.firebaseio.com",
  projectId: "team7-e5280",
  storageBucket: "team7-e5280.appspot.com",
  messagingSenderId: "92957058272",
  appId: "1:92957058272:web:838178bdf7a20672d95c85",
  measurementId: "G-V3XZ4LBLSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
