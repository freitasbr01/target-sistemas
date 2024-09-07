// QUESTION 4

const revenue = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

const totalRevenue = Object.values(revenue).reduce((total, value) => total + value, 0);

const percentages = {};
for (const [state, value] of Object.entries(revenue)) {
  percentages[state] = (value / totalRevenue * 100).toFixed(2);
}


document.getElementById("button-four").addEventListener("click", function() {
  let PercentageByState = "";
  for (const [state, percentual] of Object.entries(percentages)) {
    PercentageByState += `${state}: ${percentual}%<br>`;
  }
  document.getElementById("replay-four").innerHTML = PercentageByState;
})