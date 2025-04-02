let count = 0;
const countElement = document.getElementById("count");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

decreaseButton.addEventListener("click", () => {
    count--;
    updateCount();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
});
function updateCount() {
    countElement.textContent = count;
    countElement.style.color = count > 0 ? "green" : count < 0 ? "red" : "white";
}

increaseButton.addEventListener("click", () => {
    count++;
    updateCount();
});

