function openForm() {
    document.getElementById("adminForm").style.display = "block";
}

function cancelForm() {
    document.getElementById("adminForm").style.display = "none";
}

let answerArr = [];

function setKey() {
    let inputText = document.getElementById("answerKeyAdmin").value;
    let div = document.createElement("div");
    div.id = "valueAreaMarkup";
    let valueArea = document.getElementById("valueArea");
    valueArea.appendChild(div);
    let valueAreaMarkup = document.getElementById("valueAreaMarkup");

    let inputArr = inputText.trim().split(" ");

    answerArr = [];

    inputArr.forEach(function (item,id) {
       let obj = {
           key: id,
           value: item,
           type: 0,
       };
       answerArr.push(obj);
    });

    answerArr.forEach(function(item) {
        let span = document.createElement("span");
        span.classList.add("inputKeyT0");
        span.id = item.key;
        span.innerHTML = item.value;
        span.addEventListener('click', function() {
            markUp(item.key);
        });
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

function markUp(elementId) {
    if(answerArr[elementId].type !== 1) {
        answerArr[elementId].type = 1;
        let element = document.getElementById(elementId);
        element.classList.remove("inputKeyT0");
        element.classList.add("inputKeyT1");
    } else {
        answerArr[elementId].type = 0;
        let element = document.getElementById(elementId);
        element.classList.remove("inputKeyT1");
        element.classList.add("inputKeyT0");
    }
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

function submit() {
    const questionAdmin = document.getElementById("questionAdmin").value;
    let answerString = "";
    if(answerArr.length < 1) {
        alert("Note: markup the answer keys");
        return;
    }
    answerArr.forEach(function (item){
        if(item.type === 0) {
            answerString = answerString + " " +item.value;
        } else {
            answerString = answerString + " $" +item.value;
        }
    });

    let requestBodyJSON = {
        key : questionAdmin,
        value: answerString
    }
    let response = xmlHttpRequest("POST", "http://localhost:8080/admin/test/", requestBodyJSON);
    console.log(response);
}

