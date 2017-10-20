var request = new XMLHttpRequest();
request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
request.onload = function(){
	var ourData = request.responseText;
	console.log(ourData[0])
};
request.send();