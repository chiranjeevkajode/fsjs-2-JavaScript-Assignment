// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more



    let height  = prompt("Enter your height : ");
    let weight = prompt("Enter your weight in kg: ");
    BMI = weight/(height**2); 
    let result;
    result = BMI;

    if(BMI < 18.5){
        console.log("Your BMI falls within the underweight"); ;   
    }else if((BMI > 18.5) && (BMI < 24.9)){
        console.log("Your BMI falls within Normal range"); 
    }else if((BMI > 25) && (BMI < 29.9 )){
        console.log("Your BMI falls within the overweight");
    }else{
        console.log( "Your BMI falls within 30 or more than that");
    }
