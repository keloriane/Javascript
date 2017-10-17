var lang = "eng"
var message = "Vous parlez " + lang;

var note = [6, 4, 5, 16, 18];



function somme(arr) {
  var moyenne = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) / arr.length;

  if (moyenne >= 15) {

      return "très bien !";
    } else if (moyenne >= 10) {

      return "Bien !";
    }
    else{
        return "Convocation";
    }

  }




  console.log(somme(note))
