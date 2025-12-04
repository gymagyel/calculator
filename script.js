function add(a, b){
    return a+b
}

function subtract(a, b) {
    return a - b
}

function multiply (a,b) {
    return a * b
}

function divide (a,b) {
    return a/b
}

function operate( operator, a, b) {
if (operator === "+") return add(a, b);
if (operator === '-') return subtract(a, b);
if (operator === '×') return multiply(a,b);
if (operator === "÷") return divide(a,b);
}

const ClearBtn = document.querySelector(".btn-clear");

const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");
const equalsButton = document.querySelector(".btn-equals-large");
const display = document.getElementById("current");
const historyDisplay = document.getElementById("history");
console.log("display:", display);
console.log("historyDisplay:", historyDisplay);
console.log("numberButtons:", numberButtons.length);
console.log("operatorButtons:", operatorButtons.length);
console.log("equalsButton:", equalsButton);
console.log("ClearBtn:", ClearBtn);

let firstNumber = null;
let operator = null;
let secondNumber = null;

ClearBtn.addEventListener("click", function () {
   display.textContent = "0";
  historyDisplay.textContent = "";
  firstNumber = null;
  operator = null;
  secondNumber = null;
});



numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    
   const number = button.textContent; 


if (display.textContent === "0") {
    display.textContent = number;
} else {
    display.textContent += number;
}
  })
})


operatorButtons.forEach(button => {
  button.addEventListener("click", () => {

    firstNumber = Number(display.textContent);   
    operator = button.textContent;      
    historyDisplay.textContent =  `${firstNumber} ${operator}`;
    display.textContent = "0";     
  });
});

equalsButton.addEventListener("click", () =>{
    if (firstNumber === null || operator === null) return;

    secondNumber = Number (display.textContent);
    const result = operate(operator, firstNumber, secondNumber);
      historyDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} =`; // 5 + 6 =
  display.textContent = result;      

    firstNumber = result;
    operator = null;
    secondNumber = null;
})
