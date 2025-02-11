let input = document.getElementById("inputBox")
console.log(input);
let buttons = document.querySelectorAll("button")
console.log(buttons);
let string = "";
let arr = Array.from(buttons);
console.log(arr);

function adjustFontSize() {
    const maxLength = 20; // Max number of characters before the font size starts shrinking
    const minFontSize = 16; // Minimum font size
    const maxFontSize = 36; // Maximum font size

    // Calculate the font size based on the input length
    let fontSize = maxFontSize - (string.length - maxLength);
    if (fontSize < minFontSize) fontSize = minFontSize;  // Ensure font size doesn't go below the minimum size

    input.style.fontSize = fontSize + 'px';
}
 arr.forEach(buttons => {
buttons.addEventListener("click", (e) =>{
e.preventDefault()
if(e.target.innerHTML == "="){
    if(string === ""){
        string = "0"
    }
    else {
// Check for invalid operator placement or multiple operators
        if (/^[\+\-\*\/\.\%]/.test(string) || /[\+\-\*\/\.\%]$/.test(string) || /[\+\-\*\/\.\%]{2,}/.test(string)) {
            string = "Error"; // Display error if invalid operator is detected
        } else {
            try {
                string = eval(string); // Attempt to evaluate the expression
            } catch (error) {
                string = "Error"; // If eval throws an error, display "Error"
            }
        }
    input.value = string;
    adjustFontSize()
}
    }
        else if(e.target.innerHTML == "AC"){
            string = ""
            input.value = string;
            adjustFontSize()
        }
// Handle "DEL" button (Delete last character)
        else if (e.target.innerHTML == "DEL") {
// If result is displayed as a number or "Error", treat it as a string and allow deleting
            if (string === "Error" || !isNaN(string)) {
                string = string.toString().slice(0, -1);           
// If the string is empty after deletion, reset value  to ""
                if (string === "") {
                    input.value = "";
                }
// Otherwise, remove the last character of the current input
            } else {
        string = string.substring(0, string.length - 1); // Delete the last character
    }
    input.value = string;
    adjustFontSize()
    }
// Handle all other buttons (Numbers and Operators)
    else{
            string += e.target.innerHTML;
            input.value = string;
            adjustFontSize()
        }
    }
    )
 })


 // /^[\+\-\*\/\.\%]/
//  })checks if the expression starts with an operator.
// /[\+\-\*\/\.\%]$/
//  checks if the expression ends with an operator.
// /[\+\-\*\/\.\%]{2,}/ 
// checks if there are two or more consecutive operators.