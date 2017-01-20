$(document).ready(function() {
  $('.calculator').submit(function(event) {

/////////////FRONT END LOGIC
    var userInput = parseInt($("input#input").val());
    alert(userInput);

    if(userInput >= 4000){
      alert("Please type less than 4000");
      location.reload();
    }


    alert(arabicToRoman(placeholders(userInput)));
    event.preventDefault();
})/////SUBMIT ENDS




/////////////BACK END LOGIC FROM HERE

///////CONSTANTS
  var romanArray = ['I','V','X','L','C','D','M']


///////PLACEHOLDER FUNCTION
  var placeholders = function(userInput){
    var arabicThousands = Math.floor(userInput/1000);
    var arabicHundreds = Math.floor((userInput-(1000*arabicThousands))/100);
    var arabicTens = Math.floor((userInput-(1000*arabicThousands + 100*arabicHundreds))/10);
    var arabicOnes = Math.floor((userInput-(1000*arabicThousands + 100*arabicHundreds + 10*arabicTens))/1);
    var arabicPlaceholders = [arabicThousands, arabicHundreds, arabicTens, arabicOnes];
    return arabicPlaceholders;
  }


////////ARABIC TO ROMAN ASSEMBLY FUNCTION
  var arabicToRoman = function(places){
    var romanOnes = convert(places[3],0);
    var romanTens = convert(places[2],2);
    var romanHundreds = convert(places[1], 4);
    var romanThousands = convert(places[0], 6);

    return result = romanThousands + romanHundreds + romanTens + romanOnes;
  }


/////CONVERT FUNCTION
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
/////////END OF BACK LOGIC



})//END
