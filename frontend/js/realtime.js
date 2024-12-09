import { ref, onValue } from 'firebase/database';
import { database } from '../db/firebase.js';  // Sesuaikan path-nya

// Mendapatkan data suhu realtime
const suhuRef = ref(database, 'test_data/suhu/realtime_suhu');
onValue(suhuRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    console.log('Realtime suhu:', data);
  } else {
    console.log('Data suhu tidak ada');
  }
});

// Mendapatkan data kekeruhan realtime
const kekeruhanRef = ref(database, 'test_data/kekeruhan/realtime_kekeruhan');
onValue(kekeruhanRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    console.log('Realtime kekeruhan:', data);
  } else {
    console.log('Data kekeruhan tidak ada');
  }
});
