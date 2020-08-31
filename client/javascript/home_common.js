function xmlHttpRequest(method, url, requestBodyJSON, callBack) {
    let jsonString = JSON.stringify(requestBodyJSON);
    const xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonString);
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let json = JSON.parse(this.responseText);
            callBack(json);
        }
    };
}