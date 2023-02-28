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
        const url = "https://172.24.189.191:8087/api/names";
        const body = {
            name: document.getElementById("name").value,
            password: document.getElementById("password").value,
        };
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 400) {
                    throw new Error('Invalid user id or password');
                } else {
                    throw new Error('Login error: ' + response.status + " " + response.statusText);
                }
            })
            .then(data => {
                const message = 'Login success: ' + data.name;
                document.getElementById("message").innerHTML = message;
                localStorage.setItem("name", data.name);
                localStorage.setItem("visitor", data.name);
            })
            .catch(error => {
                const message = error.message;
                document.getElementById("message").innerHTML = message;
                localStorage.removeItem("name");
                localStorage.removeItem("visitor");
            });
    });
</script>