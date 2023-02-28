
// const url = 'http://172.17.66.185:8087/api/chess_users/'
const url = 'http://172.20.159.234:8087/api/chess_users'
// const url = 'http://localhost:8069/api/chess_users/'
// const url = 'https://tngc.nighthawkcodescrums.gq/api/chess_users/'
const username = localStorage.getItem("name")

function getData(){
    fetch(url + `/get_games/${username}`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json().then(data => {
        console.log("ran" + data)
        createTable(data)
    })
    )
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

getData()

function clearTable(){
    document.getElementById("matches").innerHTML = 
    `
    <tr>
    <th>Player 1</th>
    <th>Player 2</th>
    <th>Winner</th>
    <th>Played On</th>
    <th class="clickable">Delete</th>
    </tr>
    `
}

function createTable(input){
    clearTable()
    input.shift()
    input.forEach(element => {
    var data = JSON.parse(element.replaceAll(`'`, `"`))
    var player1 = data.uid1
    var player2 = data.uid2
    var winner = data.winner
    var dateRaw = data.date
    var date = new Date(dateRaw).toString().substring(0,24)

    var tr = document.createElement("tr");

    var properties = [player1, player2, winner, date, "Delete"]

    for (var i of properties){
        var td = document.createElement("td")
        td.innerHTML = i

        if (i == "Delete"){
            td.dataset.date = dateRaw
            td.onclick= deleteEntry
            td.classList = "clickable"
        }

        tr.appendChild(td)
    }

    document.getElementById("matches").appendChild(tr)
});
}

function deleteEntry(event){
    date = event.currentTarget.dataset.date
    var dataa = {name: username, date: parseInt(date)}
    dataa = JSON.stringify(dataa)
    console.log(dataa + "YIPEE")
    fetch(url + `/delete_game`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
        },
        body: dataa
    })
    .then(response => response.json().then(data => {
        console.log(data)
        getData()
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