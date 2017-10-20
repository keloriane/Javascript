// function showCoords(event) {
//     var x = event.offsetX;
//     var y = event.offsetY;
//     var coords = "X coords: " + x + ", Y coords: " + y;
//     document.querySelector("body").innerHTML = coords;
// }

var body = document.querySelector("body")

document.addEventListener("mousemove",function(e){
	var div = document.createElement("div");
	div.innerHTML = e.clientX + " & " + e.clientY;
	body.appendChild(div);

})