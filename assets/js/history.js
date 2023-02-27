
// const url = 'http://172.17.66.185:8087/api/chess_users/'
const url = 'http://172.19.164.171:8087/api/chess_users'
// const url = 'http://localhost:8069/api/chess_users/'
// const url = 'https://tngc.nighthawkcodescrums.gq/api/chess_users/'


fetch(url + `/get_games/111`, {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json',
    }
})
.then(response => response.json().then(data => {
    createTable(data)
})
)
.then(response => console.log(response))
.catch(err => console.error(err))


function createTable(input){
    input.shift()
    input.forEach(element => {
    var data = JSON.parse(element.replaceAll(`'`, `"`))
    var player1 = data.uid1
    var player2 = data.uid2
    var winner = data.winner
    var date = data.date

    var tr = document.createElement("tr");

    var properties = [player1, player2, winner, date]

    for (var i of properties){
        var td = document.createElement("td")
        td.innerHTML = i

        tr.appendChild(td)
    }

    document.getElementById("matches").appendChild(tr)
});
}

function deleteEntry(){
    fetch(url + `/get_games/`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json().then(data => {
        createTable(data)
    })
    )
    .then(response => console.log(response))
    .catch(err => console.error(err))
}
/* <th>Player 1</th>
<th>Player 2</th>
<th>Winner</th>
<th>Moves</th>
<th>Played On</th>
<th class="clickable" id="deleteAll" onclick="deleteAll()">Delete</th> */