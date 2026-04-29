const display = document.querySelector(".calculator-display");
const keypad = document.querySelector(".calculator-keypad");

const buttons = [
{ label: "7", type: "number" },
{ label: "8", type: "number" },
{ label: "9", type: "number" },
{ label: "/", type: "operator" },
{ label: "4", type: "number" },
{ label: "5", type: "number" },
{ label: "6", type: "number" },
{ label: "*", type: "operator" },
{ label: "1", type: "number" },
{ label: "2", type: "number" },
{ label: "3", type: "number" },
{ label: "-", type: "operator" },
{ label: "0", type: "number" },
{ label: "C", type: "clear" },
{ label: "=", type: "equals" },
{ label: "+", type: "operator" }
];

buttons.forEach(function (buttonConfig){
    const button = document.createElement("button");

    button.textContent = buttonConfig.label;
    button.dataset.type = buttonConfig.type;
    button.dataset.value = buttonConfig.label;
    button.classList.add("calculator-button");

    if (buttonConfig.type === "operator"){
        button.classList.add("operator");
    }
    keypad.append(button);
})

