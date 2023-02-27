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
        .container {
            width:90%;
            overflow: hidden;
            margin: 20px auto;
            padding: 20px;
        }
        .container ul{
            padding: 0px;
            margin: 0px;
        }
        .container ul li{
            list-style: none;
            float: left;
            width: 20%;
            height: 200px;
            background-image: url(images/chessEndgameEx.png);
            background-repeat: no-repeat;
            background-size: 100%;
            margin: 40px 30px 0px 20px;
            box-sizing: border-box;
            border: 2px solid white;
        }
        .container ul li:hover {
            opacity: 0.9;
        }
        .container ul li .title{
            width: 100%;
            height: 50px;
            line-height: 50px;
            background: white;
            text-align: center;
            color: black;
        }
        @media screen and (max-width:1200px){
            .container ul li{
                width:40%;
                margin: 40px;
            }
        }
        table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        }
        table td, table th {
            border: 1px solid #252525;
            padding: 8px;
        }
        table tr {background-color: #696969;}
        table tr:hover {background-color: #696969;}
        table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #bbbbbb;
            color: white;
        }
        .clickable:hover {
          cursor: pointer;
        }
    </style>
</head>
<label for="search">Search:</label>
<input id="search" type="text">
<input type="button" value="Submit" onclick='document.getElementById("text").innerHTML += document.getElementById("search").value'>
<br>
<div class="container">
    <ul>
        <li><div class="title">Player 1 vs Player 2</div></li>
        <li><div class="title">Player 3 vs Player 2</div></li>
        <li><div class="title">Player 4 vs Player 2</div></li>
        <li><div class="title">Player 3 vs Player 4</div></li>
        <li><div class="title">Player 4 vs Player 1</div></li>
        <li><div class="title">Player 1 vs Player 3</div></li>
    </ul>
</div>
<div>
    <table id="matches">
        <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Winner</th>
            <th>Played On</th>
            <th class="clickable" id="deleteAll" onclick="deleteEntry()">Delete</th>
        </tr>
    </table>
</div>
<script src="assets/js/history.js"></script>

