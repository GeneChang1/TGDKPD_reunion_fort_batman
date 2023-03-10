<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="main.css">
    <h1>Battleship</h1>
</head>
<body>
	<div id="board">
		<div id="messageArea"></div>
		<table>
			<tr>
				<th class="numbers"></th>
				<th class="numbers">0</th>
				<th class="numbers">1</th>
				<th class="numbers">2</th>
				<th class="numbers">3</th>
				<th class="numbers">4</th>
				<th class="numbers">5</th>
				<th class="numbers">6</th>
			</tr>
			<tr>
				<th class="letters">A</th>
				<td><div id="00"></div></td>
				<td><div id="01"></div></td>
				<td><div id="02"></div></td>
				<td><div id="03"></div></td>
				<td><div id="04"></div></td>
				<td><div id="05"></div></td>
				<td><div id="06"></div></td>
			</tr>
				<tr>
				<th class="letters">B</th>
				<td><div id="10"></div></td>
				<td><div id="11"></div></td>
				<td><div id="12"></div></td>
				<td><div id="13"></div></td>
				<td><div id="14"></div></td>
				<td><div id="15"></div></td>
				<td><div id="16"></div></td>
			<tr>
				<th class="letters">C</th>
				<td><div id="20"></div></td>
				<td><div id="21"></div></td>
				<td><div id="22"></div></td>
				<td><div id="23"></div></td>
				<td><div id="24"></div></td>
				<td><div id="25"></div></td>
				<td><div id="26"></div></td>
			</tr>
				</tr>
				<tr>
				<th class="letters">D</th>
				<td><div id="30"></div></td>
				<td><div id="31"></div></td>
				<td><div id="32"></div></td>
				<td><div id="33"></div></td>
				<td><div id="34"></div></td>
				<td><div id="35"></div></td>
				<td><div id="36"></div></td>
			</tr>
			<tr>
				<th class="letters">E</th>
				<td><div id="40"></div></td>
				<td><div id="41"></div></td>
				<td><div id="42"></div></td>
				<td><div id="43"></div></td>
				<td><div id="44"></div></td>
				<td><div id="45"></div></td>
				<td><div id="46"></div></td>
			</tr>
			<tr>
				<th class="letters">F</th>
				<td><div id="50"></div></td>
				<td><div id="51"></div></td>
				<td><div id="52"></div></td>
				<td><div id="53"></div></td>
				<td><div id="54"></div></td>
				<td><div id="55"></div></td>
				<td><div id="56"></div></td>
			</tr>
			<tr>
				<th class="letters">G</th>
				<td><div id="60"></div></td>
				<td><div id="61"></div></td>
				<td><div id="62"></div></td>
				<td><div id="63"></div></td>
				<td><div id="64"></div></td>
				<td><div id="65"></div></td>
				<td><div id="66"></div></td>
			</tr>
		</table>
	</div>
</body>
</html>


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
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.board {
	position: relative;
	width: 100%;
	min-width: 550px;
}
.messageArea {
	width: 100%;
	text-align: center;
	margin-top: 5px;
	color: #f4f8ff;
	font-size: 50px;
}
table {
	border-spacing: 3px;
	margin: 0 auto;
}
td {
	position: relative;
	width: 70px;
	height: 70px;
	border: 2px solid #ffffff;
	border-radius: 15px;
	text-align: center;
}
td:hover {
	background: #58595b;
}
td div {
 	width: 70px;
	height: 70px;
 }
.numbers, .letters {
	text-align: center;
	font-size: 20px;
	color: #ffffff;
	height: 40px;
	width: 40px;
	border: none;
}
.hit {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 60px;
  height: 30px;
  background: #964B00;
  border-radius: 5px 5px 50px 35px;
}
.hit::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  width: 10px;
  height: 10px;
  background: #cf8236; 
  border-radius: 50%;
  box-shadow: 15px 0 #cf8236,
              30px 0 #cf8236;
}
.hit::before {
  content: '';
  position: absolute;
  bottom: 30px;
  left: 10px;
  width: 16px;
  height: 30px;
  background: #c9bcaf;
  box-shadow: 15px 4px 0 -4px #c9bcaf;  
}
.miss {
  width: 60px;
  height: 10px;
  position: absolute;
  top: 30px;
  left: 5px;
  border-radius: 5px;
  background: #ffffff;
  transform-origin: center center;
  transform: rotate(45deg);
}
.miss::after {
  content: '';
  width: 60px;
  height: 10px;
  top: 0px;
  left: 0px;
  position: absolute;  
  border-radius: 5px;
  background: #ffffff;
  transform: rotate(270deg);
}
</style>


<script>

