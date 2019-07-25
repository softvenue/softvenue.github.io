var countDown = new Date("Jul 27, 2019 10:00:00").getTime();
var x = setInterval(function(){
  var now = new Date().getTime(),
  distance = countDown - now,
  days = Math.floor(distance / (1000 * 60 * 60 * 24)),
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  seconds = Math.floor((distance % (1000 * 60)) / 1000),
  timeString  = days + " day :: " + hours + " hours :: " + minutes + " minutes :: " + seconds + " seconds";
  console.log(timeString);
  document.querySelector("#count-down").innerHTML = timeString;
  if(distance < 0){
    clearInterval(x);
    document.querySelector("#count-down").innerHTML = "THE EVENT IS ONGOING";
  }

}, 1000);
