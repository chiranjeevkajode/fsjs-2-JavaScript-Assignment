// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// Year-Month-Date Hours:minutes Format 
function dateFormater(date, separator) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let time = `${hours}:${minutes}`
    
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
  
    return year + separator + month + separator + day +separator + time;

  }
  
  let now = new Date();
  console.log( dateFormater(now, '-'));


//  Date - Month -Year Hours:Minutes Formate 
  function dateFormater2(date2, separator2) {
    let day = date2.getDate();
    let month = date2.getMonth() + 1;
    let year = date2.getFullYear();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let time = `${hours}:${minutes}`
    
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
  
    return day + separator2 + month + separator2 + year +separator2+ time;

  }
  
  let now2 = new Date();
  console.log( dateFormater2(now, '-'));



  
//  Date / Month /Year Hours:Minutes Formate 
  function dateFormater3(date3, separator3) {
    let day = date3.getDate();
    let month = date3.getMonth() + 1;
    let year = date3.getFullYear();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let time = `${hours}:${minutes}`
    
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
  
    return day + separator3 + month + separator3 + year + separator3 + time;

  }
  
  let now3 = new Date();
  console.log( dateFormater3(now3, '/'));



  