// Define boxes to push array
var box1Clicked = document.querySelectorAll("div")[5]
var box2Clicked = document.querySelectorAll("div")[6]
var box3Clicked = document.querySelectorAll("div")[7]
var box4Clicked = document.querySelectorAll("div")[9]
var box5Clicked = document.querySelectorAll("div")[10]
var box6Clicked = document.querySelectorAll("div")[11]
var box7Clicked = document.querySelectorAll("div")[13]
var box8Clicked = document.querySelectorAll("div")[14]
var box9Clicked = document.querySelectorAll("div")[15]

// need to push DOM into an array because i cannot access DOM directly since there is a border (kotakatas,kotaktengah,kotakbawah)
// need an empty array to 
var arrayEmpty = []
arrayEmpty.push(box1Clicked)
arrayEmpty.push(box2Clicked)
arrayEmpty.push(box3Clicked)
arrayEmpty.push(box4Clicked)
arrayEmpty.push(box5Clicked)
arrayEmpty.push(box6Clicked)
arrayEmpty.push(box7Clicked)
arrayEmpty.push(box8Clicked)
arrayEmpty.push(box9Clicked)

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


// Need some kind of counter to differentiate players
var turnCounter = Math.floor(Math.random()*2) //randomize who starts first




// Start game (when click on the boxes)
var allBoxes = arrayEmpty
for (var i = 0; i < allBoxes.length; i++){
    var boxSelected = allBoxes[i]
    boxSelected.addEventListener("click", function(event){
        if (turnCounter == 0){
            if(event.target.textContent == "00"){
                if(playerTurn.textContent == player1Name.textContent + " Wins"){
                    playerTurn.textContent = "Please hit restart board to play a new game"
                }else{
                    if(event.target == box1Clicked){
                        if(box1Clicked.textContent != "X" && box2Clicked.textContent == "X" && box3Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box1Clicked.textContent != "X" && box4Clicked.textContent == "X" && box7Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box1Clicked.textContent != "X" && box5Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box1Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else {
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
    
                        
                    }else if(event.target == box2Clicked){
                        if(box2Clicked.textContent != "X" && box1Clicked.textContent == "X" && box3Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box2Clicked.textContent != "X" && box5Clicked.textContent == "X" && box8Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box2Clicked.textContent == "00" && box1Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }else if(event.target == box3Clicked){
                        if(box3Clicked.textContent != "X" && box2Clicked.textContent == "X" && box1Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box3Clicked.textContent != "X" && box5Clicked.textContent == "X" && box7Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box3Clicked.textContent != "X" && box6Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box3Clicked.textContent == "00" && box2Clicked.textContent != "00" && box1Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }else if(event.target == box4Clicked){
                        if(box4Clicked.textContent != "X" && box1Clicked.textContent == "X" && box7Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box4Clicked.textContent != "X" && box5Clicked.textContent == "X" && box6Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box4Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box1Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }else if(event.target == box5Clicked){
                        if(box5Clicked.textContent != "X" && box2Clicked.textContent == "X" && box8Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box5Clicked.textContent != "X" && box4Clicked.textContent == "X" && box6Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box5Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box1Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }else if(event.target == box6Clicked){
                        if(box6Clicked.textContent != "X" && box3Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box6Clicked.textContent != "X" && box4Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box6Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box1Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }else if(event.target == box7Clicked){
                        if(box7Clicked.textContent != "X" && box1Clicked.textContent == "X" && box4Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box7Clicked.textContent != "X" && box3Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box7Clicked.textContent != "X" && box8Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box7Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box1Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }else if(event.target == box8Clicked){
                        if(box8Clicked.textContent != "X" && box2Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box8Clicked.textContent != "X" && box7Clicked.textContent == "X" && box9Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box8Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box1Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }else if(event.target == box9Clicked){
                        if(box9Clicked.textContent != "X" && box3Clicked.textContent == "X" && box6Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box9Clicked.textContent != "X" && box1Clicked.textContent == "X" && box5Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box9Clicked.textContent != "X" && box7Clicked.textContent == "X" && box8Clicked.textContent == "X"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player1Name.textContent + " Wins"
                            var player1ScoreAmount = document.querySelector(".scoreamount1")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player1ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box9Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box1Clicked.textContent != "00"){
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "X"
                            event.target.style.color = "red"
                            playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
                            turnCounter = 1;
                            return turnCounter;
                        }
                    }
                }
            }
        }else if (turnCounter == 1){
            if(event.target.textContent == "00"){
                if(playerTurn.textContent == player2Name.textContent + " Wins"){
                    playerTurn.textContent = "Please hit restart board to play a new game"
                }else {
                    if(event.target == box1Clicked){
                        if(box1Clicked.textContent != "O" && box2Clicked.textContent == "O"  &&    box3Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if (box1Clicked.textContent != "O" && box4Clicked.textContent == "O" && box7Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if (box1Clicked.textContent != "O" && box5Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box1Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box2Clicked){
                        if(box2Clicked.textContent != "O" && box1Clicked.textContent == "O"  && box3Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box2Clicked.textContent != "O" && box5Clicked.textContent == "O" && box8Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box2Clicked.textContent == "00" && box1Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box3Clicked){
                        if(box3Clicked.textContent != "O" && box2Clicked.textContent == "O" && box1Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box3Clicked.textContent != "O" && box5Clicked.textContent == "O" && box7Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box3Clicked.textContent != "O" && box6Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box3Clicked.textContent == "00" && box2Clicked.textContent != "00" && box1Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box4Clicked){
                        if(box4Clicked.textContent != "O" && box1Clicked.textContent == "O" && box7Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box4Clicked.textContent != "O" && box5Clicked.textContent == "O" && box6Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box4Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box1Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box5Clicked){
                        if(box5Clicked.textContent != "O" && box2Clicked.textContent == "O" && box8Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box5Clicked.textContent != "O" && box4Clicked.textContent == "O" && box6Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box5Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box1Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box6Clicked){
                        if(box6Clicked.textContent != "O" && box3Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box6Clicked.textContent != "O" && box4Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box6Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box1Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box7Clicked){
                        if(box7Clicked.textContent != "O" && box1Clicked.textContent == "O" && box4Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box7Clicked.textContent != "O" && box3Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box7Clicked.textContent != "O" && box8Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box7Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box1Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box8Clicked){
                        if(box8Clicked.textContent != "O" && box2Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box8Clicked.textContent != "O" && box7Clicked.textContent == "O" && box9Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box8Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box1Clicked.textContent != "00" && box9Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }else if(event.target == box9Clicked){
                        if(box9Clicked.textContent != "O" && box3Clicked.textContent == "O" && box6Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box9Clicked.textContent != "O" && box1Clicked.textContent == "O" && box5Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box9Clicked.textContent != "O" && box7Clicked.textContent == "O" && box8Clicked.textContent == "O"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player2Name.textContent + " Wins"
                            var player2ScoreAmount = document.querySelector(".scoreamount2")
                            var newLoggedAmount = document.createElement("p")
                            newLoggedAmount.textContent = "Win"
                            newLoggedAmount.style.color = "white"
                            player2ScoreAmount.appendChild(newLoggedAmount)
                        }else if(box9Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box1Clicked.textContent != "00"){
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = "Draw game please hit restart board to play a new game"
                        }else{
                            event.target.textContent = "O"
                            event.target.style.color = "blue"
                            playerTurn.textContent = player1Name.textContent +"'s"+ " TURN"
                            turnCounter = 0;
                            return turnCounter;
                        }
                    }
                    
                
                }
            }
        }
    })
}
                    
// Restart button
restartButton.addEventListener("click",function(){
    if(turnCounter == 0){
        playerTurn.textContent = player2Name.textContent + "'s" + " TURN"
        box1Clicked.textContent = "00"
        box1Clicked.style.color = "black"
        box2Clicked.textContent = "00"
        box2Clicked.style.color = "black"
        box3Clicked.textContent = "00"
        box3Clicked.style.color = "black"
        box4Clicked.textContent = "00"
        box4Clicked.style.color = "black"
        box5Clicked.textContent = "00"
        box5Clicked.style.color = "black"
        box6Clicked.textContent = "00"
        box6Clicked.style.color = "black"
        box7Clicked.textContent = "00"
        box7Clicked.style.color = "black"
        box8Clicked.textContent = "00"
        box8Clicked.style.color = "black"
        box9Clicked.textContent = "00"
        box9Clicked.style.color = "black"
        turnCounter = 1;
        return turnCounter
    }else if(turnCounter == 1){
        playerTurn.textContent = player1Name.textContent + "'s" + " TURN"
        box1Clicked.textContent = "00"
        box1Clicked.style.color = "black"
        box2Clicked.textContent = "00"
        box2Clicked.style.color = "black"
        box3Clicked.textContent = "00"
        box3Clicked.style.color = "black"
        box4Clicked.textContent = "00"
        box4Clicked.style.color = "black"
        box5Clicked.textContent = "00"
        box5Clicked.style.color = "black"
        box6Clicked.textContent = "00"
        box6Clicked.style.color = "black"
        box7Clicked.textContent = "00"
        box7Clicked.style.color = "black"
        box8Clicked.textContent = "00"
        box8Clicked.style.color = "black"
        box9Clicked.textContent = "00"
        box9Clicked.style.color = "black"
        turnCounter = 0;
        return turnCounter;
    }
        
    
})