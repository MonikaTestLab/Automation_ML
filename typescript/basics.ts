// what is typescript - typescript is a superset of javascript which adds static typing to the language. 

// It allows developers to catch errors at compile time rather than at runtime, making it easier to write and maintain large codebases. 

// TypeScript code is transpiled into JavaScript, which can then be run in any environment that supports JavaScript.

//ts is dynamically typed language
let username: string = 'Mounika';
console.log('my name is:', username)

console.log('I am learning TypeScript')


// console.log() is used to print something in the terminal/console.
console.log('I am learning TypeScript')


//variables- A variable is simply a container that stores a value.

//let   → value can be changed
//const → value should not be reassigned

let browsers = 'Chrome';   // string
let counts = 5;             // number
let isLoggedIn = true;     // boolean

const monika= 'name'


//Next: TypeScript type annotations -we can explicitly tell TypeScript what type a variable should have:
// TypeScript can often figure out the type automatically:

let item: string = 'Chrome';
let experience: number = 2;
let isLogged: boolean = true;

//You can combine strings using +:
let firstname: string = 'Monika';

console.log('d r ' + firstname);

//You can combine text and a variable using a template literal: we should use backticks(``) instead of single quotes('') or double quotes("") to use $ for string interpolation.

console.log(`D R ${firstname}`);

//operators:
// airthematic operators... +, -, *, /, %, **

//Assignment operators.... =, +=, -=, *=, /=, %=

// relational/comparision operators - TypeScript supports the same comparison operators as JavaScript

// including ==, ===, !=, !==, <, >, <=, and >=.

// The == operator checks for equality of values, 
let fruits = 'apple';
console.log(fruits == 'apple');

// while the === operator checks for equality of both values and types.
let browserC = 'Chrome';
console.log(browserC === 'Chrome');

// The != operator checks for inequality of values,
// while the !== operator checks for inequality of both values and types.

let browserF = 'Firefox';
console.log(browserF != 'Chrome');
console.log(browserF !== 'Chrome');


//type annotation
let browserr: string = 'Chrome';
let experiencee: number = 2;
let isLoggedInn: boolean = true;




//logical operators....&&(and), ||(or), !(not- reverse the action)

//logical operator &&(and)........................................................

let phone = 'Vivo';
let model = 'y50'

if (phone === 'Vivo' && model === 'y21') {

    console.log('Vivo phone and same model')
} else {
    console.log('model is different')
}


if (phone === 'Vivo' && model === 'y50') {

    console.log('Phone is same')
} else {
    console.log('Phone is different')
}

//logical operator ||(or)..................................................

let laptop = 'macBook';
let operatingSystem = 'Mac OS'

if (laptop === 'macBook' || operatingSystem === 'windows') {

    console.log('Operating system is differ')
}

//logical operator !(not-- reverse the action)

let isUserLoggedIn = true;

if (!isUserLoggedIn) {
    console.log('Please login');
} else {
    console.log('Welcome');
}


