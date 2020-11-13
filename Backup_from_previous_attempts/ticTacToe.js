//Define var for each box (1-9)
var box1Clicked = document.querySelector(".kotak1")
var box2Clicked = document.querySelector(".kotak2")
var box3Clicked = document.querySelector(".kotak3")
var box4Clicked = document.querySelector(".kotak4")
var box5Clicked = document.querySelector(".kotak5")
var box6Clicked = document.querySelector(".kotak6")
var box7Clicked = document.querySelector(".kotak7")
var box8Clicked = document.querySelector(".kotak8")
var box9Clicked = document.querySelector(".kotak9")

//Define var for the restart button
var restartButton = document.querySelector(".restart")

//Define var for the score
var scorePlayer1 = document.querySelector(".scoreamount1")
var scorePlayer2 = document.querySelector(".scoreamount2")

//Define var for playerTurn
var playerTurn = document.querySelector(".turnplayer")

//Define variable that take Player Name input

var enterPlayer1 = document.querySelectorAll("button")[0] //enter button player 1
var enterPlayer2 = document.querySelectorAll("button")[1] //enter button player 2
var inputPlayer1 = document.querySelectorAll("input")[0] //player1 name box
var inputPlayer2 = document.querySelectorAll("input")[1] //player2 name box
var inputName1 = inputPlayer1.value  //name that was input-ted for player 1
var inputName2 = inputPlayer2.value  //name that was input-ted for player 2


// Define variable for Player name 
var player1Name = document.querySelector(".namaplayer1")
var player2Name = document.querySelector(".namaplayer2")


// not gonna use prompt since it freezes the browser
// player1Name.textContent = prompt("Write your name please for Player 1")
// player2Name.textContent = prompt("Write your name please for Player 2")


// Need some kind of counter to differentiate players
var turnCounter = Math.floor(Math.random()*2) //randomize who starts first
function turnCount(){
    turnCounter = 0
    var n = 0
    while (n < 1 ){
        turnCounter = n + 1
        n = n + 1
    }
    return turnCounter
}

//Naming the players

enterPlayer1.addEventListener("click",function(){

    player1Name.textContent = document.querySelectorAll("input")[0].value
    playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
    playerTurn.textContent = turnCounter
    if(turnCounter == 0){
        playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
    }else {
        playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
    }
})
enterPlayer2.addEventListener("click",function(){
    player2Name.textContent = document.querySelectorAll("input")[1].value;
    playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
    playerTurn.textContent = turnCounter
    if(turnCounter == 0){
        playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
    }else {
        playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
    }
})


//Start of game part //Defining player turn at start

// playerTurn.textContent = turnCounter
// if(playerTurn.textContent == 0){
//     playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
// }else {
//     playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
// }


