let btn = document.getElementById("btn");
let btn2 = document.getElementsByClassName("button");
let btn3 = document.getElementsByTagName("button");
let btn4 = document.querySelector("button");
let btn5 = document.querySelectorAll("button");

console.log(document);

let btn = document.querySelector("button");
btn.style.backgroundColor = "white";

// Zadanie 1:
const showMessage = () => {
    console.log("siema");
}
btn.addEventListener('click', showMessage);

// Zadanie 2:
let text = document.querySelector("h1");

text.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = "red";
})

text.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = "white";
})

// Zadanie 3:
let li = document.querySelectorAll("li");
let btn1 = document.querySelector("button");
let textSize = 16;

btn1.addEventListener('click', () => {
    li.forEach((liItem) => {
        liItem.style.fontSize = textSize + "px";
        textSize++;
    })
})

let btn = document.querySelector("button");
let clicks = 0;
btn.addEventListener('click', () => {
    clicks++;
    console.log(clicks);
});

let text = document.querySelector("h1");

text.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = "red";
});

text.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = "white";
})

let btn = document.querySelector("button");
let listElements = document.querySelectorAll("li");
let textSize = 16;

const biggerSize = () => {
    listElements.forEach((li) => {
        li.style.fontSize = textSize + "px";
        textSize++;
    })
}

btn.addEventListener('click', biggerSize);