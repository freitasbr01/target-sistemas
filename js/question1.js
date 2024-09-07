// QUESTION 1

function valueVariableSum() {
  let INDEX = 13;
  let SUM = 0;
  let K = 0;

  while (K < INDEX) {
    K = K + 1;
    SUM = SUM + K;
  }

  return SUM;
}

document.getElementById("button-one").addEventListener("click", function() {
  document.getElementById("replay-one").innerText = "O valor da variável SOMA é " + valueVariableSum()
})
