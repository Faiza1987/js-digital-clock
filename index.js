

$(document).ready(function(){
  const seattleClock = function clock(){

    let date = new Date();

    let hour = date.getHours().toString();
    let minute = date.getMinutes().toString();
    let second = date.getSeconds().toString();
    let mid = 'PM';

    if(hour > 12){
      hour -= 12;
    } else {
      mid = 'AM';
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
    $('#clock').html(`<p>${date.toDateString()}</p>
    <p>${hour}:${minute}:${second} ${mid}</p>`);
  }
  
  const shanghaiClock = function shanghaiClock(){
    let shanghaiTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
    shanghaiTime = new Date(shanghaiTime.toLocaleString());

    $('#shanghai-clock').text(`Shanghai time: ${shanghaiTime}`);
  }
  setInterval(seattleClock, 1000);
  setInterval(shanghaiClock, 1000);
  
});

