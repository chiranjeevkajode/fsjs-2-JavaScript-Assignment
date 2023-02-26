// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****

// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***


const pettern = parseInt(prompt("Enter any number to print pattern: "));

let pettern2 ="";

for (let i = 1; i <= pettern; i++) {
    for(let j=0;j<i;j++){
        pettern2 += "*";
    }
    pettern2 += "\n"
}
console.log(pettern2);


// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let pettern3= 3;
let pettern4 ="";

for (let i = 0; i < pettern3; i++) {
    for(let j=0;j<pettern3;j++){
        pettern4 += "*";
    }
    pettern4 += "\n"
}
console.log(pettern4);


// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let pettern5= 3;
let pettern6 ="";

for (let i = 1; i <= pettern5; i++) {
    for (let j = 1; j <= pettern5 - i; j++) {
      pettern6 += " ";
    }
    for(let k = 0; k < 2 * i - 1; k++){
        pettern6 += "*";
    }
    pettern6 +="\n";
}
console.log(pettern6);