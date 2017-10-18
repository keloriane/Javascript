var body = document.querySelector('body');
body.className="bg-olive";

var paragraphe = document.querySelector('#first-paragraph');
console.log(paragraphe);
paragraphe.className = "bg-aqua";


var silver = document.querySelectorAll('.bg-silver');


console.log(silver);


silver.className = 'bg-teal';

console.log(silver);




block = document.querySelectorAll('blockquote');
console.log(block);


block.forEach(function(element,index){
element.classList.remove('bg-silver')
element.classList.add('bg-white');

})
console.log(block);


var table = document.querySelector('table');

table.className=('bg-purple');


var txtContainer = document.querySelectorAll('p'); 

txtContainer.forEach(function(element,index){
	element.classList.add('shadow')
});



var pre = document.querySelector("pre");

pre.style.color="red";
pre.style.backgroundColor="#fff";
pre.style.borderTop= "3px solid red";
pre.style.borderBottom= "3px solid red";


var title = document.querySelector("h3");
title.innerHTML = "em";


var ul = document.querySelector("ul");

console.log(ul)
