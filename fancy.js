$(document).ready(function() {
    var arrWords = ["happy","sad","emotions","scope","example","piece"];
    var random = arrWords[Math.floor(Math.random() * arrWords.length)];
    
    var arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var lives = 5;
    var answers = [];
    var s;
    var scoreTracker = 0;
    var correctGuess;
    var winVariable = 0;

    function begin(){
        for (var i = 0; i < random.length; i++){
            answers.push("_");
        }
        s = answers.join(" ");
        document.getElementById("dahWord").innerHTML = s;

        for(var i = 0; i < arrLetters.length; i++) {
            var something= $('<input/>').attr({ 
                type: 'button',  
                id: "btn" + arrLetters[i],
                value: arrLetters[i]});
                something.attr("data-letter", arrLetters[i]);
                something.addClass("guessB");
                $("#buttons").append(something);        
        }
        var a = random.length.toString();
        document.getElementById("numLetters").innerHTML = a;
        lives = 5;
        var l = lives.toString();
        document.getElementById("lives").innerHTML = l;  
    }
    begin();

    $("body").on("click", ".guessB", function(){
        scoreTracker = 0;
        correctGuess = false;
        winVariable = 0;

        for (var i = 0; i < answers.length; i++){    
            if (random[i] === this.value){
                answers[i] = this.value;
                s = answers.join(" ");
                document.getElementById("dahWord").innerHTML = s;
                correctGuess = true;
            }else{
                var a;                    
                scoreTracker += 1;
            }  
        }
        if (scoreTracker>0 && !correctGuess===true){
            lives -= 1;
            a = lives.toString();
            document.getElementById("lives").innerHTML = a;
            if (lives == 0){
                    alert("you lose");
                }
        }
        document.getElementById("btn" + this.value).classList.remove("guessB");
        document.getElementById("btn" + this.value).classList.add("hidden");
        
        for (var i = 0; i < random.length; i++){
            if (answers[i].toString() !== '_'){
                winVariable += 1;
            }
            if (winVariable === random.length) {
                alert("you win");
            }
        }
    });
});
