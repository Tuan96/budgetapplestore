function submitForm(event) {
    var str = "Homepage";
    var homepage = str.link("../index.html")
    document.getElementById("result").innerHTML = "Your message has been sent. Thank you for contacting us. " + homepage;
    
    event.preventDefault();
}