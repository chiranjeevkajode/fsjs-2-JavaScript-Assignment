// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


let month = prompt("Enter a month name to find a season:");


if(month === 'April' || month === 'May') {
    console.log('Spring');
    } else if(month === 'March') {
        console.log('Spring');
    } else if(month === 'July' || month === 'August') {
        console.log("Summer");
    } else if( month === 'June'){      
        console.log("Summer");
    } else if (month === 'October' || month === 'November') {
        console.log("Autumn");
    } else if ( month === 'September') {
        console.log("Autumn");
    } else if (month === 'February' || month === 'January') {
        console.log("Winter");
    } else if( month === 'December'){
        console.log("Winter");
    }

