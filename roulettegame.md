<html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Chakra+Petch');
html, body{
  height: 100%;
  min-height: 100%;
  margin: 0;
	background: black;
	font-family: 'Chakra Petch', sans-serif;
	color: #ffffff;
	padding: 15px;
	overflow-x: hidden;
	max-width: 100%;
}
    {
      box-sizing:border-box;
    }
    .bet{
      position:absolute;
      max-width:25px;
      padding:3px;
      left:0;
      right:0;
      margin-left: auto;
      margin-right:auto;
      background-color:yellow;
      overflow:hidden;
      border-radius:50%;
      color:black;
    }
    .output{
      display:grid;
      width:80vw;
      height:80vh;
      margin:auto;
      padding:0;
    }
    .box{
      position:relative;
      text-align:center;
      border:1px solid #ddd;
    }
  </style>
</head>
<body>
  <div class="gamearea">
  </div>
</body>
</html>
<script>
    <!-- defining the variabless -->
    const gamearea = document.querySelector('.gamearea');
    const score  = createEle(gamearea,'div','Score :','score');
    const btn = createEle(gamearea,'button','Spin','btn');
    const message = createEle(gamearea,'div','Press Spin','message');
    const output = createEle(gamearea,'div','','output');
    const game = {x:7,y:9,coins:50,sel:[],eles:[],winner:false,styler:['black','white']};
    const total = game.x * game.y;
    <!-- when spin is clicked spunner fuction is called, then createboard and update score create board and update score -->
    btn.addEventListener('click',spinner);
    createBoard();
    updateScore();
    <!-- generates ran number,number is saved then checks if player bet on chosen square, then removes bet elements -->
    function spinner(){
        const ranVal = Math.floor(Math.random()*total)+1;
        console.log(ranVal);
        game.winner = ranVal-1;
        game.styler = [game.eles[ranVal-1].style.backgroundColor,game.eles[ranVal-1].style.color];
        const win = game.sel.includes(ranVal);
        console.log(win);
        const eles = output.querySelectorAll('.bet');
        eles.forEach((el)=>{
            el.remove();
            console.log(el);
        })
        <!-- if player wins, winamount is set equal to # of squares on board -->
        if(win){
            const winAmount = total;
            <!-- adds win amount to player -->
            game.coins += winAmount;
            <!-- changes message -->
            message.innerHTML = `Winner on ${ranVal} you won ${winAmount}`;
            <!-- changes square to green -->
            createEle(game.eles[ranVal-1],'div','$','bet');
            game.eles[ranVal-1].style.backgroundColor ='green';
        }else{
            <!-- changes message to loss, winning square turns purp -->
            message.innerHTML = `Lost sorry you did not bet on ${ranVal}`; 
            game.eles[ranVal-1].style.backgroundColor ='purple';
        }
        <!-- clears bet squares , updates score-->
        game.sel = [];
        updateScore();
        game.eles.forEach((el)=>{
            el.bet = false;
        })
    }
    <!--creating the actual board -->
function createBoard(){
    <!-- for loop to make board and adds function to squares -->
    for(let i=0;i<total;i++){
        <!-- calls function to create new div -->
        const temp = createEle(output,'div',`${i+1}`,'box');
        <!-- alternates red and black for squares -->
        if(i%2){
            temp.style.backgroundColor = 'red';
        }else{
            temp.style.backgroundColor = 'black';  
            temp.style.color = 'white';
        }
        <!-- adds to array sets bet to false,  -->
        game.eles.push(temp);
        temp.bet = false;
        temp.addEventListener('click',(e)=>{
            <!-- if there was winner resets the board -->
            if(game.winner){
                const parTemp = game.eles[game.winner];
                parTemp.style.backgroundColor = game.styler[0];
                parTemp.style.color = game.styler[1];  
                game.winner = false;
                const bets = parTemp.querySelector('.bet');
                if(bets) {bets.remove();}
            }
            console.log(temp.textContent);
            <!-- adds et and removes bet, changes coin count based on additon/rmoval of bet -->
            if(temp.bet){
                console.log(game.winner);
                const bets = temp.querySelector('.bet');
                bets.remove();
                //console.log(bets);
                temp.bet = false;
                game.coins++;
                const index = game.sel.indexOf(i+1);
                if(index > -1){
                    game.sel.splice(index,1);
                }
            }else{
                game.sel.push(i+1);
                game.coins--;
                temp.bet = true;
                createEle(temp,'div','$','bet');
            }
            updateScore();
        },true);
    }
    output.style.setProperty(`grid-template-columns`,`repeat(${game.x},1fr)`)
}
<!-- updates player coin value and displays on age -->
function updateScore(){
    score.innerHTML = `Coins : ${game.coins}`;
    console.log(game.sel);
}
function createEle(parent,eleType,html,eleClass){
    const ele = document.createElement(eleType);
    ele.innerHTML = html;
    ele.classList.add(eleClass);
    return parent.appendChild(ele);
}
/*
const div = document.createElement('div');
div.innerHTML  = 'Hello World';
div.classList.add('myClass');
gamearea.append(div);
*/
</script>