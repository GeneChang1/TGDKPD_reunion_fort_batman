---
layout: default
---

<html>


<head>
<meta charset="UTF-8"> 
<title>Chessboard</title>

<link rel="stylesheet" href="assets/css/chess.css" type="text/css">
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
</style>


</head>

<body id="body">
</body>
<input type='text' id="uid" placeholder="uid">
<input type='text' id="gid" placeholder="gid">
<button type="button" onclick="joinGame()">Join or Start Game</button>
<button type="button" onclick="checkMove()">Check move</button>
<script src="assets/js/chessLogic.js">
</script>
<script>
    let color = true;
    let moving = false;
    lettersOnBoard = "abcdefgh";
    let gameMoves = [];
    let localColor;
    var lastMove = []
    const url = "https://tngc.nighthawkcodescrums.gq/api/server"
    // const url = "http://10.8.136.159:8087/api/server"
    //useful functions
    function globalIDs(){
        gid = document.getElementById("gid").value
        localuid = document.getElementById("uid").value
    }
    function checkMove(){
        let moveCheckOptions = {
            mode : 'cors',
            method : 'GET'
        }
        fetch(url + '/', moveCheckOptions)
        .then(response => {
            if (response.status !== 200) {
            console.log(errorMsg);
            return;
            }
            response.json().then(data => {
            data.forEach((c) => {
                if (c[[gid]] != undefined){
                    var newMoves = [c[[gid]]["move1"], c[[gid]]["move2"]]
                    if (lastMove != newMoves){
                        chessBoard[newMoves[0]][1].move(newMoves[1], newMoves[0])
                        putBoard()
                        turn++
                    }
                }
            })
        })
        })
    }
    function pushMove(currentM, newM){
        let movePushOptions = {
            mode : 'cors',
            method: 'POST',
            body : JSON.stringify([gid, currentM, newM])
        }
        fetch(url + '/pushMove', movePushOptions)
        .then(response => {
            if (response.status !== 200) {
            console.log(errorMsg);
            return;
            }
        })
    }
    function joinGame(){
        globalIDs()
        var options = {
            mode : 'cors',
            method: 'GET'
        }
        fetch(url + "/", options)
        .then(response => {
        if (response.status !== 200) {
          console.log(errorMsg);
          return;
        }
        response.json().then(data => {
            gameCreate = true;
            data.forEach((c) => {
                try{
                    if (c[[gid]] != undefined && c[[gid]]["uid2"] == 1234){
                        addSecondPlayer(gid)
                        gameCreate = false
                        return;
                    }
                    else {
                        gameCreate = true
                    }
                } catch{}
            })
            if (gameCreate){
                createNewGame(gid)
            }
            var gameID = gid;
        })
        })
        startGame()
    }
    function addSecondPlayer(gid){
        localColor = "b"
        secondPlayerOptions ={
            mode : 'cors',
            method: 'POST',
            body: JSON.stringify([localuid, gid]),
        }
        fetch(url + "/secondPlayer", secondPlayerOptions)
        .then(response => {
            if (response.status !== 200) {
                console.log(errorMsg);
            return;
            }
        })
        return;
    }
    function createNewGame(gid){
        localColor = "w"
        createGameOptions = {
            mode : 'cors',
            method: 'POST',
            body : JSON.stringify({[gid] : {'uid1' : localuid, 'uid2' : 1234, 'move1' : 'move1', 'move2' : 'move2'}})
        }
        fetch(url + "/start", createGameOptions)
        .then(response => {
            if (response.status !== 200) {
                console.log(errorMsg);
            return;
            }
        })
    }
    // startGame()
    function getKeyByValue(object, value, type) {
        if (type == 1){
            return Object.keys(object).find(key => object[key] === value);
        }
        if (type == 2){
            return Object.keys(object).find(key => object[0][key] === value);
        }
        else{
            return "";
        }
    }
    function setBoard(obj){
            chessBoard[obj.position] = [obj.color + obj.id, obj]
    }
    function movePiece(currentM, newM){
            chessBoard[currentM][1].move(newM, currentM)
            pushMove(currentM, newM)
    }
    function putOnBoard(id) {
            document.getElementById(id + "i").src = chessPieces[chessBoard[id][0][0]+chessBoard[id][0][1]];
            document.getElementById(id).style.fontSize = "60px";
            try{document.getElementById(id).classList.remove('selected')}catch{}
            if (id.split("")[1] == "1") color = !color;
            if (color){document.getElementById(id).classList.add('dark');}
            else document.getElementById(id).classList.add('light');
            color = !color;
    }
    function putBoard(){
            for (x in chessBoard){
                putOnBoard(x);
            }
    }
    function startGame(){
        // apiStartGame()
        var chessBoardDiv = document.createElement('div')
        chessBoardDiv.id = "chessBoard"
        chessBoardDiv.classList.add('chessboard')
        document.getElementById("body").appendChild(chessBoardDiv)
        if (localColor == "w"){
            for (let i = 1; i < 9; i++){
                for (j in lettersOnBoard){
                    var thisId = lettersOnBoard[j] + (9 - i);
                    var square = document.createElement('div')
                    square.id = thisId
                    document.getElementById("chessBoard").appendChild(square)
                }
            }  
        }
        else {
            for (let i = 1; i < 9, i++){
                for (j in lettersOnBoard){
                    var thisId = lettersOnBoard[j] + i;
                    var square = document.createElement('div')
                    square.id = thisId
                    document.getElementById("chessBoard").appendChild(square)
                }
            }  
        } 
        // all of the setup
        chessBoard = {};
        //assigns the board
        for (j = 0; j <= 7; j++){
            letter = lettersOnBoard[j];
            for (i = 1; i <= 8; i++){
                var newKey = letter + i;
                chessBoard[newKey] = ["OO", undefined]
            }
        }
        currentM = [];
        // assigns chess piece codes to their emoji 
        chessPieces = {
            wP: "https://user-images.githubusercontent.com/111609656/217071573-b89fe06e-7fcf-40d3-a3f5-24b2df70fce3.png",
            wR: "https://user-images.githubusercontent.com/111609656/217149242-f921fbdc-10fe-4cc8-a3dc-e11874f80342.png",
            wN: "https://user-images.githubusercontent.com/111609656/217149238-5915e9c8-321c-4854-bc15-4bb6908a7895.png",
            wB: "https://user-images.githubusercontent.com/111609656/217149235-08bef402-7b72-4838-9c29-82c9ab50cdd7.png",
            wQ: "https://user-images.githubusercontent.com/111609656/217149240-2f8e9f11-2704-40b2-94a8-b14670b36dda.png",
            wK: "https://user-images.githubusercontent.com/111609656/217149237-14eacace-d8f1-4c6d-bf4c-59169f7cfbf3.png",
            OO: "",
            bP: "https://user-images.githubusercontent.com/111609656/217159745-c92d8368-206d-4c94-ac21-dbf53b231361.png",
            bR: "https://user-images.githubusercontent.com/111609656/217159750-a6d36405-9bea-4a15-a907-5e6a8f18024a.png",
            bN: "https://user-images.githubusercontent.com/111609656/217159743-247f6125-fb62-4e7c-abe4-b104156f519f.png",
            bB: "https://user-images.githubusercontent.com/111609656/217159737-a9c0df5f-0716-4915-b112-91eb254bad85.png",
            bQ: "https://user-images.githubusercontent.com/111609656/217159747-4eaf5833-f3df-4b86-9bff-1a91a4dbfcf3.png",
            bK: "https://user-images.githubusercontent.com/111609656/217159740-ef2994a2-3e67-4cb2-9471-00fc883789fd.png",
        }
        endGameBool = false;
        //move counter
        turn = 0;
        //Queens
        queenw = new queen("d1", "w")
        setBoard(queenw)
        queenb = new queen("d8", "b")
        setBoard(queenb)
        //Bishops
        bishopb1 = new bishop("c8", "b");
        setBoard(bishopb1)
        bishopb2 = new bishop("f8", "b");
        setBoard(bishopb2)
        bishopw1 = new bishop("c1", "w");
        setBoard(bishopw1)
        let bishopw2 = new bishop("f1", "w");
        setBoard(bishopw2)
        //Rooks
        rookb1 = new rook("a8", "b");
        setBoard(rookb1)
        rookb2 = new rook("h8", "b");
        setBoard(rookb2)
        rookw1 = new rook("a1", "w");
        setBoard(rookw1)
        rookw2 = new rook("h1", "w");
        setBoard(rookw2)
        //Pawns
        pawnw1 = new pawn("a2", "w")
        setBoard(pawnw1)
        pawnw2 = new pawn("b2", "w")
        setBoard(pawnw2)
        pawnw3 = new pawn("c2", "w")
        setBoard(pawnw3)
        pawnw4 = new pawn("d2", "w")
        setBoard(pawnw4)
        pawnw5 = new pawn("e2", "w")
        setBoard(pawnw5)
        pawnw6 = new pawn("f2", "w")
        setBoard(pawnw6)
        pawnw7 = new pawn("g2", "w")
        setBoard(pawnw7)
        pawnw8 = new pawn("h2", "w")
        setBoard(pawnw8)
        pawnb1 = new pawn("a7", "b")
        setBoard(pawnb1)
        pawnb2 = new pawn("b7", "b")
        setBoard(pawnb2)
        pawnb3 = new pawn("c7", "b")
        setBoard(pawnb3)
        pawnb4 = new pawn("d7", "b")
        setBoard(pawnb4)
        pawnb5 = new pawn("e7", "b")
        setBoard(pawnb5)
        pawnb6 = new pawn("f7", "b")
        setBoard(pawnb6)
        pawnb7 = new pawn("g7", "b")
        setBoard(pawnb7)
        pawnb8 = new pawn("h7", "b")
        setBoard(pawnb8)
        kingw = new king ("e1", "w")
        setBoard(kingw)
        kingb = new king ("e8", "b")
        setBoard(kingb)
        knightw1 = new knight ("b1", "w")
        setBoard(knightw1)
        knightw2 = new knight ("g1", "w")
        setBoard(knightw2)
        knightb1 = new knight ("b8", "b")
        setBoard(knightb1)
        knightb2 = new knight ("g8", "b")
        setBoard(knightb2)
        //puts the pieces on the board
        for (let i = 1; i < 9; i++){
            for (j in lettersOnBoard){
                const x = document.createElement('img') 
                var thisId = lettersOnBoard[j] + i;
                x.id=(thisId + "i")
                if (chessPieces[chessBoard[thisId][0][0]+chessBoard[thisId][0][1]] != ""){
                    x.src=(chessPieces[chessBoard[thisId][0][0]+chessBoard[thisId][0][1]])
                }
                document.getElementById(thisId).appendChild(x)
                document.getElementById(thisId).onclick = function () {move(this);};
            }
        }
        putBoard()
        }
        // startGame()
        function move(div){
            var id = div.id
            if (!moving && div.children[0].src[8] == "u" && turnMoveCheck()){
                moving = true
                if (div.children[0].src[8] == "u"){
                    currentM.push(id);
                    var moves = chessBoard[id][1].getAvailableMoves();
                    moves.forEach((c) => {
                        document.getElementById(c).classList.replace('dark', 'selected');
                        document.getElementById(c).classList.replace('light', 'selected');
                    })
                } 
            }else if (div.className == "selected"){
                divId = div.id
                if (chessBoard[divId][0][1] == "K"){
                    endGameBool = true;
                }
                movePiece(currentM[0], divId)
                gameMoves.push({["move" + turn] : [currentM[0], divId]})
                putBoard();
                if (endGameBool){setTimeout(() => endGame(localColor), 0)}
                moving = false;
                turn += 1;
                currentM = [];
            }else{
                putBoard();
                currentM = [];
                moving = false;
                if (div.children[0].src[8] == "u" && turnMoveCheck()){
                    move(id);
                }
            }
        }
        function turnMoveCheck(){
            if (turn % 2 == 1 && localColor == "b"){
                return true
            }
            if (turn % 2 == 0 && localColor == "w"){
                return true
            }
            else {
                return false;
            }
        }
        function turnColorCheck(color){
            if (color == "w" && turn % 2 == 0){
                return true;
            }
            if (color == "b" && turn % 2 == 1){
                return true
            }
            else{
                return false
            }
        }
        function endGame(color){
            for (let i = 1; i < 9; i++){
                for (j in lettersOnBoard){
                    var thisId = lettersOnBoard[j] + i;
                    document.getElementById(thisId).remove()
                }
            }   
            document.getElementById("chessBoard").remove();
            var container = document.createElement('div');
            var endgame = document.createElement('div');
            var newGame = document.createElement('button');
            container.classList.add('container');
            container.id = "container";
            endgame.classList.add('endgame');
            endgame.id = "endgame";
            newGame.classList.add('button');
            newGame.innerHTML = "New Game";
            newGame.onclick = function(){
                startGame(); 
                document.getElementById("container").remove();
                gameMoves = []}
            document.getElementById('body').appendChild(container)
            document.getElementById('container').appendChild(endgame)
            document.getElementById('endgame').appendChild(newGame)
        }
        // const url = "https://tngc.nighthawkcodescrums.gq/api/server1/put"
        // let options = {
        //     mode = 'CORS'
        //     body = JSON.stringify(moves);
        //     method = 'POST'
        //     }
        // fetch(url + "/update_game", options)
        // .then(response => {
        // if (response.status !== 200) {
        //   console.log(errorMsg);
        //   return;
        // }
        // response.json().then(data => {
        //     console.log(data);
        // })
</script>
<script>
</script>
</html>

