$(document).ready(function() {
  $('.calculator').submit(function(event) {
    var userInput = parseInt($("input#input").val());
    alert(userInput);

    if(userInput >= 4000){
      alert("Please type less than 4000");
      location.reload();
    }
    event.preventDefault();


    var convert = function(number, place) {
      var romanNumber = ''

      if (number < 4) {
        romanNumber = romanArray[place].repeat(number)
        return romanNumber

      } else if (number === 4) {
        romanNumber = romanArray[place] + romanArray[place+1]
        return romanNumber

      } else if (number === 5) {
        romanNumber = romanArray[place+1];
        return romanNumber

      } else if (number < 9) {
        romanNumber = romanArray[place+1] + romanArray[place].repeat(number-5)
        return romanNumber

      } else {
        romanNumber = romanArray[place] + romanArray[place+2]
        return romanNumber
      }
    }

    var arabicArray = [1,5,10,50,100,500,1000]
    var romanArray = ['I','V','X','L','C','D','M']
    var arabicThousands = Math.floor(userInput/1000);
    var arabicHundreds = Math.floor((userInput-(1000*arabicThousands))/100);
    var arabicTens = Math.floor((userInput-(1000*arabicThousands + 100*arabicHundreds))/10);
    var arabicOnes = Math.floor((userInput-(1000*arabicThousands + 100*arabicHundreds + 10*arabicTens))/1);

    var romanOnes = convert(arabicOnes,0);
    var romanTens = convert(arabicTens,2);
    var romanHundreds = convert(arabicHundreds, 4);
    var romanThousands = convert(arabicThousands, 6);

    var result = romanThousands + romanHundreds + romanTens + romanOnes;
    alert(result);


  })


})
