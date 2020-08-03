function submitForm(event) {
    var str = "Homepage";
    var homepage = str.link("../index.html")
    document.getElementById("result").innerHTML = "Thank you for sending us a message. Return to " + homepage;
    
    event.preventDefault();
}