// The model represents the game logic and contains the data and functions that manage the state of the game. 
// It also has functions to fire at a location, check if a ship is sunk, generate random ship locations, and detect if there is a collision between ships.
// This creates an object called model which contains properties for the game board size, number of ships, length of ships, and number of ships that have been sunk.
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships:[
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	], // This creates an array of three ship objects, each containing an array of ship locations and an array to track whether each location has been hit.
	
	fire: function(guess) { //This creates a method called fire that takes a guess parameter.
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess); 
		  if (ship.hits[index] === "hit") {
				view.displayMessage("You hit this ship before.");
				return true;
			} else if (index >= 0) {
					ship.hits[index] = "hit";
					view.displayHit(guess);
					view.displayMessage("It's a hit!");
					if (this.isSunk(ship)) {
						view.displayMessage("You sunk my battleship!");
						this.shipsSunk++;
					}
					return true; // This loops through each ship in the ships array to check if the guess matches one of the ship's locations. If it does, the corresponding hits array element is updated to "hit", and the isSunk method is called to check if the ship has been sunk. If the ship has been sunk, the shipsSunk count is incremented.
				}
		}
		view.displayMiss(guess);
		view.displayMessage("It's a miss!");
		return false;
	},

// The view is responsible for displaying the game to the user. It contains functions to display messages, hits, and misses on the board.

	isSunk: function(ship) {
		for (i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
				this.ships[i].locations = locations;
		}
				console.log("");
		console.log(this.ships);
	}, 
// These are methods for generating ship locations and checking if there is a collision between ships.
	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { 
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else { 
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}

};

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class","hit");

	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class","miss");
	}
};

// The controller acts as a connection between the model and the view. 
// It contains a function to process user guesses and update the state of the game. 
// It also contains a variable to keep track of the number of guesses made.

var controller = {
	guesses: 0,
	processGuess: function(location) {
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sunk all of my battleships in " + this.guesses + " tries.");
var end = document.getElementById("guessInput").disabled = true;
			}
		}
	}
}

window.onload = init;

function init() {

	var guessClick = document.getElementsByTagName("td");
		for (var i = 0; i < guessClick.length; i++) {
			guessClick[i].onclick = answer;
		}

	model.generateShipLocations();
	view.displayMessage("Welcome to Battleship! There are 3 ships randomly placed, the goal is to sink them all in the least amount of guesses.");
}

function answer(eventObj) {
	var shot = eventObj.target;
	var location = shot.id;
	controller.processGuess(location);
}
</script>
<html>
  <head>
    <title>Leaderboard</title>
    <style>
      #score-form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
      #username-input, #score-input {
        padding: 5px;
        margin-right: 10px;
      }
      #submit-button {
        padding: 5px;
        background-color: #000000;
        color: white;
        border-style: solid;
		border-color: white;
		border-width: 1px;
        cursor: pointer;
      }
      #message {
        margin-top: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h2>Battleship Leaderboard</h2>
    <table>
      <tr>
        <th>Rank</th>
        <th>Score</th>
      </tr>
      <tr>
        <td>1</td>
        <td id="highScore">17</td>
      </tr>
      <tr>
        <td>2</td>
        <td id="middleScore">22</td>
      </tr>
      <tr>
        <td>3</td>
        <td id="lowScore">48</td>
      </tr>
    </table>
    <div id="score-form">
      <input type="text" id="username-input" placeholder="Enter username">
      <input type="number" id="score-input" placeholder="Enter score">
      <button id="submit-button">Submit</button>
    </div>
    <div id="message"></div>
    <script>
      const submitButton = document.getElementById('submit-button');
      submitButton.addEventListener('click', () => {
        const usernameInput = document.getElementById('username-input');
        const scoreInput = document.getElementById('score-input');
        const message = document.getElementById('message');
		var data = {username: usernameInput.value, score: scoreInput.value};
		data = JSON.parse(JSON.stringify(data))
		console.log(data)
		fetch('https://tngc.nighthawkcodescrums.gq/api/battleship_users/create',
		{method: "POST", 
		headers:{
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)})
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.error(error);
		});
      })
		// The code also includes an event listener for a submit button that sends the user's username and score to a server using a POST request. 
		fetch('https://tngc.nighthawkcodescrums.gq/api/battleship_users/scores', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
		// // There is also a GET request to retrieve high scores from the server.
        .then(response => response.json().then(data => {
            console.log(data)
			document.getElementById("lowScore").innerHTML = data.lowScore
			document.getElementById("middleScore").innerHTML = data.middleScore
			document.getElementById("highScore").innerHTML = data.highScore
        })
        )
        .then(response => console.log(response))
        .catch(err => console.error(err))
    </script>
  </body>
</html>
