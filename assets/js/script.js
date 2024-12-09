// // Ambil elemen dropdown
// const parameterSelect = document.getElementById("parameter-select");

// // Inisialisasi chart
// const ctx = document.getElementById("chart").getContext("2d");
// const chart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: [],
//     datasets: [
//       {
//         label: "Suhu Air (°C)",
//         data: [],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.1,
//         borderWidth: 2,
//         fill: true,
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: "Grafik Suhu Air Per Jam selama Tahun 2023",
//       },
//       legend: {
//         display: true,
//       },
//     },
//     layout: {
//       padding: 10,
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Jam",
//         },
//         ticks: {
//           stepSize: 1,
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Nilai",
//         },
//         beginAtZero: true,
//       },
//     },
//   },
// });

// // Fungsi untuk memperbarui chart
// const updateChart = (parameter) => {
//   fetch(`http://127.0.0.1:5000/data/${parameter}`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Sort data by Hour
//       data.sort((a, b) => a.Hour - b.Hour);
//       let time = data.map((item) => item.Hour);
//       let values, label;
//       if (parameter === "temperature") {
//         values = data.map((item) => item.Water_Temperature_C);
//         label = "Suhu Air (°C)";
//       } else if (parameter === "turbidity") {
//         values = data.map((item) => item.Turbidity_NTU);
//         label = "Kekeruhan Air (NTU)";
//       }

//       // Perbarui data chart
//       chart.data.labels = time;
//       chart.data.datasets[0].data = values;
//       chart.data.datasets[0].label = label;
//       // Perbarui title chart
//       chart.options.plugins.title.text =
//         parameter === "temperature"
//           ? "Grafik Suhu Air Per Jam selama Tahun 2023"
//           : "Grafik Kekeruhan Air Per Jam selama Tahun 2023";
//       chart.update();
//     })
//     .catch((err) => console.error("Error", err));
// };

// parameterSelect.addEventListener('change', (e) => {
//   const selectedParameter = e.target.value;
//   updateChart(selectedParameter);
// });

// updateChart('temperature')
