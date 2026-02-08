const angel = document.getElementById("angel");
const poetry = document.getElementById("poetry-screen");

angel.addEventListener("click", () => {
    angel.style.opacity = "0.15";   // angel remains, but recedes
    poetry.style.opacity = "1";
    poetry.style.pointerEvents = "auto";
});
