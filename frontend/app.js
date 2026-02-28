fetch("http://localhost:3000/metrics")
.then(res => res.json())
.then(data => {
  document.getElementById("metrics").innerHTML = `
    <p>MRR: $${data.MRR}</p>
    <p>ARR: $${data.ARR}</p>
    <p>LTV: $${data.LTV}</p>
  `;
});
