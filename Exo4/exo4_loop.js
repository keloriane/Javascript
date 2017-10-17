
//Pair impaire

var nombre= 21;


for (var i = 0; i < nombre; i++) {
  if( i % 2 === 0){
    console.log(i + ' Est pair');
  }else{
    console.log(i + ' Est impaire');
  }
}

//Multiplication

var num = prompt('Entrez un chiffre');
num = Number(num)


for(var i = 0; i <= 10; i++){

  console.log(i + " x " + num + " = " + (i * num));

}


//Grades

var score = 50;

for (var i = 0; i < score; i++);

switch (score) {
  case i>90:
  console.log('grade A');
  break;
  case i>80:
  console.log('grade B');
  break;
  case i>70:
  console.log('grade C');
  break;
  case i>65:
  console.log('grade D');
  break;
  case i<65:
  console.log('grade F');
  break;
}

//pyramide

star=""

for (var i = 0; i < 10; i++) {
  console.log(star);
  document.write(star+"<br/>");
  star = star + " * ";
}
