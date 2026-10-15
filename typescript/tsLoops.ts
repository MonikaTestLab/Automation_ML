
//LOOPS- means iterating block of code multiple times

//for loop.... executes of the block of code untill condition becomes true

const browser = ['chrome', 'firefox', 'edge'];
const count = browser.length;
for (let i = 0; i < count; i++) {

    console.log('Browser names are:', browser[i])
}


//break....stops the loop completly
//loop stops at index 1
let laptops = ['mac', 'lenovo', 'dell', 'acer', 'asus']

for (let i = 0; i < laptops.length; i++) {

    if (laptops[i] === 'lenovo') {

        console.log('lenovo found');

        break;
    }
} //o/p-----lenovo found

for (let i = 0; i < laptops.length; i++) {

    if (laptops[i] === 'lenovo') {

        break;
    }
    console.log(laptops[i])
}
//op-- mac

//continue....skips the current iteration and move to next
for (let i = 0; i < laptops.length; i++) {

    if (laptops[i] === 'lenovo') {

        console.log('lenovo found');

        continue;
    }
} //o/p------- mac,dell, acer, asus


//for of loop..........................................................................................................

// instead of using index, we can use for of to loop array value

let cities = ['Bengaluru', 'Chennai', 'Mumbai']

for (const city of cities) {

    console.log(city)

}

for (const citi of cities) {

    if (citi === 'Mumbai') {
        console.log('True......')
    }
}

let state = ['kar', 'ap', 'mh']
for (const states of state) {

    if (states == 'kar') {
        continue;

    }
    console.log(states);


}


//for in loop..........for...in loops through an object's keys (property names)

let student = {
    stuName: 'Sanvi',
    subjects: 'Maths'
}

for (const key in student) {
    console.log(key)
}

for (const values in student) {
    console.log(student[values as keyof typeof student])
}

const employeeu = {
    name: 'Mounika',
    role: 'QA Engineer'
};

for (const key in employeeu) {
    console.log(employeeu[key as keyof typeof employeeu]);
}

//........while loop...................................................

//A while loop repeats while its condition is true.

let x = 9

while (x <= 20) {

    console.log(x)
    x++
}


let z = 5
while (z >= 0) {
    console.log('values of z are: ', z)
    z--
}

//............do while loop..............................................
//A do...while loop executes the code at least once, even if the condition is false.

let y = 10
do {
    console.log(y)
    y++
} while (y <= 15)

    