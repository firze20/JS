// Log Clock Time every second
setInterval(logClockTime, 1000);

function logClockTime() {
    //Get Time string as civilian time
    let time = getClockTime();

    //Clear the Console and log the time
    console.clear();
    console.log(time);
}

function getClockTime() {
  //Get the current time
  let date = new Date();

  // Serialize clock time
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };

  //Convert to civilian time

  if (time.hours === 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }
  //Pretend a 0 on the hours to make double digits
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }

  //Pretend a 0 on the minutes to make double digits

  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }

  //Pretend a 0 on the seconds to make double digits

  if (time.seconds < 10) {
    time.minutes = "0" + time.seconds;
  }
    
    //Format the clock time as a string "hh:mm:ss tt"
    
    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}


// Take a look at goodExampleDate.js

