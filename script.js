const display = document.getElementById("display");
const keypad = document.querySelector(".calculator-keypad");
const operationDisplay = document.getElementById("current-operation");
const lastCalcText = document.getElementById("last-calc-text");

if (!display || !keypad || !operationDisplay || !lastCalcText) {
    throw new Error("CRITICAL: No se encontraron elementos necesarios en el DOM.");
}

// 2. Estado de la Aplicación
const calculatorState = {
    expression: "0",
    isEvaluated: false
};

// 3. Arreglo de Botones 
const buttons = [
    { label: "C", type: "clear" },
    { label: "(", type: "parenthesis" },
    { label: ")", type: "parenthesis" },
    { label: "←", type: "backspace"},
    { label: "/", type: "operator" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "*", type: "operator" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator" },
    { label: "0", type: "number" },
    { label: ".", type: "decimal" },
    { label: "+/-", type: "toggle" },
    { label: "=", type: "equals" }
];

// 4. Inyectar botones en el keypad
buttons.forEach(btn => {
    const button = document.createElement("button");
    button.textContent = btn.label;
    button.dataset.type = btn.type;
    button.dataset.value = btn.label;
    button.classList.add("calculator-button");
    if (btn.type === "operator"){
        button.classList.add("operator");
    }      
    if (btn.label === "=") {
            button.classList.add("span-2");
    }
    keypad.append(button);
});

// 5. Lógica

function addToExpression(value) {
    if (calculatorState.isEvaluated) {
        // Si ya se evaluó, un nuevo número limpia la pantalla, un operador continúa la cuenta[cite: 1]
        calculatorState.expression = isNaN(value) && value !== "(" ? calculatorState.expression + value : value;
        calculatorState.isEvaluated = false;
    } else {
        if (calculatorState.expression === "0" && value !== ".") {
            calculatorState.expression = value;
        } else {
            calculatorState.expression += value;
        }
    }
}

function toggleSign() {
    if (calculatorState.expression === "0" || calculatorState.isEvaluated) return;
    const lastNumberRegex = /(-?\d+\.?\d*)$/;
    const match = calculatorState.expression.match(lastNumberRegex);
    if (match) {
        const lastNumber = match[0];
        const restOfExpression = calculatorState.expression.slice(0, -lastNumber.length);
        const toggledNumber = lastNumber.startsWith("-") ? lastNumber.slice(1) : `-${lastNumber}`;
        calculatorState.expression = restOfExpression + toggledNumber;
    }
}

function calculateResult() {
    try {
        // Uso de Function para evaluación de strings matemáticos complejos
        const result = new Function(`return (${calculatorState.expression})`)();
        
        if (!isFinite(result)) {
            alert("Error: No se puede dividir por cero");
            resetCalculator();
            return;
        }

        lastCalcText.textContent = `${calculatorState.expression} = ${result}`;
        operationDisplay.textContent = `${calculatorState.expression} =`;
        calculatorState.expression = String(result);
        calculatorState.isEvaluated = true;
    } catch (e) {
        alert("Error en la expresión matemática");
        resetCalculator();
    }
}

function resetCalculator() {
    calculatorState.expression = "0";
    calculatorState.isEvaluated = false;
}

function renderDisplay() {
    display.textContent = calculatorState.expression;
}

function backspaceLogic(){
    if (calculatorState.expression === "0" || calculatorState.isEvaluated) {
        resetCalculator();
        return;
    }

    // Eliminamos el último carácter
    if (calculatorState.expression.length > 1) {
        calculatorState.expression = calculatorState.expression.slice(0, -1);
    } else {
        // Si solo quedaba un carácter, volvemos al estado inicial "0"
        calculatorState.expression = "0";
    }
}
// 6. Coordinador Central con Validación
    const VALID_TYPES = ["number", "operator", "equals", "clear", "decimal", "parenthesis", "toggle", "backspace"];

keypad.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    const { type, value } = button.dataset;

    // Validación defensiva 
    if (!VALID_TYPES.includes(type)) return;

    switch (type) {
        case "number":
        case "operator":
        case "parenthesis":
        case "decimal":
            addToExpression(value);
            break;
        case "toggle":
            toggleSign();
            break;
        case "clear":
            resetCalculator();
            break;
        case "equals":
            calculateResult();
            break;
        case "backspace":
            backspaceLogic();
            break;
    }
    renderDisplay(); 
});
