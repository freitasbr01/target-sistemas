// QUESTION 5

function inverterString(string) {
  let reversedString = '';
  
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  
  return reversedString;
}

const myString = 'Target Sistemas';
const result = inverterString(myString);

document.getElementById("button-five").addEventListener("click", function() {
  document.getElementById("replay-five").innerText = result;
})