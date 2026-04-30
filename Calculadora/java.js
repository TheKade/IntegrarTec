const display = document.querySelector(".calculator-display");
const keypad = document.querySelector(".calculator-keypad");

const calculatorState = {
    currentValue : "0",
    previousValue: null,
    operator: null
};

const buttons = [
{ label: "C", type: "clear" },
  { label: "←", type: "backspace" },
  { label: "/", type: "operator" },
  { label: "*", type: "operator" },

  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "-", type: "operator" },

  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "+", type: "operator" },

  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "=", type: "equals" },

  { label: "0", type: "number" },
  { label: ".", type: "decimal" }
];

buttons.forEach(function (buttonConfig){
    const button = document.createElement("button");

    button.textContent = buttonConfig.label;
    button.dataset.type = buttonConfig.type;
    button.dataset.value = buttonConfig.label;
    button.classList.add("calculator-button");

    if (buttonConfig.label === "0" || buttonConfig.label === "←") {
    button.classList.add("span-2");
}
    if (buttonConfig.type === "operator"){
        button.classList.add("operator");
    }
    keypad.append(button);
})

function renderDisplay() {
    display.textContent = calculatorState.currentValue;
}

function handleNumber(value) {
    if (calculatorState.currentValue === "0") {
        calculatorState.currentValue = value;
        return;
    } else if (calculatorState.currentValue ==="-0") {
        calculatorState.currentValue = "-" + value;
    }else{
        calculatorState.currentValue += value; 
    }  
}

function handleOperator(operator) {

    if (calculatorState.currentValue === "0" && operator === "-"){
        calculatorState.currentValue = "-";
        return;
    }

    if (calculatorState.currentValue === "-") {
        return;
    }

    calculatorState.previousValue = calculatorState.currentValue;
    calculatorState.operator = operator;
    calculatorState.currentValue = "0";
}

function clearCalculator() {
    calculatorState.currentValue = "0";
    calculatorState.previousValue = null;
    calculatorState.operator = null;
}

function handleBackspace(){
    if(calculatorState.currentValue.length > 1){
                calculatorState.currentValue = calculatorState.currentValue.slice(0, -1);
    } else {
        calculatorState.currentValue = "0";
    }
}

function handleDecimal() {
    if (calculatorState.currentValue.includes(".")) {
        return; 
    }
    calculatorState.currentValue += ".";
}

function calculateResult() {
    if (calculatorState.previousValue === null || calculatorState.operator === null){
        return;
    }

    const previous = Number(calculatorState.previousValue);
    const current = Number(calculatorState.currentValue);
    let result = 0;

    if (calculatorState.operator === "+"){
        result = previous + current;
    }
    
    if (calculatorState.operator === "-"){
        result = previous - current;
    }

    if (calculatorState.operator === "*"){
        result = previous * current;
    }

    if (calculatorState.operator === "/") {
        if (current === 0) {
            alert("No se puede dividir por cero");
            clearCalculator();
            return;
        }
    result = previous / current;
    }

    calculatorState.currentValue = String(result);
    calculatorState.previousValue = null;
    calculatorState.operator = null;
    }

    keypad.addEventListener("click", function(event) {
    const button = event.target.closest("button");

    if(!button){
        return;
    }

    button.classList.add("active");

    const type = button.dataset.type;
    const value = button.dataset.value;

    if (type === "number") {
    handleNumber(value);
    }

    if (type === "operator") {
    handleOperator(value);
    }

    if (type === "clear") {
    clearCalculator();
    }

    if (type === "equals") {
    calculateResult();
}
if (type === "backspace") {
    handleBackspace();
}

if (type === "decimal") {
    handleDecimal();
}
    renderDisplay();
    console.log(type, value);
})

