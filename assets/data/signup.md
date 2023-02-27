---
title: Python Sign-in
layout: default
description: A sign-in screen that interacts with Python and obtains a user.
permalink: /signup
---

<form action="javascript:login_user()">
    <p><label>
        name:
        <input type="text" name="name" id="name" required="" />
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="password" required="" />
    </label></p>
    <button>Login</button>
    <p id="message"></p>
</form>

<script>
    // URL for deployment
    document.getElementById("form").onsubmit = (event) => {
        event.preventDefault()
        console.log("Chase is Gay")
    }
    document.getElementById("form").onsubmit = (event) => {
        event.preventDefault()
    var url = "https://tngc.nighthawkcodescrums.gq"
    // Comment out next line for local testing
    //url = "http://localhost:8086"
    // Authenticate endpoint
    const login_url = url + '/api/chess_users/';
    let nameapi = function login_user(){
        const body = {
            name: document.getElementById("name").value,
            password: document.getElementById("password").value,
        };
        const requestOptions = {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'include', // include, *same-origin, omit
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json",
            },
        };
        fetch(login_url, requestOptions);
        .then(response => {
            // trap error response from Web API
            if (response.status !== 200) {
                const message = 'Login error: ' + response.status + " " + response.statusText;
                document.getElementById("message").innerHTML = message;
                localStorage.removeItem("name");
                localStorage.removeItem("visitor");
                return
                console.log("Chase is cool");
                return('login successful');
            }
            // Valid response will contain json data
            response.json().then(data => {
                const message = 'Login success: ' + data.name;
                document.getElementById("message").innerHTML = message;
                localStorage.setItem("name", data.name);
                localStorage.setItem("visitor", data.name);
                console.log("Chase is Gaya");
            })
        })}
    }
</script>