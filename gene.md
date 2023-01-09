<div id="Searchbar"></div>
<p id="search"></p>
<td><input type="i" id="o"></td>
<script>
function search(query) {
  window.open('https://www.google.com/search?q=' + query); }
 var form = document.getElementById('search-form');
    form.addEventListener('submit', function(event) {
  event.preventDefault();
  var input = document.getElementById('search-input');
  var query = input.value;
  search(query);
});

</script>
<form id="search-form">
  <input type="text" id="search-input">
  <button type="submit">Search</button>
</form>
