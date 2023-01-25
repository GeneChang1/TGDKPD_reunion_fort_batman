//placeholder for api link
const url = "http://127.0.0.1:5000/api/chess_users/"
const options = {
    method: 'GET',
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

    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var passwordConfirm = document.getElementById("passwordConfirm").value
    var dob = document.getElementById("dob").value
    var values = [name, password, dob]


    var maxId = 0
    fetch(url, {method: 'GET', mode: 'no-cors', headers:{'Content-Type': 'application/json',}})
    .then(response => response.json().then(data => {
        data.forEach(element => {
            if(element.uid > maxId){
                maxId = element.uid
            }
        })
    }))
    .then(response => console.log(response))
    .catch(err => console.error(err))

    // only run if passwords match
    if(password === passwordConfirm){
        var data = `{ name: "${name}", password: "${password}", dob: "${dob}", uid: "${maxId + 1}"}`
        fetch(url + "create", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json().then(data => {
            
        })
        )
        .then(response => console.log(response))
        .catch(err => console.error(err))
        alert("stored data: " +data)
    } else {
        alert("Passwords don't match!")
    }
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