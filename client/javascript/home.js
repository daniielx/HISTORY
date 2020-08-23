function openForm() {
    document.getElementById("adminForm").style.display = "block";
}

function cancelForm() {
    document.getElementById("adminForm").style.display = "none";
}

function setKey() {
    let inputText = document.getElementById("answerKeyAdmin").value;
    let div = document.createElement("div");
    div.id = "valueAreaMarkup";
    let valueArea = document.getElementById("valueArea");
    valueArea.appendChild(div);
    console.log(inputText);
    let valueAreaMarkup = document.getElementById("valueAreaMarkup");
    let inputArr = inputText.trim().split(" ");
    inputArr.forEach(function(item) {
        let span = document.createElement("span");
        span.classList.add("inputKey");
        span.innerHTML = item;
        valueAreaMarkup.appendChild(span);
    });
    let valueAreaOriginal = document.getElementById("valueAreaOriginal");
    let backupElementAnswer = document.createElement("div");
    backupElementAnswer.id = "backupElementAnswer";
    while(valueAreaOriginal.firstChild) {
        backupElementAnswer.appendChild(valueAreaOriginal.firstChild);
    }
    while(valueAreaOriginal.firstChild) {
        valueAreaOriginal.removeChild(valueAreaOriginal.firstChild);
    }
    valueArea.removeChild(valueAreaOriginal);
    let editButton = document.createElement("button");
    editButton.id = "editButtonMarkup"
    editButton.innerHTML = "Edit answer";
    editButton.type = "button";
    editButton.addEventListener('click', function() {
        editAnswer(backupElementAnswer);
    });
    valueAreaMarkup.appendChild(editButton);
}


function editAnswer(backupElementAnswer) {
    console.log("editAnswer called");
    let valueArea = document.getElementById("valueArea");
    let valueAreaMarkup = document.getElementById("valueAreaMarkup");
    while(valueAreaMarkup.firstChild) {
        valueAreaMarkup.removeChild(valueAreaMarkup.firstChild);
    }
    valueArea.removeChild(valueAreaMarkup);
    backupElementAnswer.id = "valueAreaOriginal";
    valueArea.appendChild(backupElementAnswer);
}