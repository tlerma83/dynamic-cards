console.log("Hello");
var textArea = document.getElementById("text-area");
var createButton = document.getElementById("button");
var ouputDiv = document.getElementById("new-textArea");
var cardRemover = document.getElementById("delete");

function createCard (event) {
    var textOutput = textArea.value;
    var cardDiv = `<div class="card">
                    <p>${textOutput}</p>
    <button class="delete">Delete</button>
    </div>`

    var newCard = document.createElement("div");
    newCard.innerHTML = cardDiv;

    newCard.addEventListener("click", removeCard);
    newCard.classList.add("red");
    ouputDiv.appendChild(newCard);
}

function removeCard(event) {
//    console.log("Current target is", event.currentTarget);
//    console.log("target is", event.target);
    ouputDiv.removeChild(event.currentTarget);
}


createButton.addEventListener("click", createCard);
