# History
<style>
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
</style>
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
<table>
    <tr>
        <td>Players</td>
        <td>Moves</td>
    </tr>
    <tr>
        <td><p style="color:red">Toby</p> <p>vs</p> <p style="color:green">Dash</p></td>
        <td>3</td>
    </tr>
</table>
<script src="assets/js/history.js"></script>