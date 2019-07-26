/* var countDown = new Date("Jul 27, 2019 10:00:00").getTime();
var x = setInterval(function(){
  var now;
  var getTime= new XMLHttpRequest();
  getTime.onreaedystatechage = function(){
    if(this.readyState == 4 && this.status == 200){

      now = new Date(JSON.parse(this.responseText).unixtime).getTime();
      console.log(now)
    }
  }
  getTime.open("GET", "http://worldtimeapi.org/api/timezone/Africa/Algiers", true);
  getTime.send();


  var distance = countDown - now,
  days = Math.floor(distance / (1000 * 60 * 60 * 24)),
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  seconds = Math.floor((distance % (1000 * 60)) / 1000),
  timeString  = days + " day :: ";

  timeString += hours + " hours :: ";
  timeString += minutes + " minutes :: ";
  timeString += seconds + " seconds";
  document.querySelector("#count-down").innerHTML = timeString;
  if(distance < 0){
    clearInterval(x);
    document.querySelector("#count-down").innerHTML = "THE EVENT IS ONGOING";
  }

}, 1000);
*/
