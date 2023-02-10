<html lang="en">
    <head>
        <!-- imports bootstrap styling library -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- CSS only -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossorigin="anonymous"
        />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
      

<html>
<style>
  @import url('https://fonts.googleapis.com/css?family=Chakra+Petch');
html, body{
  height: 100%;
  min-height: 100%;
  margin: 0;
	background: black;
	font-family: 'Chakra Petch', sans-serif;
	color: #ffffff;
	padding: 15px;
	overflow-x: hidden;
	max-width: 100%;
}
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: white
}
.profile-header img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}
.profile-header h1 {
  font-size: 36px;
  font-weight: bold;
}
.profile-info {
  width: 80%;
  text-align: center;
}
.profile-info h2 {
  margin-bottom: 10px;
}
.profile-info p {
  margin-bottom: 20px;
}
.profile-win h5 {
  color: green;
}
.profile-loss h5 {
  color: red;
}
.profile-info li {
  list-style: none;
  margin-bottom: 10px;
}
</style>

<div class="profile-container">
  <div class="profile-header">
    <h1>User 1</h1>
  </div>
  <div class="profile-info">
    <h2>About Me</h2>
    <p>I am a great Tic-Tac-Toe player but not the best chess player.</p>
    <h2>Recent Gameplay</h2>
      <li>Tic-Tac-Toe:</li> 
        <li>
          <p class="text-success">W</p>
        </li>
      <li>Chess:</li>
        <li><p class="text-danger">L</p></li>
    <h2>Total Wins</h2>
      <li>Tic-Tac-Toe:</li> 
      <li>
      156
      </li>
      <li>Chess:</li> 
      <li>12</li>