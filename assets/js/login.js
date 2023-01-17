document.getElementById("userForm").onsubmit = function(event){
    event.preventDefault()

    //placeholder for api link
    const url = "/users"
    const options = ""

    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var passwordConfirm = document.getElementById("passwordConfirm").value
    var dob = document.getElementById("dob").value
    var values = [name, password, dob]

    //only run if passwords match
    if(password === passwordConfirm){
        var data = `{ name: "${name}", password: "${password}", dob: "${dob}"}`
        // fetch(url + data, options)
        // .then(response => response.json().then(data => {
        // })
        // )
        // .then(response => console.log(response))
        // .catch(err => console.error(err))
        alert("stored data: " +data)
    } else {
        alert("Passwords don't match!")
    }
}