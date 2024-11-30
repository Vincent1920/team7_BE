fetch('http://localhost:5000/api/data')  // Gantilah URL dengan endpoint API Anda
  .then(response => response.json())
  .then(data => {
    console.log('Data from Firebase:', data);
    // Menampilkan data ke UI, misalnya dalam bentuk tabel
    const table = document.getElementById('data-table');
    for (const [device, values] of Object.entries(data.data)) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      cell1.textContent = device;
      cell2.textContent = `Temperature: ${values.temperature}°C`;
      cell3.textContent = `Humidity: ${values.humidity}%`;
    }
  })
  .catch(error => console.error('Error:', error));
