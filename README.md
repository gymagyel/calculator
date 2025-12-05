# 🧮 JavaScript Calculator

A functional web calculator built as part of **The Odin Project**.  
Supports keyboard input, decimal rounding, error handling, and a polished UI with hover effects.

---

## ✨ Features

### ✔ Basic Operations
- Addition  
- Subtraction  
- Multiplication  
- Division  

### ✔ Multi-Step Expression Handling
Correctly evaluates chained operations:  
`3 + 3 - 2 =` → `4` (not `8`)

### ✔ Divide-by-Zero Protection
- Displays a friendly `"Error"` message  
- Prevents Infinity  
- Safely resets the calculator state  

### ✔ Decimal & Rounding Support
- Fixes JS floating-point issues (`0.1 + 0.2 = 0.3`)  
- Rounds results to 6 decimal places  
- Removes unnecessary trailing zeros  

### ✔ Scientific Notation for Long Numbers
Automatically switches to exponential format when numbers exceed display limits.

### ✔ Full Keyboard Support
- Numbers → type normally  
- `+ - * /` → operators  
- `Enter` → equals  
- `Backspace` → delete  
- `Escape` → clear  
- `.` → decimal  

### ✔ UI & UX Improvements
- Smooth hover animations  
- Pressed (active) button effect  
- Clean layout  

🛠️ Technologies Used

HTML

CSS

JavaScript

📚 What I Learned

DOM manipulation

Event handling for both mouse & keyboard

Managing calculator state (firstNumber, secondNumber, operator, justCalculated)

Handling floating-point number issues in JavaScript

Using helper functions to keep logic clean

Creating error states (DIV0)

Improving user experience with animations

Debugging using the console

Basic responsive layout techniques