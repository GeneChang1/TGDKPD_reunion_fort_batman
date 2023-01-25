<a href="https://www.chess.com/learn-how-to-play-chess">
    <button>How do I play chess?<button>
<a href="{{ site.baseurl }}/2022/10/23/Feedback.html">
    <button>Report an Issue<button>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <style>
            .chess-board { border-spacing: 0; border-collapse: collapse; width: 0%;}
            .chess-board th { padding: 2em; }
            .chess-board td { border: 1px solid; width: 1em; height: 1em; text-align: center;}
            .chess-board .light { background: #FFFFFF; }
            .chess-board .dark { background: #808080; }
            .chess-board .selected { background: #f0ff00; }
            .chess-board .letnum {background: #FFFFFF; font-size: 35px; padding: 1em;}
        </style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>
    <body>
        <table class="chess-board" id="chess-board">
            <tbody>
                <tr>
                    <th class="letnum"></th>
                    <th class="letnum">a</th>
                    <th class="letnum">b</th>
                    <th class="letnum">c</th>
                    <th class="letnum">d</th>
                    <th class="letnum">e</th>
                    <th class="letnum" style="font-size: 37.5px;">f</th>
                    <th class="letnum">g</th>
                    <th class="letnum">h</th>
                </tr>
                <tr>
                    <th class="letnum">8</th>
                    <td  id="a8"></td>
                    <td id="b8"></td>
                    <td  id="c8"></td>
                    <td id="d8"></td>
                    <td  id="e8"></td>
                    <td id="f8"></td>
                    <td  id="g8"></td>
                    <td id="h8"></td>
                </tr>
                <tr>
                    <th class="letnum">7</th>
                    <td id="a7"></td>
                    <td  id="b7"></td>
                    <td id="c7"></td>
                    <td  id="d7"></td>
                    <td id="e7"></td>
                    <td  id="f7"></td>
                    <td id="g7"></td>
                    <td  id="h7"></td>
                </tr>
                <tr>
                    <th class="letnum">6</th>
                    <td  id="a6"></td>
                    <td id="b6"></td>
                    <td  id="c6"></td>
                    <td id="d6"></td>
                    <td  id="e6"></td>
                    <td id="f6"></td>
                    <td  id="g6"></td>
                    <td id="h6"></td>
                </tr>
                <tr>
                    <th class="letnum">5</th>
                    <td id="a5"></td>
                    <td  id="b5"></td>
                    <td id="c5"></td>
                    <td  id="d5"></td>
                    <td id="e5"></td>
                    <td  id="f5"></td>
                    <td id="g5"></td>
                    <td  id="h5"></td>
                </tr>
                <tr>
                    <th class="letnum">4</th>
                    <td  id="a4"></td>
                    <td id="b4"></td>
                    <td  id="c4"></td>
                    <td id="d4"></td>
                    <td  id="e4"></td>
                    <td id="f4"></td>
                    <td  id="g4"></td>
                    <td id="h4"></td>
                </tr>
                <tr>
                    <th class="letnum">3</th>
                    <td id="a3"></td>
                    <td  id="b3"></td>
                    <td id="c3"></td>
                    <td  id="d3"></td>
                    <td id="e3"></td>
                    <td  id="f3"></td>
                    <td id="g3"></td>
                    <td  id="h3"></td>
                </tr>
                <tr>
                    <th class="letnum">2</th>
                    <td  id="a2"></td>
                    <td  id="b2"></td>
                    <td  id="c2"></td>
                    <td  id="d2"></td>
                    <td  id="e2"></td>
                    <td  id="f2"></td>
                    <td  id="g2"></td>
                    <td  id="h2"></td>
                </tr>
                <tr>
                    <th class="letnum">1</th>
                    <td id="a1"></td>
                    <td  id="b1"></td>
                    <td id="c1"></td>
                    <td  id="d1"></td>
                    <td id="e1"></td>
                    <td  id="f1"></td>
                    <td id="g1"></td>
                    <td  id="h1"></td>
                </tr>
            </tbody>
        </table>
    </body>
    <script src="assets/js/chessLogic.js">
    </script>
    <script>
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
        let color = false;
        let moving = false;
        function putOnBoard(id) {
            document.getElementById(id).innerHTML = chessPieces[chessBoard[id][0].split("")[0]+chessBoard[id][0].split("")[1]];
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
        lettersOnBoard = "abcdefgh";
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
            wP: "♙",
            wR: "♖",
            wN: "♘",
            wB: "♗",
            wQ: "♕",
            wK: "♔",
            OO: "",
            bP: "♟",
            bR: "♜",
            bN: "♞",
            bB: "♝",
            bQ: "♛",
            bK: "♚",
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
        putBoard()
        //function to add the board to the table
        //adds the onclick events to each td in the table
        var table = document.getElementById("chess-board");
        if (table != null) {
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++)
                table.rows[i].cells[j].onclick = function () {
                    move(this);
                };
            }
        }
        function move(id){
            var td = $(id).closest('td').attr('id')
            if (!moving && document.getElementById(td).innerHTML != "" && turnMoveCheck(td)){
                moving = true
                if (td.innerHTML != ""){
                    currentM.push(td);
                    var moves = chessBoard[td][1].getAvailableMoves();
                    moves.forEach((c) => {
                        document.getElementById(c).classList.replace('dark', 'selected');
                        document.getElementById(c).classList.replace('light', 'selected');
                    })
                } 
            }else if (document.getElementById(td).className == "selected"){
                movePiece(currentM[0], td)
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
                if (document.getElementById(td).innerHTML != "" && turnMoveCheck(td)){
                    move(id);
                }
            }
        }
        function turnMoveCheck(td){
            if (turn % 2 == 1 && chessBoard[td][0][0] == "b"){
                return true
            }
            if (turn % 2 == 0 && chessBoard[td][0][0] == "w"){
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
    <script>
    </script>
</html>