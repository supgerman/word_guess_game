      
    $(document).ready(function() {

        var wordBox = ['Special', 'Dynamic', 'Simple','Another'];
        var win = "0";
        var lose = "0";
        var wrongLetter = "0";
        var guessesLeft = 9;
        var underScores = [];
        var userGuesses = "0";
        var randomWorld;
        var winCounter;

        function startGame(){
            var wordboxArray=Math.random()*wordBox.length
            wordboxArray=Math.floor(wordboxArray)
        
            randomWorld=wordBox[wordboxArray];
        
          //  randomWorld = wordBox [Math.floor(Math.random()* wordBox.length)];
            console.log(randomWorld);
        }

        startGame( );
        
        for (var i = 0; i < randomWorld.length; i++) {

            underScores.push("_");
        }
        document.getElementsByClassName("Current-word").innerHTML = underScores.join(" ");

function winLose(){
if (winCounter === randomWorld)
{
    alert ("winner");
}
else if (guessesLeft === 0)
{
    alert ("losser");
}
}




 // Reset
 var wrongLetter = "0";
 var guessesLeft = 10;

 document.getElementById("guesses-left").textContent = guessesLeft;

 document.onkeyup = function (event){
    userGuesses = event.key;
    if (randomWorld.indexOf(userGuesses)> -1) 
    {
        for (var i=0; i<randomWorld; i++)
        {
            if (randomWorld[i] === userGuesses)
            {
                underScores [i] = userGuesses;
                winCounter++;
                winLose();
            }
        }
    }
    else
    {
        wrongLetter.push(userGuesses);
        guessesLeft--;
    }
}
    });