import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let btn = document.querySelector("#btn")
let text = document.querySelector(".text")
let copyBtn = document.querySelector("#copy-btn")
let copiedList = document.querySelector("#copiedTexts")
let clearBtn = document.querySelector("#clear-btn")

clearBtn.style.display = "none"
let list = []
copyBtn.style.display = "none"

clearBtn.addEventListener("click", function() {
    list = []
    copiedList.innerHTML = ""
    clearBtn.style.display = "none"
    copyBtn.style.color = "black"
    copyBtn.textContent = "Copy UUID"
})

btn.addEventListener("click", function() {
    text.textContent = (uuidv4())
    copyBtn.style.display = "block"
    copyBtn.textContent = "Copy UUID"
    copyBtn.style.color = "black"
})

copyBtn.addEventListener("click", function() {
    clearBtn.style.display = "block"
    clearBtn.textContent = "Clear"
    navigator.clipboard.writeText(text.textContent)
    copyBtn.textContent = "Copied to Clipboard"
    copyBtn.style.color = "green"
    if(!list.includes(text.textContent)) {
        list.push(text.textContent)
        copiedList.innerHTML += `<h2>${list[list.length - 1]}</h2>`
    }
})

