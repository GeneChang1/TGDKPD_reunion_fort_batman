---
layout: default
---

<html>

<head>
<meta charset="UTF-8"> 
<title>Chessboard</title>

<style type="text/css">

.chessboard {
    width: 720px;
    height: 720px;
    margin: 0 330px;
    border: 25px solid #333;
}
.dark {
    float: left;
    width: 90px;
    height: 90px;
    background-color: #666;
    text-align:center;
    display: table-cell;
    vertical-align:middle;
}
.light {
    float: left;
    width: 90px;
    height: 90px;
    background-color: #aaa;
    text-align:center;
    display: table-cell;
    vertical-align:middle;
}
.selected {
    float: left;
    width: 90px;
    height: 90px;
    background-color: #f0ff00;
    text-align:center;
    display: table-cell;
    vertical-align:middle;
}

</style>

</head>

<body>

<div class="chessboard">

<div id="a8"></div>
<div id="b8"></div>
<div id="c8"></div>
<div id="d8"></div>
<div id="e8"></div>
<div id="f8"></div>
<div id="g8"></div>
<div id="h8"></div>

<div id="a7"></div>
<div id="b7"></div>
<div id="c7"></div>
<div id="d7"></div>
<div id="e7"></div>
<div id="f7"></div>
<div id="g7"></div>
<div id="h7"></div>

<div id="a6"></div>
<div id="b6"></div>
<div id="c6"></div>
<div id="d6"></div>
<div id="e6"></div>
<div id="f6"></div>
<div id="g6"></div>
<div id="h6"></div>

<div id="a5"></div>
<div id="b5"></div>
<div id="c5"></div>
<div id="d5"></div>
<div id="e5"></div>
<div id="f5"></div>
<div id="g5"></div>
<div id="h5"></div>

<div id="a4"></div>
<div id="b4"></div>
<div id="c4"></div>
<div id="d4"></div>
<div id="e4"></div>
<div id="f4"></div>
<div id="g4"></div>
<div id="h4"></div>

<div id="a3"></div>
<div id="b3"></div>
<div id="c3"></div>
<div id="d3"></div>
<div id="e3"></div>
<div id="f3"></div>
<div id="g3"></div>
<div id="h3"></div>

<div id="a2"></div>
<div id="b2"></div>
<div id="c2"></div>
<div id="d2"></div>
<div id="e2"></div>
<div id="f2"></div>
<div id="g2"></div>
<div id="h2"></div>

