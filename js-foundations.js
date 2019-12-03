// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

//write a function called divThree 
//1 input (number) 
//outputs whether the absolute value of the number is evenly divisible by three

const divThree = (num) => {
    if (Math.abs(num)%3 === 0) {
        return `${num} is evenly divisible by 3.`;
    } else {
        return `${num} is not evenly divisible by 3.`;
    }
};

console.log(divThree(15));
console.log(divThree(0));
console.log(divThree(385));
console.log(divThree(-7));


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

// create an object helloMe with five properties: firstName, lastName, x, y
// give the object an object function that outputs a sentence with the object properties
// call that object method to print onto the console

let helloMe = {
    firstName: "Kimberly",
    lastName: " Leonard",
    age: 27,
    mood: "full",
    introSentence: function() {
        return "My name is " + this.firstName + this.lastName + ". I am " + this.age + " years old and I am " + this.mood + ".";
    }
};

console.log(helloMe.introSentence());


// ---------------------//---------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

//write a function called everyOther which has one argument (an array)
//will use .filter inside 
//.filter will take in index as a declared argument 
//returns every other value from the array [value[0],value[2], value[4]..] as a string

let everyOther = (array) => { 
    const newNouns = array.filter((value, index) => {
        return index%2 === 0;
    });
    return newNouns.join(" ");
};
console.log(everyOther(randomNouns));

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//write a function called capitalizeFirstLetter
//takes in one argument, an array
//returns an array with the first letter captalized for all items 

let capitalizeFirstLetter = (array) => {
    return array.map(value => {
        return value[0].toUpperCase() + value.slice(1);
    });
};

console.log(capitalizeFirstLetter(randomNouns));


// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]
const stringLength = (array) => {
    return array.map(value => {
        return value.length
    })
}

console.log(stringLength(randomNouns));


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const alphabetSoup = (string) => {
    let newArray =  Array.from(string);
    return newArray.sort().join("");
};

console.log(alphabetSoup(testString1));
console.log(alphabetSoup(testString2));
console.log(alphabetSoup(testString3));


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
const superStringSmash = (str1, str2, str3) => {
    const combinedStrings = str1 + str2 + str3;
    let superArray = Array.from(combinedStrings);
    return superArray.sort().join("");
}

console.log(superStringSmash(testString1, testString2, testString3));

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function called indecthat takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

//write a function called indexMatchUp
//takes in two arguments (2 arrays) 
//returns one array that is ordered [1a, 1b, 2a, 2b, 3a, 3b...]
//can do this by writing a map function that goes through one array and adds the value of the matching index position to a new array

const indexMatchUp = (numArr, animalArr) => {
    return numArr.map((value, index) => {
        return [value + " " + animalArr[index]];
    }).join(" ")
};


console.log(indexMatchUp(amounts, animals));



// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

//can use the same procedure as previous problem to start
//write a function, matchUp that takes in two arguments numberArr and animalsArr
//use .map to combine the arrays following the index number order as before
//if the number is 1 change the animal value to be singular (remove the "s") by using the slice method (with animal.length-1) to remove the last number in the value

const indexMatch = (numberArr, animalsArr) => {
    return numberArr.map((value, index) => {
        if (value === 1) {
            return [value + " " + animalsArr[index].slice(0, animalsArr[index].length-1)];
        } else {
            return [value + " " + animalsArr[index]];
        }
    }).join(" ");
};

console.log(indexMatch(amounts, animals));

