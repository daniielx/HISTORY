
let valueArr = [];

function openTest() {
    const testId = document.getElementById("testId").value;
    let jsonArray = xmlHttpRequest("GET","http://localhost:8080/user/test/" + testId, null)
    previewQuestion(jsonArray);
}

function previewQuestion(jsonArray) {
    let test = document.createElement("div");
    jsonArray.forEach(function(item, index) {
        let div = document.createElement("div");
        div.id = item.id;
        let key = document.createElement("div");
        key.innerHTML = "Question " + (++index) + ": " + item.key;
        key.classList.add("inputKey");
        let evaluateTrue = document.createElement("input");
        evaluateTrue.type = "radio";
        evaluateTrue.id = "T" + item.id;
        evaluateTrue.value = item.id
        evaluateTrue.name = "E" + item.id;
        evaluateTrue.addEventListener('click', function() {
            addToSubmit(item.id);
        });
        let evaluateTrueLabel= document.createElement("label");
        evaluateTrueLabel.for = evaluateTrue.id;
        evaluateTrueLabel.innerHTML = "evaluate";
        let evaluateFalse = document.createElement("input");
        evaluateFalse.type = "radio";
        evaluateFalse.id= "F" + item.id;
        evaluateFalse.value = item.id;
        evaluateFalse.name = "E" + item.id;
        evaluateFalse.checked = true;
        evaluateFalse.addEventListener('click', function() {
            removeFromSubmit(item.id);
        });
        let evaluateFalseLabel= document.createElement("label");
        evaluateFalseLabel.for = evaluateFalse.id;
        evaluateFalseLabel.innerHTML = "ignore";
        let textarea = document.createElement("textarea");
        textarea.classList.add("inputValue");
        textarea.rows = 3;
        textarea.cols = 50;
        textarea.id = "value" + item.id;
        let submit = document.createElement("button");
        submit.id = "submitButton"
        submit.innerHTML = "Submit";
        submit.type = "button";
        submit.addEventListener('click', function() {
            submitValue();
        });
        div.appendChild(key);
        div.appendChild(textarea);
        div.appendChild(evaluateTrue);
        div.appendChild(evaluateTrueLabel);
        div.appendChild(evaluateFalse);
        div.appendChild(evaluateFalseLabel);
        test.appendChild(div);
        test.appendChild(submit)
    });
    let testForm = document.getElementById("testForm");
    testForm.appendChild(test);
}

function removeFromSubmit(id) {
    if(valueArr.length !== 0) {
        valueArr = valueArr.filter(item => item !== id);
    }
    console.log(valueArr);
}

function  addToSubmit(id) {
    if(valueArr.find(item => item === id)) {}
    else {
        valueArr.push(id);
    }
    console.log(valueArr);
}

function submitValue() {
    if(valueArr.length === 0) {
        return;
    }
    let requestBody = [];
    valueArr.forEach(function(item) {
        let answer = {};
        answer.id = item;
        answer.value = document.getElementById("value" + item).value;
        requestBody.push(answer);
    })
    let response = xmlHttpRequest("POST", "http://localhost:8080/user/submit/5f469784d5d6de0e7d5c941e", requestBody);
    console.log(response);
    const userPreview = document.getElementById("userPreview");
    while(userPreview.firstChild) {
        userPreview.removeChild(userPreview.firstChild);
    }
    let epilogue = document.createElement("h3");
    epilogue.innerHTML = "Thank you for taking the test."
    userPreview.appendChild(epilogue);
}