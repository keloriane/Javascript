/*var message = prompt();
var essais = 0;
var min = 20;
var max = 80;
var final = true;

var random = function (min, max) {
return (Math.floor((max-min)*Math.random())+min);
}

message= Number(message)

console.log(random(20, 80));

while (final) {
}if(message < random){
 console.log('plus haut');
}else if (message > random) {
  console.log('plus bas');
}else (final == false){
  console.log('bravo');
  break;
}
*/


var message;
var essais =0;
var min=20;
var max=80;
var input = prompt("Entrez un nombre entre 20 et 80");
var random = Math.floor(Math.random()*-61)+80
var finale = true




  while(finale){
    if(isNaN(input)){
      input=prompt("Entrez un nombre");
    }else if (input<20 || input>80){
      input=prompt("c'est faux entrez un nombre entre 20 et 80")
    }else if (input>random){
      essais = essais + 1;
      input=prompt("le prix est plus bas");
    }else if(input<random){
      essais= essais + 1;
      input=prompt("le prix est plus haut :p ");
    }else{
      essais = essais + 1;
      finale = false;
    }
  }

console.log("le prix était de " + random + "€")
console.log("tu as essayé " + essais + " fois")
