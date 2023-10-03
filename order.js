function calculatePrice() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const selectElement = document.getElementById("drink");
    const selectedDrink = selectElement.value;
    let price = 0;
  
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            updatePrice();
        });
    });
  
    function updatePrice() {
        const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
  
        if (selectedRadioButton) {
            const selectedSize = selectedRadioButton.value;
  
            if (selectedDrink === "bubble-milktea" || selectedDrink === "iced-latte") {
                if (selectedSize === "small") {
                    price = 20;
                } else if (selectedSize === "medium") {
                    price = 25;
                } else if (selectedSize === "large") {
                    price = 30;
                }
            }
        } else {
            price = 0;
        }
  
        const priceElement = document.getElementById("price");
        priceElement.textContent = price.toFixed(2);
    }
  
    updatePrice();
  
    if (selectedDrink === "") {
        alert("Please select a drink");
        radioButtons.forEach(function (radioButton) {
            radioButton.checked = false;
        });
    }
}
  
function validateForm() {
    const name = document.getElementById("name").value;
    const drink = document.getElementById("drink").value;
    const sizeInput = document.querySelector('input[name="size-option"]:checked');
  
    if (name.trim() == "") {
        alert("Please enter your name.");
        return false;
    }
  
    if (drink == "please select") {
        alert("Please select a drink first.");
        return false;
    }
  
    if (!sizeInput) {
        alert("Please select a size.");
        return false;
    }
  
    return true;
}
  
function placeOrder(event) {
    event.preventDefault();
    const isValid = validateForm();
  
    if (isValid) {
        const name = document.getElementById("name").value;
        const drink = document.getElementById("drink").value;
        const sizeInput = document.querySelector('input[name="size-option"]:checked');
        const size = sizeInput.value;
  
        const orderData = [name, drink, size];
        const orderDataString = JSON.stringify(orderData);
        localStorage.setItem("order", orderDataString);
  
    if (drink === "third-drink") {
        alert("Sorry, the third drink is unavailable now!");
    } else {
        alert("Order placed successfully! Thank you for your order.");
    }
    }
}
