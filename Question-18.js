// 18. Write a program which tells the number of days in a month, now consider leap year.


let year2;
const getDays = (year, month) => {
    return new Date(year, month+1, 0).getDate();
    
    if (year / 4 == 0) {
        year2 = year;
    }    
};

console.log(getDays(2024,1));