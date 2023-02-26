// 17. Write a program which tells the number of days in a month.

  const getDays = (year, month) => {
    return new Date(year, month+1, 0).getDate();
};

console.log(getDays(2023,5));