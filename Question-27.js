// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).


const Num1 = parseInt(prompt('Enter first number: '));
const Num2 = parseInt(prompt('Enter second number: '));

console.log(`prime number between ${Num1} and ${Num2} is:`);

for (let i = Num1; i <= Num2; i++) {
    let num3 = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            num3 = 1;
            break;
        }
    }

    if (i > 1 && num3 == 0) {
        console.log(i);
    }
}