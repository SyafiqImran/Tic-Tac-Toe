// box2Clicked.addEventListener("click",function(){
//     box2Clicked.textContent = "O"
//     box2Clicked.style.color = "black"
// })
// box3Clicked.addEventListener("click",function(){
//     box3Clicked.textContent = "X"
//     box3Clicked.style.color = "black"
// })
// box4Clicked.addEventListener("click",function(){
//     box4Clicked.textContent = "X"
//     box4Clicked.style.color = "black"
// })
// box5Clicked.addEventListener("click",function(){
//     box5Clicked.textContent = "X"
//     box5Clicked.style.color = "black"
// })
// box6Clicked.addEventListener("click",function(){
//     box6Clicked.textContent = "X"
//     box6Clicked.style.color = "black"
// })
// box7Clicked.addEventListener("click",function(){
//     box7Clicked.textContent = "X"
//     box7Clicked.style.color = "black"
// })
// box8Clicked.addEventListener("click",function(){
//     box8Clicked.textContent = "X"
//     box8Clicked.style.color = "black"
// })
// box9Clicked.addEventListener("click",function(){
//     box9Clicked.textContent = "X"
//     box9Clicked.style.color = "black"
// })

// If statements
// for box 1 clicked
// if (box1Clicked.textContent == ""){
//     if(box1Clicked.textContent != "X"){
//         box1Clicked.textContent = "O"
//     }else{
//         box1Clicked.textContent = "X"
//     }
// }


box6Clicked.textContent = "O"
                box6Clicked.style.color = "black"
                alert("Player 2 Wins")
                return turnCounter;

//Winning Conditions
box1Clicked.textContent != "X" && box2Clicked.textContent == "X" && box3Clicked.textContent == "X"
    box1Clicked.textContent = "X"
    box1Clicked.style.color = "black"
    turnCount()
    alert("Player 1 Wins")
    return turnCounter;
box1Clicked.textContent != "O" && box2Clicked.textContent == "O"  && box3Clicked.textContent == "O"
    box2Clicked.textContent = "O"
    box2Clicked.style.color = "black"
    turnCounter = 0;
    alert("Player 2 Wins")
    return turnCounter;

if (box1Clicked.textContent != "X" && box2Clicked.textContent == "X" && box3Clicked.textContent == "X"){
    box1Clicked.textContent = "X"
    box1Clicked.style.color = "black"
    turnCount()
    alert("Player 1 Wins")
    return turnCounter;
}else if(box1Clicked.textContent != "X" && box4Clicked.textContent == "X" && box7Clicked.textContent == "X"){
    box1Clicked.textContent = "X"
    box1Clicked.style.color = "black"
    turnCount()
    alert("Player 1 Wins")
    return turnCounter;
}else if(box1Clicked.textContent != "X" && box5Clicked.textContent == "X" && box9Clicked.textContent == "X"){
    box1Clicked.textContent = "X"
    box1Clicked.style.color = "black"
    turnCount()
    alert("Player 1 Wins")
    return turnCounter; //winning condition
}else if(box1Clicked.textContent == "00" && box2Clicked.textContent != "00" && box3Clicked.textContent != "00" && box4Clicked.textContent != "00" && box5Clicked.textContent != "00" && box6Clicked.textContent != "00" && box7Clicked.textContent != "00" && box8Clicked.textContent != "00" && box9Clicked.textContent != "00"){
    console.log("X")
    box1Clicked.textContent = "X"
    box1Clicked.style.color = "black"
    alert("Draw game");
}else{ //only if empty
    box1Clicked.textContent = "X"
    box1Clicked.style.color = "black"
    turnCount()
    return turnCounter;
}