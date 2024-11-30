// src/mockData.js
import { ref, set } from 'firebase/database';
import { database } from '../config/db.js';

// Fungsi untuk membuat data palsu dan menyimpannya ke Firebase
function generateMockData() {
  // Data palsu berupa objek yang terdiri dari beberapa device
  const mockData = {
    device1: {
      temperature: 22.5,
      humidity: 60,
      timestamp: Date.now(),
    },
    device2: {
      temperature: 24.3,
      humidity: 55,
      timestamp: Date.now(),
    },
    device3: {
      temperature: 19.7,
      humidity: 65,
      timestamp: Date.now(),
    },
    device4: {
      temperature: 25.1,
      humidity: 50,
      timestamp: Date.now(),
    },
  };

  // Simpan data palsu ke Firebase
  const dataRef = ref(database, 'iot_data/');

  set(dataRef, mockData)
    .then(() => {
      console.log("Data palsu berhasil disimpan!");
    })
    .catch((error) => {
      console.error("Terjadi kesalahan saat menyimpan data:", error);
    });
}

// Panggil fungsi untuk menyimpan data palsu
generateMockData();
