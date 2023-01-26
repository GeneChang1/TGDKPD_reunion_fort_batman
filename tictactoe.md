---
layout: default
---

<html lang="{{ site.lang | default: "en-US" }}">

<head>

<style type="text/css">


.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 300px;
  height: 300px;
  border: 2px solid black;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
}

</style>

</head>

<div class="game-container">
  <div class="game-board">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>
</div>

</html>