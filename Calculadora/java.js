const display = document.querySelector(".calculator-display");
const keypad = document.querySelector(".calculator-keypad");

const buttons = [
   "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+" 
];

buttons.forEach(function (buttonValue){
    const button = document.createElement("button");

    button.textContent = buttonValue;
    button.classList.add("calculator-button");

    keypad.append(button);
})