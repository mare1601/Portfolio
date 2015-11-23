var challenge = 'Catch me if you can';
var phrase = challenge.toUpperCase();
var phraseSplit = phrase.split("");
var phraseLength = phraseSplit.length;
var phraseSlots = Array.apply(null, Array(phraseLength)).map(function () {});
var letterLocation = [];

console.log(phraseSplit);

for(var i=0; i < phraseSlots.length; i++){
  if(phraseSlots[i]=== undefined){
    var attempt = prompt('Enter a letter!');
    var letter = attempt.toUpperCase();
    //Entering letters and checking to see if they exist in the phrase
    for(var i=0; i < phraseSplit.length; i++){
      if(phraseSplit[i] === letter){
        letterLocation.push(i+1);
      }
    };
    if (letterLocation[0] == null){
      alert('No ' + letter + ' in this phrase! Gettin dangerous!');
    };
    //Putting the letter where it goes
    for (var i=0; i < letterLocation.length; i++){
      for (var j=0; j < phraseSlots.length; j++){
          phraseSlots[letterLocation[i]] = letter;
        }
    };
    //Printing the phrase
    for(var i=1; i < phraseSlots.length+1; i++){
      if(phraseSlots[i] === undefined){
        document.write(' _ ');
      }
      else {
        document.write(phraseSlots[i]);
      }
    }
  }
  else {
    alert('You saved yourself! Congrats!');
  }
}