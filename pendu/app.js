var mot = ['B','O','N','J','O','U','R'];
var lettreDevinee=['','','','','','',''];
var compteurVictoire = 0;

function guessLetter() {
	var message=prompt("Entrer un lettre à deviner");//return ce qu'envoite l'utilisateur	
	message = message.toUpperCase(); // Mettre la saisie en majuscule !
	console.log(message);
	if (message.length != 1) { // On vérifie que l'utilisateur a saisi UN SEUL caractère
		console.log("Trop de caractères, vous avez écrit " + message.length + " caractères...");
	}
	else {

		if ( mot.indexOf(message) == -1 ) {
			console.log("Introuvable !");
		}
		else {
			console.log("Trouvé !");

			for (i=0;i<mot.length;i++) {
				if (message == mot[i]) {
					compteurVictoire++;
					console.log("compteur " + compteurVictoire);
					console.log("yeah ! J'ai trouvé ta lettre à l'index " + i);
					lettreDevinee.splice(i,1,message);
					console.log(lettreDevinee);

				}
			}
		}

	}

	if (compteurVictoire ==  mot.length) {
		console.log("win !");
	}
	else  {
		guessLetter();
	}
}

guessLetter();