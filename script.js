const welcomeBtn = document.getElementById("welcomeBtn");

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function() {

    welcomeMessage.textContent = "Welcome to BBQ House! Enjoy our delicious BBQ!";

});

function updateClock() {

    const currentTime = new Date();

    document.getElementById("clock").textContent =
        currentTime.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

const searchProduct = document.getElementById("searchProduct");

const products = document.querySelectorAll(".product-card");

searchProduct.addEventListener("input", function() {

    const searchValue = searchProduct.value.toLowerCase();

    products.forEach(function(product) {

        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {

            product.style.display = "inline-block";

        } else {

            product.style.display = "none";

        }

    });

});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        document.getElementById("formMessage").textContent =
            "Please complete all fields.";

    } else {

        document.getElementById("formMessage").textContent =
            "Thank you! Your message has been submitted.";

        contactForm.reset();

    }

});