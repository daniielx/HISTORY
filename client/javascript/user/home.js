function openTest() {
    const testId = document.getElementById("testId").value;
    const xhttp = new XMLHttpRequest();
    let jsonArray;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonArray = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "http://localhost:8080/test/" + testId, true);
    xhttp.send();
}