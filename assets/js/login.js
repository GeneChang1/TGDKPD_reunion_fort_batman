//placeholder for api link
// const url = 'http://172.17.66.185:8087/api/chess_users/'
// const url = 'http://localhost:8069/api/chess_users/'
// const url = 'http://172.19.164.171:8087/api/chess_users/'
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

document.getElementById("signUp").onclick = function(){
    const allowedChars = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`~"
    function checkChars(string) {
        var regex = new RegExp('[^' + allowedChars + ']', 'g');
        var newstr = string.replace(regex, '');
        if (newstr === string){
            return true
        } else return false
    }

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

    if (password.length < 3 || name.length < 3){
        alert("Username and password must be greater than 3 characters")
        return
    }

    var passwordConfirm = document.getElementById("passwordConfirm").value.toString()
    var dob = ""
    var values = [name, password, dob]

    // only run if passwords match
    if(password === passwordConfirm){
        var data = `{ "name": "${name}", "password": "${password}", "dob": "${dob}"}`
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