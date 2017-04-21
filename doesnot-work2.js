console.log("round2");

var wrapper = document.getElementById("wrapper");
var textArea = document.getElementById("text-area");
var create = document.getElementById("button");
//var deleteB = document.createElement("button");
//deleteB.innerHTML = "Delete";
//var deleteButton = document.getElementsByClassName("delete");
var outputDiv = document.getElementById("new-textArea");
var cardDiv = document.createElement("div");
var cards;
function createElements (event) {
    var textAreaValue = textArea.value;

    cards +=  `<div class="div-poop">
                <p>${textAreaValue}</p>
                <button class="deleteButton">Delete</button>
                </div>`;

    cardDiv.innerHTML = cards;
    outputDiv.appendChild(cardDiv);
    //delete event listener

//    for (var i = 0; i < deleteButton.length; i++) {
//        deleteButton.item(i).addEventListener("click", removeElements);
//    }
}
//newDivOutput.removeChild(textToDelete);



function removeElements (event) {
    createElements();
    var divItems = document.getElementsByClassName("deleteButton");
// if (event.target.className === "deleteButton") {
//     console.log("something");
     for (var i = 0; i < divItems.length; i++) {
        divItems.item(i).addEventListener("click", function(event){            outputDiv.removeChild(cardDiv);
        });



 }

}

create.addEventListener("click", removeElements);


//divItems.addEventListener("click", removeElements);
//deleteButton.addEventListener("click", removeElements);
