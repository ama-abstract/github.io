const angel = document.getElementById("angel");
const poetry = document.getElementById("poetry-screen");

angel.addEventListener("click", () => {
    angel.style.animation = "none";
    angel.style.opacity = "0.15";
    poetry.style.opacity = "1";
    poetry.style.pointerEvents = "auto";
});

