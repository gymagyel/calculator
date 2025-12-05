
function clickButtonWithText(text) {
  const button = Array.from(document.querySelectorAll("button"))
    .find(btn => btn.textContent.trim() === text.trim());
  if (button) button.click();
}


function roundResult(num) {
  return parseFloat(num.toFixed(6)); // removes trailing zeros too
}
function add(a, b){
    return a+b
}

function subtract(a, b) {
    return roundResult (a - b)
}

function multiply (a,b) {
    return roundResult (a * b)
}

function divide (a,b) {
    return roundResult (a/b)

}
let justCalculated = false;

function operate( operator, a, b) {
if (operator === "+") return add(a, b);
if (operator === '-') return subtract(a, b);
if (operator === '×') return multiply(a,b);
if (operator === "÷") {
  if (b === 0) return "DIV0";
  return divide(a,b);}
}




const ClearBtn = document.querySelector(".btn-clear");

const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");
const equalsButton = document.querySelector(".btn-equals-large");
const display = document.getElementById("current");
const historyDisplay = document.getElementById("history");
const backBtn = document.querySelector(".btn-backspace");
const decimalBtn = document.querySelector(".btn-decimal");



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

backBtn.addEventListener("click" ,() => {
  const currentText = display.textContent;

  if (currentText.length >1){
    display.textContent = currentText.slice (0, -1);
  } else {
    display.textContent = "0"
  }
})


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

decimalBtn.addEventListener("click", () =>{
    const currentText = display.textContent;

    if (currentText.includes("."))return;

    if (currentText === "0"){
        display.textContent = "0.";
        return
    }
      display.textContent = currentText + ".";

})


operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const newOperator = button.textContent;
    
    if ( firstNumber !==null && operator !==null && display.textContent === "0") {
        operator = newOperator;
        historyDisplay.textContent = `${firstNumber} ${operator}`;
        return
    }
    
    
    if ( firstNumber !==null && operator !== null && display.textContent !=="0") {
        secondNumber = Number(display.textContent);
        const result = operate (operator, firstNumber, secondNumber);

        firstNumber = result;
        operator = newOperator;
        historyDisplay.textContent = `${firstNumber} ${operator}`;
        display.textContent = "0";
        return
   
        if (justCalculated) {
  justCalculated = false;
  operator = newOperator;
  historyDisplay.textContent = `${firstNumber} ${operator}`;
  display.textContent = "0";
  return;
}
    } 

    firstNumber = Number(display.textContent);   
    operator = button.textContent;      
    historyDisplay.textContent =  `${firstNumber} ${operator}`;
    display.textContent = "0";     
  });
});


equalsButton.addEventListener("click", () =>{
    if (firstNumber === "" || operator === null) return;

    secondNumber = Number (display.textContent);
    const result = operate(operator,firstNumber, secondNumber);


    if (result === "DIV0") {
  display.textContent = "Error";
  historyDisplay.textContent = "Cannot divide by 0";
 

  // Reset calculator state
  firstNumber = "";
  secondNumber = "";
  operator = null;
  justCalculated = true;
  return

    }

    historyDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} =`;

  const rounded = roundResult(result);   // ensure clean value here too
  let displayString = rounded.toString();

  // Only use scientific notation if the number is REALLY too big/small
  if (Math.abs(rounded) >= 1e10 || (Math.abs(rounded) > 0 && Math.abs(rounded) < 1e-6)) {
    displayString = rounded.toExponential(6);
  }

  display.textContent = displayString;

  firstNumber = rounded;
  operator = null;
  secondNumber = null;
  justCalculated = true;
});

document.addEventListener("keydown", (e) => {
  

  // NUMBERS 0–9
  if (e.key >= "0" && e.key <= "9") {
    clickButtonWithText(e.key);
    return;
  }

  // DECIMAL
  if (e.key === ".") {
    decimalBtn.click();
    return;
  }

  // OPERATORS + -
  if (e.key === "+" || e.key === "-") {
    clickButtonWithText(e.key);
    return;
  }

  // MULTIPLY (*) → × button
  if (e.key === "*" || e.key === "x") {
    clickButtonWithText("×");
    return;
  }

  // DIVIDE (/) → ÷ button
  if (e.key === "/") {
    clickButtonWithText("÷");
    return;
  }

  // ENTER or = → trigger equals
  if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();  
    equalsButton.click();
    return;
  }

  // BACKSPACE → delete
  if (e.key === "Backspace") {
    backBtn.click();
    return;
  }

  // ESC → CLEAR
  if (e.key === "Escape") {
    ClearBtn.click();
    return;
  }
});
