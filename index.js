// let liveClock = setInterval(clock, 1000);

$(document).ready(function(){
  const seattleClock = function clock(){

    // const monthNames = ["January", "February", "March",
    //   "April", "May", "June", "July",
    //   "August", "September", "October",
    //   "November", "December" ];

    let date = new Date();

    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let hour = date.getHours().toString();
    let minute = date.getMinutes().toString();
    let second = date.getSeconds().toString();

    if(hour > 12){
      hour -= 12;
    }

    if(hour < 10){
      hour = '0' + hour;
    }
    if(minute < 10){
      minute = '0' + minute;
    }
    if(second < 10){
      second = '0' + second;
    }
    $('#clock').text(`local time: ${time}`);
    
  }
  
  setInterval(seattleClock, 1000);
  
});

