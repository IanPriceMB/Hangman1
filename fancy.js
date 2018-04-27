//I stopped putting script on the page when i determeined it wasn't linking/ working

var arrWords = [["happy"],["sad"],["emotions"],["scope"],["example"],["piece"]];
var random = arrWords[Math.floor(Math.random() * arrWords.length)];
var arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var lives = 5;
var count = 0;
var answers = [];

for(var i = 0; i < arrLetters.length; i++) {
    var something= $('<input/>').attr({ 
        type: 'button', 
        id:'btn'+ arrLetters[i], 
        class: 'guessB', 
        value: arrLetters[i]});
    something.attr("data-letter", arrLetters[i]);
    $("#buttons").append(something);
}

function startUp(){
    for (var i =0; i< random.length; i++){
        answers[i] = "_";
    }
    s = answers.join(" ");
    document.getElementById("dahWord").innerHTML = s;
}
$("body").on("click", ".button", function(){
    var y = $("<div>");
    y.addClass("letter color disable");
    y.text($(this).attr("data-letter"));
});
