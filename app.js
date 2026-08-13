const numberA = document.getElementById("numberA");
const numberB = document.getElementById("numberB");
const resultElement = document.getElementById("result");
const historyElement = document.getElementById("history");
const clearHistoryButton = document.getElementById("clearHistory");

let history = JSON.parse(localStorage.getItem("calculatorHistory")) || [];

function renderHistory() {
  historyElement.innerHTML = "";

  if (history.length === 0) {
    const item = document.createElement("li");
    item.className = "list-group-item text-muted";
    item.textContent = "Zatím žádný výpočet.";
    historyElement.appendChild(item);
    return;
  }

  history.forEach(entry => {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = entry;
    historyElement.appendChild(item);
  });
}

function saveHistory() {
  localStorage.setItem("calculatorHistory", JSON.stringify(history));
}

function calculate(operation) {
  const a = Number(numberA.value);
  const b = Number(numberB.value);

  if (numberA.value === "" || numberB.value === "") {
    resultElement.textContent = "Zadej obě čísla";
    return;
  }

  let result;

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        resultElement.textContent = "Nelze dělit nulou";
        return;
      }
      result = a / b;
      break;
  }

  resultElement.textContent = result;

  const symbol = operation === "*" ? "×" : operation === "/" ? "÷" : operation;
  const entry = `${a} ${symbol} ${b} = ${result}`;

  history.unshift(entry);
  history = history.slice(0, 10);

  saveHistory();
  renderHistory();
}

document.querySelectorAll(".operation").forEach(button => {
  button.addEventListener("click", () => calculate(button.dataset.operation));
});

clearHistoryButton.addEventListener("click", () => {
  history = [];
  saveHistory();
  renderHistory();
});

renderHistory();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .catch(error => console.error("Service worker error:", error));
  });
}
