var currentScore;
var randomNumber;
var wins;
var losses;
var RubyValue;
var DiamondValue;
var EmeraldValue;
var SapphireValue;

//  Reset Function
function reset() {
    RubyValue = Math.floor(Math.random() * 12) + 1;

    do {
    DiamondValue = Math.floor(Math.random() * 12) + 1;
    } while (DiamondValue === RubyValue);

    do {
    EmeraldValue = Math.floor(Math.random() * 12) + 1;
    } while (EmeraldValue === RubyValue || EmeraldValue === DiamondValue);

    do {
    SapphireValue = Math.floor(Math.random() * 12) + 1;
    } while (SapphireValue === RubyValue || SapphireValue === DiamondValue || SapphireValue === EmeraldValue);

    console.log("Crystal 1: " + RubyValue);
    console.log("Crystal 2: " + DiamondValue);
    console.log("Crystal 3: " + EmeraldValue);
    console.log("Crystal 4: " + SapphireValue);


    $("#ruby").attr("data-value", RubyValue);
    $("#diamond").attr("data-value", DiamondValue);
    $("#emerald").attr("data-value", EmeraldValue);
    $("#sapphire").attr("data-value", SapphireValue);

    console.log($("#ruby").attr("data-value"));
    console.log($("#diamond").attr("data-value"));
    console.log($("#emerald").attr("data-value"));
    console.log($("#sapphire").attr("data-value"));

    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(randomNumber);

    currentScore = 0;
    updateScore();
    updateWins();
    updateLosses();

    console.log(randomNumber);

}

function updateLosses() {
    $("#losses").text(losses);
}

function updateScore() {
    $("#current-score").text(currentScore);
}

function updateWins() {
    $("#wins").text(wins);
}

$(function(){
    wins = 0;
    losses = 0;
    currentScore = 0;

    reset();

    $(".crystal").on("click",function(){
        $("#lets-play").text("Lets Play!");
        currentScore += parseInt($(this).attr("data-value"));

        if (currentScore === randomNumber) {
            $("#lets-play").text("You Won!");
            wins++;
            reset();
        } else if (currentScore > randomNumber) {
            $("#lets-play").text("You Lost!");
            losses++;
            reset();
        } else {
            updateScore();
        }

    })






});