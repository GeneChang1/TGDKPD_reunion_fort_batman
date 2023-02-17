---
layout: default
---

<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style>
        h1 {
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          color: #302f2f;
          text-align: center;
        }
        input.login {
          margin-top: 5%;
          position: inline;
          width: 40%;
          margin-left: 29%;
          margin-right: 40%;
          padding: 2%;
          font-size: 20px;
          background-color: #000000;;
          color: #888888;
          border: none;
          text-align: center;
        }
        button {
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-size: 20px;
          margin-top: 4%; 
          margin-bottom: 4%;
          position: inline;
          width: 40%;
          margin-left: 30%;
          margin-right: 30%;
          padding: 2%;
          border-radius: 8px;
          background-color: #302f2f;
          color: #888888;
          border: none;
          text-align: center;
        }
        div.newaccount {
          margin-top: 4%;
          margin-left: 25%;
          margin-right: 25%;
          position: inline;
          width: 50%;
          text-align: center;
        }
        #noacc {
          font-size: 25px;
          text-align: center;
          margin-bottom: 0%;          
        }
    </style>
    

  </head>
  <body>
    <h1 class="header">
      SIGN UP!
    </h1>
    <form>
      <input type="username" class="login" id="name" placeholder="Enter username here..">
      <input type="text" class="login" id="password" placeholder="Enter password here..">
      <input type="text" class="login" id="passwordConfirm" placeholder="Confirm Password">
      <input type="birthday" class="login" id="dob" placeholder="Enter birthday here..">
      <div>
        <button id="signUp" type="button" onclick="">Sign up</button>
      </div>
    </form>
    <script src="assets/js/login.js"></script>
  </body>
</html>