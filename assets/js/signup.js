//placeholder for api link
// const url = 'http://172.17.66.185:8087/api/chess_users/'
// const url = 'http://localhost:8069/api/chess_users/'
const url = 'https://tngc.nighthawkcodescrums.gq/api/chess_users/'
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
//345345345345
document.getElementById("userForm").onsubmit = function(event){
    // event.preventDefault()
    // const allowedChars = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`~"
    // function checkChars(string) {
    //     var regex = new RegExp('[^' + allowedChars + ']', 'g');
    //     var newstr = string.replace(regex, '');
    //     if (newstr === string){
    //         return true
    //     } else return false
    // }

    var nameRaw = document.getElementById("name").value.toString()
    var name;

    if (checkChars(nameRaw)){
        name = nameRaw
    } else {
        alert("Username contains invalid characters")
        return
    }

    var passwordRaw = document.getElementById("password").value.toString()
    var password;

    if (checkChars(passwordRaw)){
        password = passwordRaw
    } else {
        alert("Password contains invalid characters")
        return
    }


    var values = [name, password]

        var data = `{ "name": "${name}", "password": "${password}"}`
        var data2 = JSON.parse(data)
        fetch(url + "/", {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
         .then(response => response.json().then(data => {
            console.log(data)
            
        })
         )
        // .then(response => console.log(response))
        // .catch(err => console.error(err))
        // alert("stored data: " +data)

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