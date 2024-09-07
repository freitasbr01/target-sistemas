// QUESTION 3

const dailyRevenue = [
  { "day": 1, "value": 345.75 },
  { "day": 2, "value": 874.22 },
  { "day": 3, "value": 219.34 },
  { "day": 4, "value": 0.0 },
  { "day": 5, "value": 0.0 },
  { "day": 6, "value": 432.12 },
  { "day": 7, "value": 0.0 },
  { "day": 8, "value": 723.89 },
  { "day": 9, "value": 964.55 },
  { "day": 10, "value": 120.47 },
  { "day": 11, "value": 0.0 },
  { "day": 12, "value": 0.0 },
  { "day": 13, "value": 517.23 },
  { "day": 14, "value": 275.50 },
  { "day": 15, "value": 638.94 },
  { "day": 16, "value": 894.10 },
  { "day": 17, "value": 156.79 },
  { "day": 18, "value": 0.0 },
  { "day": 19, "value": 0.0 },
  { "day": 20, "value": 412.63 },
  { "day": 21, "value": 0.0 },
  { "day": 22, "value": 875.44 },
  { "day": 23, "value": 0.0 },
  { "day": 24, "value": 0.0 },
  { "day": 25, "value": 953.22 },
  { "day": 26, "value": 0.0 },
  { "day": 27, "value": 145.78 },
  { "day": 28, "value": 0.0 },
  { "day": 29, "value": 768.93 },
  { "day": 30, "value": 912.47 }
];

const daysWithRevenue = dailyRevenue.filter(day => day.value > 0);

const lowerRevenue = Math.min(...daysWithRevenue.map(day => day.value));
const higherRevenue = Math.max(...daysWithRevenue.map(day => day.value));

const sumRevenue = daysWithRevenue.reduce((total, day) => total + day.value, 0);
const averageRevenue = sumRevenue / daysWithRevenue.length;
const daysAverageAbove = daysWithRevenue.filter(day => day.value > averageRevenue).length;

const revenueSummary = `
  Menor faturamento: R$ ${lowerRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
  Maior faturamento: R$ ${higherRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
  Dias com faturamento acima da média: ${daysAverageAbove}
`;

document.getElementById("button-three").addEventListener("click", function() {
  document.getElementById("replay-three").innerText = revenueSummary;
})