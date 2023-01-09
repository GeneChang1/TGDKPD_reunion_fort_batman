<div id="Searchbar"></div>
<p id="search"></p>
<td><input type="i" id="o"></td>
<script>
function searchGoogle() {
  // Get the search query from the search bar
  var query = document.getElementById("search-bar").value;
  window.location.href = "https://www.google.com/search?q=" + query;
}
</script>
<input type="text" id="search-bar">
<button onclick="searchGoogle()">Search</button>
<body>
<script async src="https://cse.google.com/cse.js?cx=42f4def64b4404444">
</script>
<div class="gcse-search"></div>
</body>