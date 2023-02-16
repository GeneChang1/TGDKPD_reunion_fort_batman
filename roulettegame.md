<html>
	<head>
		<title>JavaScript Game</title>
		<style>
			@import url("https://fonts.googleapis.com/css?family=Chakra+Petch");
			html,
			body {
				height: 100%;
				min-height: 100%;
				margin: 0;
				background: black;
				font-family: "Chakra Petch", sans-serif;
				color: #ffffff;
				padding: 15px;
				overflow-x: hidden;
				max-width: 100%;
				box-sizing: border-box;
			}
			.bet {
				position: absolute;
				max-width: 25px;
				padding: 3px;
				left: 0;
				right: 0;
				margin-left: auto;
				margin-right: auto;
				background-color: yellow;
				overflow: hidden;
				border-radius: 50%;
				color: black;
			}
			.output {
				display: grid;
				height: 80vh;
				padding: 0;
                width: 100%;
			}
			.box {
				position: relative;
				text-align: center;
				border: 1px solid #ddd;
			}

			h1 {
				text-align: left;
			}
			p {
				text-align: left;
				font-size: 1rem;
				margin-top: 10px;
				margin-bottom: 0px;
			}

            .gamearea {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .gamearea >button {
                width: 100px;
            }
		</style>
	</head>
	<body>
        <div class="container">
		<h1>Load your progress!</h1>
		<input placeholder="Username" id="user" type="text" />
		<button onclick="loadScore()">Load</button>
		<p>
			If you don't have an account, create a new one with 50 coins to start!
		</p>
		<button onclick="createAccount()">Create</button>
		<hr />
		<div class="gamearea"></div>
		<script src="game1.js"></script></div>
	</body>
	<script>
		const gamearea = document.querySelector(".gamearea");
		const score = createEle(gamearea, "div", "Score :", "score");
		const btn = createEle(gamearea, "button", "Spin", "btn");
		const message = createEle(gamearea, "div", "Press Spin", "message");
		const output = createEle(gamearea, "div", "", "output");
		const game = {
			x: 7,
			y: 9,
			coins: 50,
			sel: [],
			eles: [],
			winner: false,
			styler: ["black", "white"],
		};
		const total = game.x * game.y;
		btn.disabled = true;
		btn.addEventListener("click", spinner);
		createBoard();
		score.innerHTML = `Coins : ${game.coins}`;
		const isLocalhost = Boolean(
			window.location.hostname === "localhost" ||
				window.location.hostname === "[::1]" ||
				window.location.hostname.match(
					/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
				)
		);
		const api = isLocalhost ? "http://172.29.71.42:8087/api/roulette/" : "ENTER_UR_DEPLOYED_URL";

        // This function is called when the user wants to load their game score.
        // It retrieves the value of the 'user' input field from the webpage and sends it as a query parameter to an API endpoint using a Fetch request.
        // The API endpoint is expected to respond with a JSON object that includes the user's game score.
        // Once the response is received, it extracts the score from the JSON object and updates the game's 'coins' property with this value.
        // It also updates the webpage's 'score' element to display the updated score.
        // Finally, it shows an alert to notify the user that their score has been successfully loaded.
		const loadScore = async () => {
			const user = document.getElementById("user").value;
			const record = await fetch(
				api + "/roulette?" + new URLSearchParams({ user })
			).then((r) => r.json());
			console.log(record);
			game.coins = record.score;
			score.innerHTML = `Coins : ${game.coins}`;
            alert("Loaded your user!")
		};
		function spinner() {
			btn.disabled = true;
			const ranVal = Math.floor(Math.random() * total) + 1;
			console.log({ ranVal });
			game.winner = ranVal - 1;
			game.styler = [
				game.eles[ranVal - 1].style.backgroundColor,
				game.eles[ranVal - 1].style.color,
			];
			const win = game.sel.includes(ranVal);
			console.log({ win });
			const eles = output.querySelectorAll(".bet");
			eles.forEach((el) => {
				el.remove();
				console.log({ el });
			});
			if (win) {
				const winAmount = total;
				game.coins += winAmount;
				message.innerHTML = `Winner on ${ranVal} you won ${winAmount}`;
				createEle(game.eles[ranVal - 1], "div", "$", "bet");
				game.eles[ranVal - 1].style.backgroundColor = "green";
			} else {
				message.innerHTML = `Lost sorry you did not bet on ${ranVal}`;
				game.eles[ranVal - 1].style.backgroundColor = "purple";
			}
			game.sel = [];
			updateScore();
			game.eles.forEach((el) => {
				el.bet = false;
			});
		}
		function createBoard() {
			for (let i = 0; i < total; i++) {
				const temp = createEle(output, "div", `${i + 1}`, "box");
				if (i % 2) {
					temp.style.backgroundColor = "red";
				} else {
					temp.style.backgroundColor = "black";
					temp.style.color = "white";
				}
				game.eles.push(temp);
				temp.bet = false;
				temp.addEventListener(
					"click",
					(e) => {
						if (document.getElementById("user").value === "") {
							alert("Please enter a user to start!");
							return;
						}
						btn.disabled = false;
						if (game.winner) {
							const parTemp = game.eles[game.winner];
							parTemp.style.backgroundColor = game.styler[0];
							parTemp.style.color = game.styler[1];
							game.winner = false;
							const bets = parTemp.querySelector(".bet");
							if (bets) {
								bets.remove();
							}
						}
						console.log({ t: temp.textContent });
						if (temp.bet) {
							console.log({ w: game.winner });
							const bets = temp.querySelector(".bet");
							bets.remove();
							//console.log(bets);
							temp.bet = false;
							game.coins++;
							const index = game.sel.indexOf(i + 1);
							if (index > -1) {
								game.sel.splice(index, 1);
							}
						} else {
							game.sel.push(i + 1);
							game.coins--;
							console.log(game.coins);
							temp.bet = true;
							createEle(temp, "div", "$", "bet");
						}
						updateScore();
					},
					true
				);
			}
			output.style.setProperty(
				`grid-template-columns`,
				`repeat(${game.x},1fr)`
			);
		}
        // This function is called to update the user's score after they have played the game. It retrieves the value of the 'user' input field from the webpage and sends a PUT request to an API endpoint with the updated score in the request body. The API endpoint is expected to update the user's score in its database. 
        // It then updates the game's 'coins' property with the updated score and updates the webpage's 'score' element to display the new score. 
        // It also logs the game selection to the console.
		function updateScore() {
			const user = document.getElementById("user").value;
			fetch(api + "/roulette", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ user, score: game.coins }),
			});
			score.innerHTML = `Coins : ${game.coins}`;
			console.log({ s: game.sel });
		}
        // This function is called when a new user wants to create an account. It sets the initial value of the user's coins to 50 and sends a POST request to an API endpoint with the user's name and starting score in the request body. The API endpoint is expected to create a new user account in its database. 
        // It then displays an alert to notify the user that their account has been created, and updates the webpage's 'score' element to display the starting score. 
		function createAccount() {
			game.coins = 50;
			const user = document.getElementById("user").value;
			fetch(api + "create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ user: user, score: game.coins }),
			});
			alert("Account created!");
			score.innerHTML = `Coins : ${game.coins}`;
		}
		function createEle(parent, eleType, html, eleClass) {
			const ele = document.createElement(eleType);
			ele.innerHTML = html;
			ele.classList.add(eleClass);
			return parent.appendChild(ele);
		}
	</script>
</html>
