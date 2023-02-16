//placeholder for api link
// const url = 'http://172.17.66.185:8087/api/Battleship_users/'
// const url = 'http://localhost:8069/api/Battleship_users/'
const url = 'https://tngc.nighthawkcodescrums.gq/api/battleship_users/'
const options = {
    method: 'POST',
    cache: 'default',
    credentials: 'omit',
    headers: {
        'Content-Type': 'application/json',
    }
}

// const options = {
//     method: 'PUT',
// }

document.getElementById("userForm").onsubmit = function(event){
    event.preventDefault()

    var username = document.getElementById("username").value.toString()
    var score = document.getElementById("score").value.toString()
        var data = `{ "username": "${username}", "score": "${score}"}`
        var data2 = JSON.parse(data)
        fetch(url + "create", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2)
        })
        .then(response => response.json().then(data => {
            console.log(data)
        })
        )
        .then(response => console.log(response))
        .catch(err => console.error(err))
        alert("stored data: " +data)

    // var data = `{ name: "dash", password: "pass", dob: "123"}`
    // console.log(data)
    // fetch(url + "create", {
    //     method: 'POST',
    //     headers:{
    //         'Content-Type': 'application/json',
    //         'Accept': '*/*',
    //         'Cache-Control': 'no-cache',
    //         'Connection': 'keep-alive'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json().then(data => {
        
    // })
    // )
    // .then(response => console.log(response))
}