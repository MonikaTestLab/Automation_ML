//if statement - statement that executes a block of code if a specified condition is true
const fruitNames = ['apple', 'banana', 'mango'];
const fruitCount = fruitNames.length;
console.log('first fruitname is:', fruitNames[0]);


if (fruitNames.includes('banana')) {

    console.log('banana is present in the array');
}

if (fruitCount === 3) {
    console.log('fruit count is 3');
}

if (fruitNames[0] === 'apple') {
    console.log('first fruit is apple');
}

if (fruitNames[1] !== 'mango') {
    console.log('Not Mango')
}

// if...else statement - statement that executes a block of code if a specified condition is true, and another block of code if the condition is false  

const capitalCity = ['Bengaluru', 'Hyd',]

if (capitalCity[1] === 'Chennai') {

    console.log('Capital is:', capitalCity)
} else {
    console.log('Not capital city ')
}

// else...if statement - we have more than two possibilities. ........................................................

let marks = 90

if (marks <= 70) {

    console.log('Grade A')

} else if (marks >= 90) {

    console.log('Grade A+')

} else if (marks <= 60) {

    console.log('Grade B+')
} else if (marks <= 32) {

    console.log('Just pass')
} else {

    console.log('Fail')
}


