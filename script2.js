let buttons = document.querySelectorAll("button");
let form = document.querySelector("form");
let products = document.querySelectorAll(".product");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        form.style.display = "block";

        products.forEach(function(product) {
            product.style.display = "none";
        });
    });
});
