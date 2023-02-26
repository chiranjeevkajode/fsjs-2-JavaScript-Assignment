// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// Current Year

let todayDate = new Date();
console.log("Current Year is: " + todayDate.getFullYear());

// Current Month

let month = new Date();
console.log("Current Month is: " + month.getMonth() +1);

// Current Date 

let date = new Date();
console.log("Today Date is: " + date.getDate());

// Current day in Number 

let day = new Date();
console.log("Today day is: " + day.getDay());

// Current Hours

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let time = `${hours}:${minutes}`
console.log("Crrent Time is: " + time);

// Current Minutes 

let hour = new Date().getHours();
let minute = new Date().getMinutes();
let seconds = new Date().getSeconds();
let Time = `${hours}:${minutes}:${seconds}`
console.log("Crrent Time is: " + Time);

// numbers of seconds elapsed from January 1, 1970 to now

let seconds2 = Date.now();

setTimeout(() => {
    let elapsed = Date.now() - seconds2;

    console.log(`seconds elapsed = ${Math.floor(elapsed / 1000)}`);
}, 2023);