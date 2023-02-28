<!-- ---
layout: default
--- -->

<!-- <link rel="stylesheet" href="assets/css/chess.css" type="text/css"> -->
<style>
    .container{
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.endgame{
    align-items: center;
    justify-content: center;
    display:flex;
    flex-direction: column;
    border:1px solid black;
    border-radius: 10px;
    padding: 10px;
    height: 500px;
    width: 500px;
}
.button{
    margin-top: 0%;
    margin-bottom:10%;
    height: 75px;
    width: 150px;
    background-color: black;
    border:1px solid black;
    border-radius: 5px;
    transition-duration: 0.4s;
    color: white;
    border:1px solid rgb(255, 255, 255);
}
.button:hover{
    background-color: grey;
    border:1px solid grey;
}
.winLose{
    margin-top: 5%;
    font-size: 65;
}
</style>
<div class="container">
    <div class="endgame">
    <p class="winLose"> You Win</p>
    <button class="button"> Start Game </button>
    <button class="button"> Join Game </button>
    </div>
</div>