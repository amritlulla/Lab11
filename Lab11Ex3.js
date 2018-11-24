function myFunction() {
    var text = "";
    var i;
    var x = document.getElementById("myText").value;
    for (i = 0; i <= x; i++) {
    text +=  i + "<br>";
}

document.getElementById("demo").innerHTML = text;

}
