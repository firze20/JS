// functional program

import { compose } from "./compose.js";

const oneSecond = () => 1000;

const getCurrentTime = () => new Date();

const clear = () => console.clear();

const log = (message) => console.log(message);

const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

// The three functions are used to transform data without changing the original They treat their arguments as immutable objects

//display

/*
    Takes a target function and returns a function that will send a time to the target.
    In this example, the target will be the console
*/

//formatClock
/*
    Takes a template string and uses it to return clock time formatted based on the criteria
    from the string. In this example is "hh:mm::ss tt"
    From there, formatClock will replace the placeholders with hours, minutes, seconds and time of day
*/

//prependZero
/*
    Takes an object's key as an argument and prepends a zero to the value stored
    under that object's key. It takes in a key to a specific field and prepends values with a zero if the value is less than 10
*/

const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});

/* 
    These higher-order functions will be invoked to create the functions that will be reused
    to format the clock time for every tick. BothformatClock and prependZero will be invoked once, initially setting up
    the required template or key, The inner functions they return will be invoked once every second to format the time for display



/*
    convertToCivilianTime
    A single func that takes clock time as an argument and transforms it into civillian time by using both civillian hours.

    doubleDigits
    A single function that takes civillian clock time and makes sure the hours, minutes and seconds display double digits by
    prepending zeros where needed

    startTicking
    Stars the clock by setting an interval that invokes a callback every second. The callback is composed using all our functions.
    Every second the console is cleared, currentTime is obtained, civilianized, formatted, and displayed
*/

const convertToCivilianTime = (clockTime) =>
    compose(
        appendAMPM, // sets to either PM OR AM
        civilianHours // convers to civilianHours
    )(clockTime);
  
const doubleDigits = civilianTime => compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds"),
)(civilianTime);

const startTicking = () => setInterval(
    compose(
        clear, // Clears the console
        getCurrentTime, // Returns a new Date 
        serializeClockTime, // Creates object from the Date
        convertToCivilianTime, // returns PM and civilian Hours
        doubleDigits, //Adds double digits
        formatClock("hh:mm:ss tt"), // formats the clock
        display(log) //displays the message
    ), oneSecond() //arg 
)

startTicking();