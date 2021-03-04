//ADD ELEMENTS
const content = "Developer";
var text = document.querySelector('.text');
let index = 0;

//ADD FUNCTIONS
function typing_text_effect() {
    text.textContent += content[index++];
    if(index >= content.length) {
        clearInterval(interval);
    }
}

//ADD EVENT LISTENERS
var interval = setInterval(typing_text_effect,250);