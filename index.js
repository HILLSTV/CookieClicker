var grandmalvl = 1
var cookie = 1
function myFunction() {
cookie += grandmalvl
  document.getElementById("demo").innerHTML = cookie + " cookies clicked";
}
function myFunction1() {
if (cookie > 30)
grandmalvl += 1
cookie -= 30
document.getElementById("demo1").innerHTML = " ";
  document.getElementById("demo").innerHTML = "Grandma Powerup level " + grandmalvl;
  
} 



