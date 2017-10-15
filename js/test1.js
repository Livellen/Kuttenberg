
var fotbalisti = ["Messi", "Ronaldo", "Sanchez", "Cech", "Koscielny"];

function loadFoot(){
	document.getElementById("seznam").innerHTML = fotbalisti;
}

function mojefce(){
	var fotbalista = prompt("Write you favorite footballer please!!!");
	fotbalisti[fotbalisti.length] = fotbalista;
	document.getElementById("seznam").innerHTML = fotbalisti;
}


var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
   document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
  var fruit = prompt("What is your favorite fruit? ");
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}
