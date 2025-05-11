
let score = [0 , 0];       //Global score
let roundScore = 0;     //round score
let current = 0;        //current player  (0 or 1)
let dice;
let gameRunning = true;
let animation = 0;

document.querySelector(".score-0").textContent = "0";
document.querySelector(".score-1").textContent = "0";
document.querySelector(".current-0").textContent = "0";
document.querySelector(".current-1").textContent = "0";



document.getElementById("rotate").onclick = function(){
    //roll the dice
    dice = Math.floor(Math.random()*6 + 1);
    
 if(gameRunning){    
     //get value of dice
    document.querySelector("#dice-img").src = "assets/dice-"+dice+".JPG";
    
    //This is just for cool effects
    if(animation === 0){
      document.querySelector("#dice-img").classList.add("tada");
      document.querySelector("#dice-img").classList.remove('shake');
      animation = 1;      
    }
    
    else{
        document.querySelector("#dice-img").classList.remove('tada');
        document.querySelector("#dice-img").classList.add('shake');
        animation = 0;
        
    }//YOUR CODE HERE

      //Here are the rules of the Pig game:
      //1. The user rolls the dice
      //2. If the value is different from 1, the user can roll again and get a higher accumulated value in their round score
      //or they could decide to hold and end the turn
      //3. If the value is one, the user loses their accumulated value and their turn.
      //hint: toggling seems cool, doesn't it? It only applies if the user loses the turn
      //hint #2: The current user is 0 or 1
    
    if(dice !== 1) {
        // Añadir el valor del dado al puntaje de la ronda
        roundScore += dice;
        // Actualizar el puntaje temporal en pantalla
        document.querySelector(".current-"+current).textContent = roundScore;
    } else {
        // Si sale 1, el jugador pierde su puntaje y su turno
        roundScore = 0;
        document.querySelector(".current-"+current).textContent = "0";
        // Cambiar al siguiente jugador
        current = 1 - current;
        // Alternar la indicación visual del jugador activo
        document.querySelector(".player-0").classList.toggle("active");
        document.querySelector(".player-1").classList.toggle("active");
    }
 }
}


document.getElementById("hold").onclick = function(){

  //Your code here

  //As long as the game is running, the score of the CURRENT USER should be accumulated if the usert holds
  //this value should be visible in his score
  //current user wins if his/her/their score is equal or more than 100. Afther this, game should be stopped

  if(gameRunning) {
    // Add current round score to player's total score
    score[current] += roundScore;
    
    // Update the UI
    document.querySelector(".score-" + current).textContent = score[current];
    
    // Check if player won the game
    if(score[current] >= 100) {
      document.querySelector("#pl-" + current).innerHTML = "<h2 id='pl-" + current + "'>PLAYER " + (current + 1) + " WINS! 🏆</h2>";
      gameRunning = false;
    } else {
      // Reset round score and switch to next player
      roundScore = 0;
      document.querySelector(".current-" + current).textContent = "0";
      
      // Switch to next player
      current = 1 - current;
      
      // Toggle active player visual indication
      document.querySelector(".player-0").classList.toggle("active");
      document.querySelector(".player-1").classList.toggle("active");
    }
  }
 }


document.querySelector("#new").addEventListener('click',game);

function game() {
    
    score = [0,0];
    roundScore = 0 ;
    current = 0;
    gameRunning = true;
    
    document.querySelector(".score-0").textContent = "0";
    document.querySelector(".score-1").textContent = "0";
    document.querySelector(".current-0").textContent = "0";
    document.querySelector(".current-1").textContent = "0";
    document.querySelector("#pl-0").innerHTML = "<h2 id='pl-0'>PLAYER 1 "+"<i class='fas fa-cicle'>"+"</i></h2>";
    document.querySelector("#pl-1").innerHTML = "<h2 id='pl-1'>PLAYER 2 "+"<i class='fas fa-cicle'>"+"</i></h2>";
}

 

