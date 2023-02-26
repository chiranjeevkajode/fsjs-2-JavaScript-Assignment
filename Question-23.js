// 23. Write a program to check that the number given by the user is a prime number or not.


const num = parseInt(prompt("Enter a positve number: "));
let isPrime = true;

if(num === 1){
    console.log("1 is not a prime number nor a composite number!");
}
else if(num > 1){
    for(let i =2; i < num ; i++){
        if(num % i == 0 ){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(`${num} is a prime number`);
    }else{
        console.log(`${num} is not a prime number`);
    }
}else{
    console.log("The given number is not a prime number");
}