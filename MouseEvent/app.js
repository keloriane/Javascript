/*var block = document.getElementsByClassName('hoverMe');
console.log(block);


for (var i = 0; i <block.length; i++) {
	block[i].addEventListener("mouseover", function(){
	this.style.visibility="hidden";
	this.style.transition="0.5s"

});
}


var button = document.querySelector('.reset');
console.log(button)

button.addEventListener("click",function(){
	for (var i = 0; i <block.length; i++) {
	block[i].style.visibility="visible";
	block[i].style.transition="0.5s"
}

});

*/
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.querySelector("body").innerHTML = coords;
}
 