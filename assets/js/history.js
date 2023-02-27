var val = document.getElementById("search").value
document.getElementById("text").innerHTML += document.getElementById("search").value

// const url = 'http://172.17.66.185:8087/api/chess_users/'
// const url = 'http://localhost:8069/api/chess_users/'
const url = 'https://tngc.nighthawkcodescrums.gq/api/chess_users/'


fetch(url + "/", {
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
    var data = JSON.parse(input)
    var player1 = data.uid1
    var player2 = data.uid2
    var winner = data.winner
    var date = data.dop

    var properties = [player1, player2, winner, date]

    for (var i of properties){
        var td = document.createElement("td")
        td.innerHTML = i

        tr.appendChild(td)
    }

    document.getElementById("matches").appendChild(tr)
    
}
{/* <th>Player 1</th>
<th>Player 2</th>
<th>Winner</th>
<th>Moves</th>
<th>Played On</th>
<th class="clickable" id="deleteAll" onclick="deleteAll()">Delete</th> */}