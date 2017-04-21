console.log("Are we rolling?");

var textAreaInput = document.getElementById("text-area");

var createButton = document.getElementById("button");

var newDivOutput = document.getElementById("new-textArea");

var wrapper = document.getElementById("wrapper");
var deleteButt;
var divCounter = 0;
var newPtagID = 0;
var newDeleteButtonID = 0;



function someStuff (event) {
//    console.log(event.currentTarget, "current target");
//    console.log(event.target, "target");
//    console.log("makesomething", makeSomething);
    var makeSomething = textAreaInput.value;

    newDivOutput.innerHTML +=
        `<div id="card${divCounter}">
            <p id="ptag${newPtagID}">${makeSomething}</p>
            <button id="delete${newDeleteButtonID}">Delete</button>
        </div>`;

    let deleteTheDelete = document.getElementById("delete" + newDeleteButtonID);
    console.log("delete test", deleteTheDelete);
    deleteTheDelete.addEventListener("click", function(event){
        var buttonClicked = event.target.parentNode;
        var another = buttonClicked.parentNode;
        another.removeChild(buttonClicked);
        console.log("button ID", buttonClicked);
    });

        divCounter++;
        newPtagID++;
        newDeleteButtonID++;
}


//function testing (event) {
//    var buttonClicked = event.target;
//    console.log("button ID", buttonClicked);
//}

//        newDivOutput.removeChild(textToDelete);


createButton.addEventListener("click", someStuff);





