//objects..............................
//This is very important for real-world Playwright test data.

// An object stores related information using key-value pairs.
const employee = {
    name: 'Mounika',
    role: 'QA Engineer',
    experience: 2
};

// to access value
console.log(employee.name)

// One more object concept: changing a value

// Objects can have their values changed:
const employeee = {
    name: 'Mounika',
    role: 'QA Engineer'
};

employee.role = 'Senior QA Engineer';

console.log(employee.role);

//Notice something interesting: employee is declared with const, 
// but we can still change a property inside the object. const prevents reassigning the whole object, not changing its properties


// if... with an object 
//The condition checks the value inside the object.
const employeeee = {
    name: 'Mounika',
    role: 'QA Engineer'
};

if (employee.role === 'QA Engineer') {
    console.log('QA role');
}