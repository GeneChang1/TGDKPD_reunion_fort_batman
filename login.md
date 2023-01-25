<form id="userForm">
<script>
userForm {
    width: 400px;
    margin: auto;
    padding: 10px;
    text-align: left;
    font-family: Helvetica, sans-serif;
}
userForm label {
    font-weight: bold;
    display: block;
}
userForm input {
    margin-top: 5px;
    padding: 5px;
    width: 100%;
}
userForm input[type="submit"] {
    margin-top: 10px;
    background-color: #62dcaa;
    color: #ffffff;
}
</script>
    <label>
        Name:
        <input type="text" name="name" id="name">
    </label>
    <br>
    <label>
        Password:
        <input type="text" name="password" id="password">
    </label>
    <br>
    <label>
        Verify Password:
        <input type="text" name="passwordConfirm" id="passwordConfirm">
    </label>
    <br>
    <label>
        Birthday:
        <input type="date" name="dob" id="dob">
    </label>
    <br>
    <input type="submit" name="Log In">
</form>
<script src="assets/js/login.js"></script>