function copyCode() {
    var code = document.getElementById("code-block").innerText;
    var tempInput = document.createElement("textarea");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Code copied to clipboard!");
}