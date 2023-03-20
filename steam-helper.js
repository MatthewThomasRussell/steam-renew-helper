// Accept checkbox, must be checked to redeem a steam key
const acceptBox = document.getElementById('accept_ssa')
// the text input for the steam key (should be prefilled)
const productBox = document.getElementById('product_key')
// Button to redeem the key
const submitButton = document.getElementById('register_btn')
// The Key from the URL
const hadKey = window.location.href.indexOf("?key=") > -1


if (acceptBox) {
	acceptBox.checked = true
}

if (productBox && submitButton) {
    console.log("Key: " , productBox.value)
    if (hadKey && productBox.value) {
        submitButton.click()
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
            window.close();
        }, delayInMilliseconds);
    }
}


