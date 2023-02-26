// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


function getFilename(filename){

    const extension = filename.split('.').pop();
    return extension;
}

const result = getFilename(prompt("Enter a Filename extension:"));
console.log(result);
