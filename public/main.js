const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
let barToggle = document.getElementById("bars");

btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});

barToggle.addEventListener("click", () => {
    barToggle.classList.toggle("change");
});

function hideContainer(x) {
    menu.classList.toggle("hidden");
    barToggle.classList.toggle("change");
};

