// All elements from html
const prevScreen = document.querySelector(".previous");
const currentScreen = document.querySelector(".current");

const allClearButton = document.querySelector(".all-clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");

let currentOperand = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        updateScreen(button.textContent);
        console.log(currentOperand);
    });
});

function updateScreen(number) {
    if (currentOperand === "0" && number === "0") return;

    if (currentOperand === "0" && number !== "0" && number !== ".") {
        currentOperand = number;
    } else {
        currentOperand += number;
    }

    currentScreen.textContent = currentOperand;
}
