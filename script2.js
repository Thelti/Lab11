var adj = ["Shiny", "Fluffy", "Ugly", "Slimey", "Cute"];
var noun = ["Baby", "Fish", "Monkey", "Ball", "Plant"];

function generate(){
  var x = Math.floor (Math.random()*4);
  var y = Math.floor (Math.random()*4);

  document.getElementById("output").innerHTML += "What a " + adj[x] + " " + noun[y]+"!";
  document.getElementById("output").innerHTML += "\n";
}
