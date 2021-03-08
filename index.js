//ADD ELEMENTS
const content = "Developer";
const text = document.querySelector('.text');
const navigators = document.querySelectorAll('.navigator');
const saElementList = document.querySelectorAll('.sa');
let saTriggerMargin;

var element_to_scroll;
let index = 0;

//ADD FUNCTIONS
function typing_text_effect() {
    text.textContent += content[index++];
    if(index >= content.length) {
        clearInterval(interval);
    }
}

function scroll_navigation() {
    if(this.classList.contains("to_front")) {
        element_to_scroll = document.querySelector('.front');
        scroll_to(element_to_scroll);
    } else if(this.classList.contains("to_about")) {
        element_to_scroll = document.querySelector('.about');
        scroll_to(element_to_scroll);
    } else if(this.classList.contains("to_skills")) {
        element_to_scroll = document.querySelector('.skills');
        scroll_to(element_to_scroll);
    } else if(this.classList.contains("to_projects")) {
        element_to_scroll = document.querySelector('.projects');
        scroll_to(element_to_scroll);
    } else {
        element_to_scroll = document.querySelector('.contacts');
        scroll_to(element_to_scroll);
    }
}

function scroll_to(element_to_scroll) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element_to_scroll.offsetTop - parseInt(getComputedStyle(element_to_scroll).marginTop)
    });
}

function saFunc() {
    for(const element of saElementList) {
        saTriggerMargin = element.offsetHeight / 3;
        if(!element.classList.contains('show')) {
            if(window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                element.classList.add('show');
            }
        }
    }
}

//ADD EVENT LISTENERS
var interval = setInterval(typing_text_effect,250);
navigators.forEach(navigator => navigator.addEventListener('click', scroll_navigation));

window.addEventListener('scroll', saFunc);