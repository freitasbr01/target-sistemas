// QUESTION 2

function numberBelongsFibonacciSequence(definedNumber) {
  if (definedNumber < 0) {
    return false;
  }

  let x = 0;
  let y = 1;

  if (definedNumber === x || definedNumber === y) {
    return true;
  }

  let sumFibonacciSequenceNumber = x + y;
  
  while (sumFibonacciSequenceNumber <= definedNumber) {
    if (sumFibonacciSequenceNumber === definedNumber) {
      return true;
    }
    
    x = y;
    y = sumFibonacciSequenceNumber;
    sumFibonacciSequenceNumber = x + y;
  }

  return false;
}

document.getElementById("button-two").addEventListener("click", function() {
  const definedNumber = 8;
  
  const response = document.getElementById("replay-two");
  
  if (numberBelongsFibonacciSequence(definedNumber)) {
    response.innerText = `O número ${definedNumber} pertence à sequência de Fibonacci.`;
  } else {
    response.innerText = `O número ${definedNumber} não pertence à sequência de Fibonacci.`;
  }
});