let labels = document.querySelectorAll("label");

labels.forEach((label) => {
    let labelText = label.innerText.trim();
    label.innerHTML = "";
    [...labelText].forEach((letter, i) => {
        let span = document.createElement("span");
        span.style.transitionDelay = `${i * 30}ms`;
        span.textContent = letter;
        label.appendChild(span);
    });
});

// Page switching functionality
document.querySelector(".loginLink").addEventListener("click", function() {
    document.querySelector(".loginout-page").style.display = "none";
    document.querySelector(".login-page").style.display = "block";
});

document.querySelector(".logoutLink").addEventListener("click", function() {
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".loginout-page").style.display = "block";
});

// Open and close form
let openBtn = document.querySelector("#openBtn");
let closeBtn = document.querySelector(".close-form");
let containerForm = document.querySelector(".container-form");

openBtn.addEventListener("click", () => {
    containerForm.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    containerForm.classList.remove("show");
});
