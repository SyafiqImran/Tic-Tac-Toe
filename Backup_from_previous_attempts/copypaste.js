if (box1Clicked.textContent != "X" && box2Clicked.textContent == "X" && box3Clicked.textContent == "X"){
    event.target.textContent = "X"
    event.target.style.color = "black"
    playerTurn.textContent = player1Name.textContent + " Wins"
    var player1ScoreAmount = document.querySelector(".scoreamount1")
    var newLoggedAmount = document.createElement("p")
    newLoggedAmount.textContent = "W"
    newLoggedAmount.style.color = "green"
    player1ScoreAmount.appendChild(newLoggedAmount)
    turnCounter = 1;
    return turnCounter;
}else if(box1Clicked.textContent != "X" && box4Clicked.textContent == "X" && box7Clicked.textContent == "X"){
    event.target.textContent = "X"
    event.target.style.color = "black"
    turnCounter = 1;
    playerTurn.textContent = player1Name.textContent + " Wins"
    var player1ScoreAmount = document.querySelector(".scoreamount1")
    var newLoggedAmount = document.createElement("p")
    newLoggedAmount.textContent = "W"
    newLoggedAmount.style.color = "green"
    player1ScoreAmount.appendChild(newLoggedAmount)
    return turnCounter;
}else if(box1Clicked.textContent != "X" && box5Clicked.textContent == "X" && box9Clicked.textContent == "X"){
    event.target.textContent = "X"
    event.target.style.color = "black"
    turnCounter = 1;
    playerTurn.textContent = player1Name.textContent + " Wins"
    var player1ScoreAmount = document.querySelector(".scoreamount1")
    var newLoggedAmount = document.createElement("p")
    newLoggedAmount.textContent = "W"
    newLoggedAmount.style.color = "green"
    player1ScoreAmount.appendChild(newLoggedAmount)
    return turnCounter; //winning condition
}else if(box1Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
    console.log("X")
    event.target.textContent = "X"
    event.target.style.color = "black"
    playerTurn.textContent = "Draw game please hit restart board to play a new game"
}else{ //only if empty
    event.target.textContent = "X"
    event.target.style.color = "black"
    playerTurn.textContent = player2Name.textContent +"'s"+ " TURN"
    // turnCount()
    turnCounter = 1;
    return turnCounter;
}