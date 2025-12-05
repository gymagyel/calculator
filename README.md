# Calculator Project

A functional on-screen calculator built with **HTML, CSS, and JavaScript** as part of The Odin Project Foundations course.

## ✨ Features
- Two-line display (history + current input)
- Basic operations: addition, subtraction, multiplication, division
- Clear button to reset calculator
- Backspace (⌫) button to delete last digit
- Decimal (.) input support with prevention of multiple decimals
- Operator switching (e.g., `5 +` → change to `5 -` without recalculating)
- Continuous chained calculations (e.g., `3 + 4 - 2 =` → `5`)
- Proper behavior after pressing equals (new input starts fresh)
- Responsive grid-based layout

## 🧠 What I Learned
- DOM manipulation  
- Handling multiple event listeners  
- Managing state in JavaScript (`firstNumber`, `operator`, `secondNumber`, `justCalculated`)  
- Designing calculator logic and user flow  
- Debugging syntax, logic, and state issues  
- Understanding how real calculators handle chained operations  

## 🚧 Remaining Improvements / Future Work
- Better floating-point rounding (avoid long decimals or `0.3000004` issues)
- Error handling for divide-by-zero (fun or friendly warning)
- Limit display width to prevent overflow
- Keyboard support (numbers, operators, Enter, Escape, Backspace)
- Visual UI polish (hover states, animations, themes)

## 📁 How to Run
Just open `index.html` in any browser. No installation required.
