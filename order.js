function culculatePrice() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectElement = document.getElementById("drink");
    const selectedDrink = selectElement.value;
    let Price = 0;
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            updatePrice();
        });
    });
    function updatePrice() {
        let selectedSize = "";
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedSize = checkbox.value;
            }
        });
        if (selectedSize !== "") {
            if (selectedDrink == "bubble-milktea") {
                if (selectedSize == "small") {
                    Price = 20;
                } else if (selectedSize == "medium") {
                    Price = 25;
                } else if (selectedSize == "large") {
                    Price = 30;
                }
            } else if (selectedDrink == "iced-latte") {
                if (selectedSize == "small") {
                    Price = 20;
                } else if (selectedSize == "medium") {
                    Price = 25;
                } else if (selectedSize == "large") {
                    Price = 30;
                }
            }
        } else {
            Price = 0;
        }
        const priceElement = document.getElementById("price");
        priceElement.textContent = Price.toFixed(2);
    }
    updatePrice(); 
    if (selectedDrink === "") {
        alert("Please select a drink");
        checkboxes.forEach(function (checkbox) {
          checkbox.checked = false;
        });
      }
    }
function validateForm(){
    const name = document.getElementById("name").value;
    const drink = document.getElementById("drink").value;
    const sizeInputs = document.querySelectorAll('input[name^="size-option"]:checked');
    const iceInputs = document.querySelectorAll('input[name^="ice-option"]:checked');
    const sweetnessInputs = document.querySelectorAll('input[name^="sweetness-option"]:checked');

    const sizes = Array.from(sizeInputs).map(input => input.value);
    const ices = Array.from(iceInputs).map(input => input.value);
    const sweetnesses = Array.from(sweetnessInputs).map(input => input.value);
    if (name.trim()==""){
        alert("Please enter your name.")
        return false;
    }
    if (drink=="please select"){
        alert("Please select a drink first.")
        return false;
    }
    return true;
}
function placeOrder(event){
    event.preventDefault();
    flag=validateForm();
    if (flag==true){
        const name = document.getElementById("name").value;
        const drink = document.getElementById("drink").value;
        const sizeInputs = document.querySelectorAll('input[name^="size-option"]:checked');
        const iceInputs = document.querySelectorAll('input[name^="ice-option"]:checked');
        const sweetnessInputs = document.querySelectorAll('input[name^="sweetness-option"]:checked');

        const sizes = Array.from(sizeInputs).map(input => input.value);
        const ices = Array.from(iceInputs).map(input => input.value);
        const sweetnesses = Array.from(sweetnessInputs).map(input => input.value);
        const orderData = [name, drink, sizes, ices, sweetnesses];
        const orderDataString = JSON.stringify(orderData);
        localStorage.setItem("orders", orderDataString);
        if (drink=="third-drink"){
            alert("Sorry, third drink is unavailable now!");
        }else{
            alert("Order placed successfully! Thank you for your order.");
        }
        
    }
}
