---
title: Python Sign-in
layout: default
description: A sign-in screen that interacts with Python and obtains a user.
permalink: /signin
---

<form id="form">
    <p><label>
        User ID:
        <input type="text" name="name" id="name" required="" />
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="password" required="" />
    </label></p>
    <button type="submit">Login</button>
    <p id="message"></p>
</form>

<script>
    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const url = "https://tngc.nighthawkcodescrums.gq/api/names/";
        const body = {
            name: document.getElementById("name").value,
            password: document.getElementById("password").value,
        };
        const requestOptions = {
            method: 'POST',
            // mode: 'cors',
            // cache: 'no-cache',
            // credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, requestOptions)
            .then(response => {
                console.log(response)
                if (response.status === 200){
                    return response.json()
                }
                else if (response.status === 210) {
                    document.getElementById("message").innerHTML = "Username must be more than 2 characters";
                    return
                }
                else if (response.status === 211) {
                    document.getElementById("message").innerHTML = "Username not found";
                    return
                }
                else if (response.status === 212) {
                    document.getElementById("message").innerHTML = "Password incorrect";
                    return
                }
                else {
                    document.getElementById("message").innerHTML = "Error " + response.status;
                    return
                }
            })
            .then(data => {
                if (data == undefined){
                    return
                }
                const message = 'Login success: ' + data.name;
                document.getElementById("message").innerHTML = message;
                localStorage.setItem("name", data.name);
            })
            .catch(response => {
                const message = response.message;
                
                document.getElementById("message").innerHTML = message;
                localStorage.removeItem("name");
                localStorage.removeItem("visitor");
            });
    });
</script>