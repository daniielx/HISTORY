function xmlHttpRequest(method, url, requestBodyJSON) {
    let jsonString = JSON.stringify(requestBodyJSON);
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            return JSON.parse(this.responseText);
        }
    };
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonString);
}