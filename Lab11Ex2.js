var text = "  ";

function gen() {

var noun = ["man", "dog", "cat", "bird", "cow"];
var adjactive = ["fancy", "little", "huge", "small", "scary"];
var num1 = Math.floor(Math.random() * 5);
var num2 = Math.floor(Math.random() * 5);
text = text+" What a "+adjactive[num1]+" "+noun[num2]+"! <br>";

document.getElementById("para").innerHTML = text;

}
