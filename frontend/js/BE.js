let currentChart = null;

// Fungsi untuk mengambil data dari API
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

// Fungsi untuk membuat grafik
const createChart = (ctx, label, data, chartLabel, color) => {
  if(currentChart){
    currentChart.destroy();
  }


  currentChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: label,
      datasets: [
        {
          label: chartLabel,
          data: data,
          borderColor: color,
          backgroundColor: `${color}33`, // Transparan
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  });
};

async function updateChart() {
  const parameter = document.getElementById("parameter-select").value;
  console.log(parameter)
  const request = `http://localhost:3000/api/${parameter}/2023/11`;
  const response = await fetch(request);
  const data = await response.json();

  console.log(data)

  const labels = data.map(item => `${item.day}`);
  const values = data.map(item => parseFloat(item.average));

    // Create a chart
    const ctx = document.getElementById('chart').getContext('2d');
    if (parameter === 'temperature') {
      createChart(ctx, labels, values, `Rata-Rata Suhu Air (°C)` , 'rgba(54, 162, 235)');
    } else {
      createChart(ctx, labels, values, `Rata-Rata Kekeruhan Air (Ppm) ` , 'rgba(54, 162, 235)');

    }
}

updateChart();
