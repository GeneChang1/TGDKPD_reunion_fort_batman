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

<div id="a8" class="dark"></div>
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
</html>