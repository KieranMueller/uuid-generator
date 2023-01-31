import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let btn = document.querySelector("#btn")
let text = document.querySelector(".text")

btn.addEventListener("click", function() {
    text.textContent = (uuidv4())
})