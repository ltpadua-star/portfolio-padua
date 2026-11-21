
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
}


const darkModeButton = document.querySelector("#darkModeButton");
const body = document.body;

body.classList.add ('light-mode')

darkModeButton.addEventListener("click", () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        darkModeButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        darkModeButton.textContent = 'Switch to Dark Mode';
    }
});

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");
        const messageError = document.querySelector("#messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (name.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Please enter a message.";
        }
    });
}

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const today = new Date().toLocaleDateString();

settings.lastVisit = today;
saveSettings(settings);

const lastVisitMessage = document.querySelector("#lastVisitMessage");

if (settings.lastVisit) {
  lastVisitMessage.textContent =
    `Your last visit was on ${settings.lastVisit}.`;
}