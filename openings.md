<div id="whatDaMoves"></div>
<p id="badName"></p>
<td><input type="input" id="openingRequest"></td>
<script>
    openings = []
    openings.push({
        name: "sicilian defense",
        moves: [
            "e2e4",
            "c7c5",
        ]  
    })
    openings.push({
        name: "italian game",
        moves: [
            "e2e4",
            "e7r5",
            "g1f3",
            "b8c7",
            "f1c4"
        ]
    })
    const inp = document.getElementById("openingRequest");
    inp.addEventListener("keyup", function() {
        event.preventDefault;
        if (event.key === "Enter") {
            showOpening(inp.value);
        }
    })
    function showOpening(opening){
        openingFound = false;
        opening = opening.toLowerCase()
            document.getElementById("badName").innerHTML = "";
            try{document.getElementById("moveHolder").remove();}catch{}
            const TABLE = document.createElement('table');
            TABLE.id = "moveHolder";
            const row1 = TABLE.insertRow(0);
            const row2 = TABLE.insertRow(0);
            whatDaMoves.appendChild(TABLE);
            for (i in openings){
                if (openings[i].name == opening){
                    for (j in openings[i].moves){
                        var x = row1.insertCell(-1);
                        var td = document.createTextNode(openings[i].moves[j])
                        var y = row2.insertCell(-1)
                        var td2 = document.createTextNode("Move " + (Number(j) + 1));
                        x.appendChild(td)
                        y.appendChild(td2)
                        openingFound = true
                    }
                }
            }
            if (!openingFound){
                document.getElementById("badName").innerHTML = "That is not a valid opening. It either does not exist or is not in our database. Please choose a different one.";
            }
            document.getElementById("openingRequest").value = "";
        }

</script>
