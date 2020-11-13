Hi to everyone who is reading this. 
I am Syafiq. Prior before writing this, i have no experience or knowledge with html, css or javascript. 
This is my first project at making a tic-tac-toe game using HTML,CSS and Javascript based on what i learnt so far for the past 2 weeks.
I have created 2 version of the game as i intend to improve my code bit by bit as to my knowledge.
Please share any feedback on how i could make it better. Thank you so much for your time.

Play my game here - https://syafiqimran.github.io/Tic-Tac-Toe/


//Approach Taken..
As stated above, i used html, css and javascript to the best of my abilities.
For the HTML part : 
I have divided the body of the page into 3 main parts which is :-
    a) header 
    b) main
    c) footer
For the header , i only use it to act as a main title which display the name of the game.
For the main , i split it into 3 parts :-
    a) aside tag 
    b) div tag
    c) aside tag
Both of aside tag is to display the player's name and scoreboard
The div tag contains the tic-tac-toe board.
As for the footer, i have created a h3 tag to display the current player's turn and for the winning display with addition of two buttons tag, one is for restarting the board (clear board) and another is to reset the game (which will reload the page)

For the CSS part :
The game is themed as red vs blue which means one player will represent red in color and another will represent with blue color.
The board is full black in color to represent a neutral field for both red and blue.
Also , i have picked a background image for the whole page with a tic-tac-toe themed


For the JavaScript part :
My understanding of the game is :-
    a) it is a 2 player game (which include if the opposition player is a computer)
    b) the base game is a 3x3 block , whoever manage to create a line of block that contains their respective mark (X or O) will win. There is a multiple combinations of winning such as winning horizontally , vertically or diagonally.

To meet the requirement for a two-player game, i have opt to create a turn count system. What i mean here is , i created a variable that can hold a number that will determine which player's turn.
For the multiple combinations, i can only visuallize a nested IF statement since there is many conditions.
I have made some adjustment to the tictactoe.html (the first version) and created a second attempt which is the 2ndTictactoe.html..
The differences between the 2 version is the approach i have taken using the event listener :- 
    a ) for the first version , i tried doing each boxes to have an eventlistener with all having a function on their own with nested IF statement inside the event.
    b ) for the second version , i tried using the event.target method. By doing so, i have created only 1 event that can also replicate the same results as the first version
However, for the multiple combinations, i can only imagine the IF statement to be nested. Hence, the code will be long since each boxes has their own IF statement.

Thank you for your time :)
