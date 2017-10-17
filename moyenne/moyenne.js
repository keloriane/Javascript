var somme = 0;
var nombre = 5;

for (var i = 0; i < nombre; i++) {
  var note = prompt('Entrez une note');
  note = Number(note)
  console.log(somme);
  var test = somme + note;
  console.log(test );
  somme = somme + note;
  note = 0;
  console.log(somme)

}

var moyenne = somme/nombre;
console.log(moyenne);
