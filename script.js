const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const contactBtn = document.getElementById("contact-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

contactBtn.addEventListener("click", () => {
    alert("Email: esempio@email.com");
});