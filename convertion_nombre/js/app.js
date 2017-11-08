function num2letter(number){
  if(isNaN(number) || number < 0 || 999 < number){
    return 'Rentrez un nombre chiffé SVP!!!'
  }


var units2letter = ['','un','deux','trois','quatre','cinque','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
var ten2letter = ['','dix','vingt','trente','quarante','cinquante','soixante','septante','quatrevingt','nonante','cent'];

var units = number % 10,
    tens = (number % 100 - units)/10,
    hundreds = (number %1000 - number % 100)/100;

var unitsOut, tensOut, hundredsOut;

if(number === 0){
  return 'zéro'
}else{

  unitsOut =(units === 1 && tens > 0 ? 'et-' : '')+
  units2letter[units];
  if(tens === 1 && units > 0){
    tensOut = units2letter[10 + units];
    unitsOut = '';
  }else {
    tensOut = ten2letter[tens];
  }

  tensOut += (units === 0 && tens === 8 ? 's' : '');

  hundredsOut = (hundreds > 1 ? units2letter[hundreds] + '-' : '')+
  (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

  return hundredsOut +(hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '')+ unitsOut;
  }

}

var userEntry;

while (userEntry = prompt('Indiquez le nombre à convertir entre (0 et 999) :')) {
  alert(num2letter(parseInt(userEntry, 10)));

}