// Clicking events
box1Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if(box1Clicked.textContent == "00"){
            if (box1Clicked.textContent != "X" && box2Clicked.textContent == "X" && box3Clicked.textContent == "X"){
                box1Clicked.textContent = "X"
                box1Clicked.style.color = "black"
                turnCount() // this is basically turnCounter = 1
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box1Clicked.textContent != "X" && box4Clicked.textContent == "X" && box7Clicked.textContent == "X"){
                box1Clicked.textContent = "X"
                box1Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box1Clicked.textContent != "X" && box5Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                box1Clicked.textContent = "X"
                box1Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter; //winning condition
            }else if(box1Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box1Clicked.textContent = "X"
                box1Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{ //only if empty
                box1Clicked.textContent = "X"
                box1Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                // turnCount()
                turnCounter = 1;
                return turnCounter;
            }
        }
    }else if(turnCounter == 1){
        if(box1Clicked.textContent == "00" ){
            if (box1Clicked.textContent != "O" && box2Clicked.textContent == "O"  && box3Clicked.textContent == "O"){
                box1Clicked.textContent = "O"
                box1Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if (box1Clicked.textContent != "O" && box4Clicked.textContent == "O" && box7Clicked.textContent == "O"){
                box1Clicked.textContent = "O"
                box1Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if (box1Clicked.textContent != "O" && box5Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                box1Clicked.textContent = "O"
                box1Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box1Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box1Clicked.textContent = "O"
                box1Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
            box1Clicked.textContent = "O"
            box1Clicked.style.color = "black"
            playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
            turnCounter = 0;
            return turnCounter;
            }
        }
    }
})
box2Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box2Clicked.textContent == "00" ){
            if(box2Clicked.textContent != "X" && box1Clicked.textContent == "X" && box3Clicked.textContent == "X"){
                box2Clicked.textContent = "X"
                box2Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box2Clicked.textContent != "X" && box5Clicked.textContent == "X" && box8Clicked.textContent == "X"){
                box2Clicked.textContent = "X"
                box2Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box2Clicked.textContent == "00" && box1Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box2Clicked.textContent = "X"
                box2Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box2Clicked.textContent = "X"
                box2Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + "'s" +  " TURN"
                turnCount()
                return turnCounter;
            }
        }
    }else if(turnCounter == 1){
        if (box2Clicked.textContent == "00" ){
            if(box2Clicked.textContent != "O" && box1Clicked.textContent == "O"  && box3Clicked.textContent == "O"){
                box2Clicked.textContent = "O"
                box2Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box2Clicked.textContent != "O" && box5Clicked.textContent == "O" && box8Clicked.textContent == "O"){
                box2Clicked.textContent = "O"
                box2Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box2Clicked.textContent == "00" && box1Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box2Clicked.textContent = "O"
                box2Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box2Clicked.textContent = "O"
                box2Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                turnCounter = 0;
                return turnCounter;
            }
        }
    }
})
box3Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box3Clicked.textContent == "00" ){
            if(box3Clicked.textContent != "X" && box2Clicked.textContent == "X" && box1Clicked.textContent == "X"){
                box3Clicked.textContent = "X"
                box3Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box3Clicked.textContent != "X" && box5Clicked.textContent == "X" && box7Clicked.textContent == "X"){
                box3Clicked.textContent = "X"
                box3Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box3Clicked.textContent != "X" && box6Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                box3Clicked.textContent = "X"
                box3Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box3Clicked.textContent == "00" && box2Clicked.textContent != "00" && box1Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box3Clicked.textContent = "X"
                box3Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box3Clicked.textContent = "X"
                box3Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
            
        }
    }else if(turnCounter == 1){ 
        if (box3Clicked.textContent == "00" ){
            if(box3Clicked.textContent != "O" && box2Clicked.textContent == "O" && box1Clicked.textContent == "O"){
                box3Clicked.textContent = "O"
                box3Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box3Clicked.textContent != "O" && box5Clicked.textContent == "O" && box7Clicked.textContent == "O"){
                box3Clicked.textContent = "O"
                box3Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box3Clicked.textContent != "O" && box6Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                box3Clicked.textContent = "O"
                box3Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box3Clicked.textContent == "00" && box2Clicked.textContent != "00" && box1Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box3Clicked.textContent = "O"
                box3Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box3Clicked.textContent = "O"
                box3Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }
})
box4Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box4Clicked.textContent == "00" ){
            if(box4Clicked.textContent != "X" && box1Clicked.textContent == "X" && box7Clicked.textContent == "X"){
                box4Clicked.textContent = "X"
                box4Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box4Clicked.textContent != "X" && box5Clicked.textContent == "X" && box6Clicked.textContent == "X"){
                box4Clicked.textContent = "X"
                box4Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box4Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box1Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box4Clicked.textContent = "X"
                box4Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box4Clicked.textContent = "X"
                box4Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }else if(turnCounter == 1){
        if (box4Clicked.textContent == "00" ){
            if(box4Clicked.textContent != "O" && box1Clicked.textContent == "O" && box7Clicked.textContent == "O"){
                box4Clicked.textContent = "O"
                box4Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box4Clicked.textContent != "O" && box5Clicked.textContent == "O" && box6Clicked.textContent == "O"){
                box4Clicked.textContent = "O"
                box4Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box4Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box1Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box4Clicked.textContent = "O"
                box4Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box4Clicked.textContent = "O"
                box4Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }
})
box5Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box5Clicked.textContent == "00" ){
            if(box5Clicked.textContent != "X" && box2Clicked.textContent == "X" && box8Clicked.textContent == "X"){
                box5Clicked.textContent = "X"
                box5Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box5Clicked.textContent != "X" && box4Clicked.textContent == "X" && box6Clicked.textContent == "X"){
                box5Clicked.textContent = "X"
                box5Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box5Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box1Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box5Clicked.textContent = "X"
                box5Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box5Clicked.textContent = "X"
                box5Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }else if(turnCounter == 1){
        if (box5Clicked.textContent == "00" ){
            if(box5Clicked.textContent != "O" && box2Clicked.textContent == "O" && box8Clicked.textContent == "O"){
                box5Clicked.textContent = "X"
                box5Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box5Clicked.textContent != "O" && box4Clicked.textContent == "O" && box6Clicked.textContent == "O"){
                box5Clicked.textContent = "O"
                box5Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box5Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box1Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box5Clicked.textContent = "O"
                box5Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box5Clicked.textContent = "O"
                box5Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }
})
box6Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box6Clicked.textContent == "00" ){
            if(box6Clicked.textContent != "X" && box3Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                box6Clicked.textContent = "X"
                box6Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box6Clicked.textContent != "X" && box4Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                box6Clicked.textContent = "X"
                box6Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box6Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box1Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box6Clicked.textContent = "X"
                box6Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box6Clicked.textContent = "X"
                box6Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
            
        }
    }else if(turnCounter == 1){
        if (box6Clicked.textContent == "00" ){
            if(box6Clicked.textContent != "O" && box3Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                box6Clicked.textContent = "O"
                box6Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box6Clicked.textContent != "O" && box4Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                box6Clicked.textContent = "O"
                box6Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box6Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box1Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box6Clicked.textContent = "O"
                box6Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box6Clicked.textContent = "O"
                box6Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }
})
box7Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box7Clicked.textContent == "00" ){
            if(box7Clicked.textContent != "X" && box1Clicked.textContent == "X" && box4Clicked.textContent == "X"){
                box7Clicked.textContent = "X"
                box7Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box7Clicked.textContent != "X" && box3Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                box7Clicked.textContent = "X"
                box7Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box7Clicked.textContent != "X" && box8Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                box7Clicked.textContent = "X"
                box7Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box7Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box1Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box7Clicked.textContent = "X"
                box7Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box7Clicked.textContent = "X"
                box7Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
            
        }
    }else if(turnCounter == 1){
        if (box7Clicked.textContent == "00" ){
            if(box7Clicked.textContent != "O" && box1Clicked.textContent == "O" && box4Clicked.textContent == "O"){
                box7Clicked.textContent = "O"
                box7Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box7Clicked.textContent != "O" && box3Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                box7Clicked.textContent = "O"
                box7Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box7Clicked.textContent != "O" && box8Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                box7Clicked.textContent = "O"
                box7Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box7Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box1Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box7Clicked.textContent = "O"
                box7Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else {
                box7Clicked.textContent = "O"
                box7Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }
})
box8Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box8Clicked.textContent == "00" ){
            if(box8Clicked.textContent != "X" && box2Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                box8Clicked.textContent = "X"
                box8Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box8Clicked.textContent != "X" && box7Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                box8Clicked.textContent = "X"
                box8Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box8Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box1Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("X")
                box8Clicked.textContent = "X"
                box8Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box8Clicked.textContent = "X"
                box8Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }else if(turnCounter == 1){
        if (box8Clicked.textContent == "00" ){
            if(box8Clicked.textContent != "O" && box2Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                box8Clicked.textContent = "O"
                box8Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box8Clicked.textContent != "O" && box7Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                box8Clicked.textContent = "O"
                box8Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box8Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box1Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                console.log("O")
                box8Clicked.textContent = "O"
                box8Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box8Clicked.textContent = "O"
                box8Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }
})
box9Clicked.addEventListener("click",function(){
    if (turnCounter == 0){
        if (box9Clicked.textContent == "00" ){
            if(box9Clicked.textContent != "X" && box3Clicked.textContent == "X" && box6Clicked.textContent == "X"){
                box9Clicked.textContent = "X"
                box9Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box9Clicked.textContent != "X" && box1Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                box9Clicked.textContent = "X"
                box9Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box9Clicked.textContent != "X" && box7Clicked.textContent == "X" && box8Clicked.textContent == "X"){
                box9Clicked.textContent = "X"
                box9Clicked.style.color = "black"
                playerTurn.textContent = player1Name.textContent + " Wins"
                var player1ScoreAmount = document.querySelector(".scoreamount1")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player1ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box9Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box1Clicked.textContent != "00"){
                console.log("X")
                box9Clicked.textContent = "X"
                box9Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box9Clicked.textContent = "X"
                box9Clicked.style.color = "black"
                turnCount()
                playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }else if(turnCounter == 1){
        if (box9Clicked.textContent == "00" ){
            if(box9Clicked.textContent != "O" && box3Clicked.textContent == "O" && box6Clicked.textContent == "O"){
                box9Clicked.textContent = "O"
                box9Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box9Clicked.textContent != "O" && box1Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                box9Clicked.textContent = "O"
                box9Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box9Clicked.textContent != "O" && box7Clicked.textContent == "O" && box8Clicked.textContent == "O"){
                box9Clicked.textContent = "O"
                box9Clicked.style.color = "black"
                playerTurn.textContent = player2Name.textContent + " Wins"
                var player2ScoreAmount = document.querySelector(".scoreamount2")
                var newLoggedAmount = document.createElement("p")
                newLoggedAmount.textContent = "W"
                newLoggedAmount.style.color = "green"
                player2ScoreAmount.appendChild(newLoggedAmount)
                return turnCounter;
            }else if(box9Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box1Clicked.textContent != "00"){
                console.log("O")
                box9Clicked.textContent = "O"
                box9Clicked.style.color = "black"
                playerTurn.textContent = "Draw game please hit restart board to play a new game"
            }else{
                box9Clicked.textContent = "O"
                box9Clicked.style.color = "black"
                turnCounter = 0;
                playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
                return turnCounter;
            }
        }
    }
})
restartButton.addEventListener("click",function(){
    if (scorePlayer1.childElementCount == 3){
        alert (player1Name.textContent + " is winning hard !")
        box1Clicked.textContent = "00"
        box1Clicked.style.color = "lightpink"
        box2Clicked.textContent = "00"
        box2Clicked.style.color = "lightpink"
        box3Clicked.textContent = "00"
        box3Clicked.style.color = "lightpink"
        box4Clicked.textContent = "00"
        box4Clicked.style.color = "lightpink"
        box5Clicked.textContent = "00"
        box5Clicked.style.color = "lightpink"
        box6Clicked.textContent = "00"
        box6Clicked.style.color = "lightpink"
        box7Clicked.textContent = "00"
        box7Clicked.style.color = "lightpink"
        box8Clicked.textContent = "00"
        box8Clicked.style.color = "lightpink"
        box9Clicked.textContent = "00"
        box9Clicked.style.color = "lightpink"
    }else if(scorePlayer2.childElementCount == 3){
        alert (player2Name.textContent + " is winning hard !")
        box1Clicked.textContent = "00"
        box1Clicked.style.color = "lightpink"
        box2Clicked.textContent = "00"
        box2Clicked.style.color = "lightpink"
        box3Clicked.textContent = "00"
        box3Clicked.style.color = "lightpink"
        box4Clicked.textContent = "00"
        box4Clicked.style.color = "lightpink"
        box5Clicked.textContent = "00"
        box5Clicked.style.color = "lightpink"
        box6Clicked.textContent = "00"
        box6Clicked.style.color = "lightpink"
        box7Clicked.textContent = "00"
        box7Clicked.style.color = "lightpink"
        box8Clicked.textContent = "00"
        box8Clicked.style.color = "lightpink"
        box9Clicked.textContent = "00"
        box9Clicked.style.color = "lightpink"
    }else{
        if(turnCounter == 0){
            playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
            box1Clicked.textContent = "00"
            box1Clicked.style.color = "lightpink"
            box2Clicked.textContent = "00"
            box2Clicked.style.color = "lightpink"
            box3Clicked.textContent = "00"
            box3Clicked.style.color = "lightpink"
            box4Clicked.textContent = "00"
            box4Clicked.style.color = "lightpink"
            box5Clicked.textContent = "00"
            box5Clicked.style.color = "lightpink"
            box6Clicked.textContent = "00"
            box6Clicked.style.color = "lightpink"
            box7Clicked.textContent = "00"
            box7Clicked.style.color = "lightpink"
            box8Clicked.textContent = "00"
            box8Clicked.style.color = "lightpink"
            box9Clicked.textContent = "00"
            box9Clicked.style.color = "lightpink"
            turnCounter = 1;
            return turnCounter
        }else if(turnCounter == 1){
            playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
            box1Clicked.textContent = "00"
            box1Clicked.style.color = "lightpink"
            box2Clicked.textContent = "00"
            box2Clicked.style.color = "lightpink"
            box3Clicked.textContent = "00"
            box3Clicked.style.color = "lightpink"
            box4Clicked.textContent = "00"
            box4Clicked.style.color = "lightpink"
            box5Clicked.textContent = "00"
            box5Clicked.style.color = "lightpink"
            box6Clicked.textContent = "00"
            box6Clicked.style.color = "lightpink"
            box7Clicked.textContent = "00"
            box7Clicked.style.color = "lightpink"
            box8Clicked.textContent = "00"
            box8Clicked.style.color = "lightpink"
            box9Clicked.textContent = "00"
            box9Clicked.style.color = "lightpink"
            turnCounter = 0;
            return turnCounter;
        }
        
    }
})




