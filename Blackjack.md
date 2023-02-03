<html>

<head>
    <style>
        .myDiv {
            margin:100px
        }
        .column {
        float: left;
        width: 10%;
        display: flex;
        padding: 5px;
        }
        .row::after {
        content: "";
        clear: both;
        display: table;
        }
    </style>
</head>
<body>
    <div class="row">
        <div id="playerCardArray">
        </div>
    </div>
    <br>
    <div class="row">
        <div id="dealerCardArray">
        </div>
    </div>
<div class="myDiv">
    <div>
        <p id="Dealer">Dealer's cards are ??</p>
        <p id="Player">Your cards are ??</p>
        <p id="DealerScore">The Dealer's score is: ??</p>
        <p id="PlayerScore">Your score is: ??</p>
        <div>
            <img id="start" src="https://dashpen.github.io/blog/images/start.png"/>
            <img id="hit" src="https://dashpen.github.io/blog/images/hit.png"/>
            <img id="stand" src="https://dashpen.github.io/blog/images/stand.png"/>
            <img id="win" style="visibility: hidden;" src="https://dashpen.github.io/blog/images/win.png"/>
            <img id="lose" style="visibility: hidden;" src="https://dashpen.github.io/blog/images/lose.png"/>
            <img id="push" style="visibility: hidden;" src="https://dashpen.github.io/blog/images/push.png"/>
            <script>
            
                var Cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
                var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ]
                const cardImages = ["clubs_ace", "clubs_2", "clubs_3", "clubs_4", "clubs_5", "clubs_6", "clubs_7","clubs_8", "clubs_9", "clubs_10", "clubs_jack", "clubs_queen", "clubs_king", 
                                    'diamonds_ace', 'diamonds_2', 'diamonds_3', 'diamonds_4', 'diamonds_5', 'diamonds_6', 'diamonds_7', 'diamonds_8', 'diamonds_9', 'diamonds_10', 'diamonds_jack', 'diamonds_queen', 'diamonds_king', 
                                    'hearts_ace', 'hearts_2', 'hearts_3', 'hearts_4', 'hearts_5', 'hearts_6', 'hearts_7', 'hearts_8', 'hearts_9', 'hearts_10', 'hearts_jack', 'hearts_queen', 'hearts_king', 
                                    'spades_ace', 'spades_2', 'spades_3', 'spades_4', 'spades_5', 'spades_6', 'spades_7', 'spades_8', 'spades_9', 'spades_10', 'spades_jack', 'spades_queen', 'spades_king'];
                var cardsPicked = [];
                var rand = (Math.random() * 12);
                var rand2 = (Math.random() * 12);
                var winScore = 21;
                var isPlayerOver = false;
                var isDealerOver = false;
                var playerCards = [];
                var dealerCards = [];
                var playerAces = [];
                var dealerAces = [];

                function genInt(){
                    let thing = Math.random() * 4
                    console.log(thing)
                    console.log(Math.trunc(thing))
                }

                // Generates a random card and returns it as a string
                function RandCard(isP){
                    let randNumber = Math.trunc(Math.random() * 13);
                    let randCardType = Math.trunc(Math.random() * 4);
                    
                    // Checks if you are making a card for the dealer or the player
                    if(isP == true){
                        // If the random card is an ace it will add 11 to the score and the option to have only 1 instead
                        if(randNumber == 0){
                            playerCards.push(11);
                            playerAces.push(-10);
                        }
                        // If the card is Jack, Queen or king, it will add only 10 to score
                        else if(randNumber >= 9){
                            playerCards.push(10);
                        }
                        else{
                            playerCards.push(randNumber + 1);
                        }
                    } else {
                        if(randNumber == 0){
                            dealerCards.push(11);
                            dealerAces.push(-10);
                        }
                        else if(randNumber >= 9){
                            dealerCards.push(10);
                        }
                        else{
                           dealerCards.push(randNumber + 1);
                        }
                    }
                    revealCard(randNumber + randCardType*13, isP)
                    return Cards[randNumber];
                }
                // Function called every time you want an image of the card to show
                function revealCard(card, isP){
                    var temp = '<div class="column"> <img src="/images/cards/'+ cardImages[card] + '.png" alt="card" style="size: 50%;"> </div>';

                    if(isP){
                        document.getElementById("playerCardArray").innerHTML += temp;
                    }else{
                        document.getElementById("dealerCardArray").innerHTML += temp;
                    }
                }

                // Returns the score of the player or dealer
                function CalculateScore(isP){
                    let sum = 0;
                    // Checks if player or dealer is being checked
                    if (isP == true){
                        playerCards.forEach(element => {
                            sum += element;
                        });
                        // If the player is over 21 score, it will make all aces 1 instead of 11
                        if (isPlayerOver){
                                playerAces.forEach(element =>{
                                    sum += element
                                });
                            }
                    } else {
                        dealerCards.forEach(element => {
                            sum += element;
                        }); 
                        
                        if (isDealerOver){
                                dealerAces.forEach(element =>{
                                    sum += element
                                });
                            }
                    }
                    return sum;
                }

                // Initialization of the game and resetting of the scores
                document.getElementById("start").onclick = function(){
                    // revealCard(1);
                    playerCards = [];
                    dealerCards = [];
                    playerAces = [];
                    dealerAces = [];
                    isDealerOver = false;
                    isPlayerOver = false;

                    document.getElementById("playerCardArray").innerHTML = null;
                    document.getElementById("dealerCardArray").innerHTML = null;
                    
                    document.getElementById("lose").style.visibility = "hidden";
                    document.getElementById("win").style.visibility = "hidden";
                    document.getElementById("push").style.visibility = "hidden";

                    document.getElementById("Dealer").innerHTML = "Dealer's cards are " + RandCard(false) + " | " + RandCard(false);
                    document.getElementById("Player").innerHTML = "Your cards are " + RandCard(true) + " | " + RandCard(true);
                    document.getElementById("DealerScore").innerHTML = "The Dealer's Score is: " + CalculateScore(false);
                    document.getElementById("PlayerScore").innerHTML = "Your Score is: " + CalculateScore(true);

                    if((CalculateScore(true) == winScore) && (CalculateScore(false) == winScore)){
                        document.getElementById("push").style.visibility = "visible";
                    }
                    else if(CalculateScore(true) == winScore){
                        document.getElementById("win").style.visibility = "visible";
                        updateGlobal(true);
                    }
                    else if(CalculateScore(false) == winScore){
                        document.getElementById("lose").style.visibility = "visible";
                        updateGlobal(false);
                    }
                }

                // Adds score to the player and checks if the player has won or lost if they are over or equal to the winscore
                document.getElementById("hit").onclick = function(){

                    document.getElementById("Player").innerHTML += " | " + RandCard(true);
                    document.getElementById("PlayerScore").innerHTML = "Your Score is: " + CalculateScore(true);


                    if(CalculateScore(true) > winScore){
                        isPlayerOver = true;
                        document.getElementById("PlayerScore").innerHTML = "Your Score is: " + CalculateScore(true);
                    }

                    if(CalculateScore(true) > winScore){
                        document.getElementById("lose").style.visibility = "visible";
                        updateGlobal(false);
                    } 

                    if(CalculateScore(true) == winScore){
                        document.getElementById("win").style.visibility = "visible";
                        updateGlobal(true);
                    }
                }

                // Checks if the player has won the game and runs through the dealer's cards
                document.getElementById("stand").onclick = function(){
                    let gameEnd = false;
                    while(gameEnd == false){

                        if (CalculateScore(false) > CalculateScore(true)){   
                            document.getElementById("lose").style.visibility = "visible";
                            updateGlobal(false);
                            gameEnd = true;

                        } else if (CalculateScore(false) == CalculateScore(true)){
                            document.getElementById("push").style.visibility = "visible";
                            gameEnd = true;

                        } else {
                            document.getElementById("Dealer").innerHTML += " | " + RandCard(false);
                            document.getElementById("DealerScore").innerHTML = "The Dealer's Score is: " + CalculateScore(false);

                            if (CalculateScore(false) > winScore){
                                document.getElementById("win").style.visibility = "visible";
                                updateGlobal(true);
                                gameEnd = true;

                            } else if (CalculateScore(false) > CalculateScore(true)){
                                document.getElementById("lose").style.visibility = "visible";
                                updateGlobal(false);
                                gameEnd = true;
                            }
                        }
                    }
                }
            </script>
        </div>
    </div>
</div>
</body>
</html>