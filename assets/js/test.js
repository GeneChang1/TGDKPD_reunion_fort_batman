const fetchPromise = fetch("https://tngc.nighthawkcodescrums.gq/api/chess_users/");
fetchPromise.then(response => {
  console.log(response);
});