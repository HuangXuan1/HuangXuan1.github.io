var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

var css = document.querySelector("h3");
var color1 = document.getElementById("pict1");
var color2 = document.getElementById("pict2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button =document.createElement("button");
	button.appendChild(document.createTextNode("Done!"));
	li.appendChild(button);
	button.onclick=underlineParent;
// CREATE AN ELEMENT
	var button =document.createElement("button"); 
// APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("Delete!"));
// APPEND BUTTON TO LIST
	li.appendChild(button);

	button.onclick=removeParent;
//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
	
}

// ul.onclick = function(event){
// 	var target = event.target;
// 	target.classList.toggle("done");
// }

function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

