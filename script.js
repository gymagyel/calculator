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
if (operator === 'x') return multiply(a,b);
if (operator === "÷") return divide(a,b);
}

const ClearBtn = document.querySelector(".btn-clear");
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn-number");
ClearBtn.addEventListener("click", function () {
  display.textContent= "0";
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