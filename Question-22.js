// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


//1. Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(Math.min(...ages));
console.log(Math.max(...ages));

// 2.Find the median age(one middle item or two middle items divided by two)

function median(val){
    if(val.length ===0);
  
    val.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(val.length / 4);
    
    if (val.length % 4)
      return val[half];
    
    return (val[half - 1] + val[half]);
  }

  const ages2 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(median(ages2));
console.log("The divided valus is: " + median(ages2)/2);

// 3.Find the average age(all items divided by number of items)



arry = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let result;
function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    result = total / count;
}

console.log(calculateAverage(arry));

// const array1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arry.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

// 4.Find the range of the ages(max minus min)

let count = (Math.max(...ages)) - (Math.min(...ages));
console.log(count);

// 5. Compare the value of (min - average) and (max - average), use abs() method

let average = (Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));
let average2 = (Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));
let average3 = (average , average2);
console.log(average);
console.log(average2);
function countAverage(a, b) {
  return Math.abs(a-b)
}

console.log(countAverage(average , average2));