<div id="a1"></div>
<div id="b1"></div>
<div id="c1"></div>
<div id="d1"></div>
<div id="e1"></div>
<div id="f1"></div>
<div id="g1"></div>
<div id="h1"></div>
</div>
</body>
<script src="assets/js/chessLogic.js">
</script>
<script>
    lettersOnBoard = "abcdefgh";
            //useful functions
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
        }
        let color = true;
        let moving = false;
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
        let currentM = [];
        let localColor = "";
        // assigns chess piece codes to their emoji 
        let chessPieces = {
            wP: "https://user-images.githubusercontent.com/111609656/211652465-ed79ab00-e038-459a-99ae-31fcd770379c.png",
            wR: "https://user-images.githubusercontent.com/111609656/211652996-c0172ff0-be0a-4dbb-bb88-3171928d002e.png",
            wN: "https://user-images.githubusercontent.com/111609656/211653992-32ec4aa8-0efc-461c-ad3f-d920a7de3409.png",
            wB: "https://user-images.githubusercontent.com/111609656/211654176-b3c7d962-1b34-44be-9517-2bacbccbb0fe.png",
            wQ: "https://user-images.githubusercontent.com/111609656/211654354-0f620469-cc9e-4e53-ba86-4f6016a99946.png",
            wK: "https://user-images.githubusercontent.com/111609656/211654476-3a8ddc05-829d-4811-9dc9-9fa6b6a7e462.png",
            OO: "",
            bP: "https://user-images.githubusercontent.com/111609656/211784497-79850d37-9666-41e1-bc81-5cb9b8becea1.png",
            bR: "https://user-images.githubusercontent.com/111609656/211785224-44d3331d-1c23-4f9b-8b57-b8cb22a35ad7.png",
            bN: "https://user-images.githubusercontent.com/111609656/211785423-30a117d0-5217-4f90-8632-a35d06182765.png",
            bB: "https://user-images.githubusercontent.com/111609656/211785559-87619dcd-9225-4d71-9807-58e2bfb7b9c1.png",
            bQ: "https://user-images.githubusercontent.com/111609656/211785666-0fad7801-bf94-4da7-9b40-a0675421b9e6.png",
            bK: "https://user-images.githubusercontent.com/111609656/211785742-301835f0-cc33-4499-9364-c44461471ea5.png",
        }
        //move counter
        let turn = 0;
        //Queens
        let queenw = new queen("d1", "w")
        setBoard(queenw)
        let queenb = new queen("d8", "b")
        setBoard(queenb)
        //Bishops
        let bishopb1 = new bishop("c8", "b");
        setBoard(bishopb1)
        let bishopb2 = new bishop("f8", "b");
        setBoard(bishopb2)
        let bishopw1 = new bishop("c1", "w");
        setBoard(bishopw1)
        let bishopw2 = new bishop("f1", "w");
        setBoard(bishopw2)
        //Rooks
        let rookb1 = new rook("a8", "b");
        setBoard(rookb1)
        let rookb2 = new rook("h8", "b");
        setBoard(rookb2)
        let rookw1 = new rook("a1", "w");
        setBoard(rookw1)
        let rookw2 = new rook("h1", "w");
        setBoard(rookw2)
        //Pawns
        let pawnw1 = new pawn("a2", "w")
        setBoard(pawnw1)
        let pawnw2 = new pawn("b2", "w")
        setBoard(pawnw2)
        let pawnw3 = new pawn("c2", "w")
        setBoard(pawnw3)
        let pawnw4 = new pawn("d2", "w")
        setBoard(pawnw4)
        let pawnw5 = new pawn("e2", "w")
        setBoard(pawnw5)
        let pawnw6 = new pawn("f2", "w")
        setBoard(pawnw6)
        let pawnw7 = new pawn("g2", "w")
        setBoard(pawnw7)
        let pawnw8 = new pawn("h2", "w")
        setBoard(pawnw8)
        let pawnb1 = new pawn("a7", "b")
        setBoard(pawnb1)
        let pawnb2 = new pawn("b7", "b")
        setBoard(pawnb2)
        let pawnb3 = new pawn("c7", "b")
        setBoard(pawnb3)
        let pawnb4 = new pawn("d7", "b")
        setBoard(pawnb4)
        let pawnb5 = new pawn("e7", "b")
        setBoard(pawnb5)
        let pawnb6 = new pawn("f7", "b")
        setBoard(pawnb6)
        let pawnb7 = new pawn("g7", "b")
        setBoard(pawnb7)
        let pawnb8 = new pawn("h7", "b")
        setBoard(pawnb8)
        let kingw = new king ("e1", "w")
        setBoard(kingw)
        let kingb = new king ("e8", "b")
        setBoard(kingb)
        let knightw1 = new knight ("b1", "w")
        setBoard(knightw1)
        let knightw2 = new knight ("g1", "w")
        setBoard(knightw2)
        let knightb1 = new knight ("b8", "b")
        setBoard(knightb1)
        let knightb2 = new knight ("g8", "b")
        setBoard(knightb2)
        //puts the pieces on the board
        for (let i = 1; i < 9; i++){
            for (j in lettersOnBoard){
                const x = document.createElement('img') 
                let thisId = lettersOnBoard[j] + i;
                x.id=(thisId + "i")
                if (chessPieces[chessBoard[thisId][0][0]+chessBoard[thisId][0][1]] != ""){
                    x.src=(chessPieces[chessBoard[thisId][0][0]+chessBoard[thisId][0][1]])
                }
                document.getElementById(thisId).appendChild(x)
                document.getElementById(thisId).onclick = function () {move(this);};
            }
        }
        putBoard()
        function move(div){
            var id = div.id
            if (!moving && div.children[0].src[8] == "u" && turnMoveCheck(id)){
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
                movePiece(currentM[0], div.id)
                putBoard();
                moving = false;
                if (turn == 0){localColor = "w"}
                if (turn == 1){localColor = "b"}
                turn += 1;
                currentM = [];
            }else{
                putBoard();
                currentM = [];
                moving = false;
                if (div.children[0].src[8] == "u" && turnMoveCheck(id)){
                    move(id);
                }
            }
        }
        function turnMoveCheck(id){
            if (turn % 2 == 1 && chessBoard[id][0][0] == "b"){
                return true
            }
            if (turn % 2 == 0 && chessBoard[id][0][0] == "w"){
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
</script>
</html>