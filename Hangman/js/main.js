function startFunction(){
var challenge = prompt('Player 1 : Enter a phrase');
var phrase = challenge.toUpperCase();
var phraseSplit = phrase.split("");
var phraseLength = phraseSplit.length;
var phraseSlots = Array.apply(null, Array(phraseLength)).map(function () {});
var usedLetters = [];
var letterLocation = [];
var spaceLocation = [];
var failedAttempt = 0;

//Check first for any spaces in the phrase and store for later
for(var i=0; i<phraseSplit.length; i++){
  if(phraseSplit[i] === ' '){
    spaceLocation.push(i);
  }
}
for(var i=0; i < spaceLocation.length; i++){
  for(var j=0; j< phraseSlots.length; j++){
    phraseSlots[spaceLocation[i]] = " ";
  }
};
//Populate the spaces in the html for every spot in the phrase
for(var i=0; i < phraseSlots.length; i++){
  var guessSpots = document.createElement('li')
  guessSpots.setAttribute('class', 'slots');
  if(phraseSlots[i] == undefined){
    document.getElementById('letters').appendChild(guessSpots);
  }
  else if (phraseSlots[i] === " "){
    var spaces = document.createTextNode(' ');
    guessSpots.appendChild(spaces);
    document.getElementById('letters').appendChild(guessSpots).style.backgroundColor = "white";
  }
};

//Start the letter-checking cycle
for(var i=0; i < phraseSlots.length; i++){
    do {
    var attempt = prompt('Player 2 : Enter a letter!');
    var letter = attempt.toUpperCase();
    //Store the letters so they can't be re-guessed
    usedLetters.push(letter);
    //Entering letters and checking to see if they exist in the phrase
    for(var i=0; i < phraseSplit.length; i++){
      if(phraseSplit[i] === letter && phraseSplit[i] !== usedLetters){
        letterLocation.push(i);
      }
    };
    if (letterLocation[0] == null){
      var limbs = document.getElementById('hangman');
      alert('No ' + letter + ' in this phrase! Gettin dangerous!');
      limbs.children[failedAttempt].style.display = "block";
      failedAttempt += 1;

      if(failedAttempt >= 6){
        limbs.children[failedAttempt].style.display = "block";
        alert('Oh no! RIP you!');
        window.location.reload(true);
        {break;};
      };
    };
    //Putting the letter where it goes in the phraseSlot array
    for (var i=0; i < letterLocation.length; i++){
      for (var j=0; j < phraseSlots.length; j++){
            phraseSlots[letterLocation[i]] = letter;
        }
    };
letterLocation=[];
    //Printing the phrase
      for(var i=0; i < phraseSlots.length; i++){
        var letterPlaced = document.createTextNode(letter);
        var hasChildren = document.getElementsByClassName('slots')[i].hasChildNodes();
        if(phraseSlots[i] == letter && hasChildren == false){
          document.getElementsByClassName('slots')[i].appendChild(letterPlaced);
        }
        else if(phraseSlots[i] == letter && hasChildren == true){
          alert('Whoops! Already guessed that letter! Try again!');
          {continue;}
        }
      };
    }
    //See if the arrays match - when they do you've won the game!
    while(JSON.stringify(phraseSlots)==JSON.stringify(phraseSplit) != true);
}
if (JSON.stringify(phraseSlots)==JSON.stringify(phraseSplit)==true){
        alert('You saved yourself! Congrats!');
        window.location.reload(true);
      }
}
