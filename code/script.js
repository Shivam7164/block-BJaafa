let keyName = document.querySelector("h2")
let shortcutName = document.querySelector("p")
let button = document.querySelector("button")

function randomNumber(data){
    return Math.floor( Math.random() * data)
}
function handleClick(){
    let randomIndex = randomNumber(shortArray.length)
    keyName.innerText = shortArray[randomIndex].shortkut;
    shortcutName.innerText = shortArray[randomIndex].description;
}
button.addEventListener("click" , handleClick)
handleClick()
