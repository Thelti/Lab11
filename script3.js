
function start(){
  var limit = document.getElementById("input").value;
  for( i = 0; i <= limit; i++){
    document.getElementById("output").innerHTML += " " + i;
  }
}
