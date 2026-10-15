
//array------An array stores multiple values in one variable.
// methods-----
//length - You can find how many items are in an array using:
//includes() - checks whether an array contains a particular value.
//  push()- add last index
// pop() - delete slast index
// shift() - delete first index
// unshift() -add first index
// lenght - count the lenth oof the array

//push()
const countryNames = ['India', 'China', 'Korea']

countryNames.push('Japan')

console.log(countryNames)


//pop()
const programmingLanguages = ['Java', 'JavaScript', 'TypeScript', 'Python']

programmingLanguages.pop()

console.log(programmingLanguages)

//shift()
const programmingLanguage = ['Java', 'JavaScript', 'TypeScript', 'Python']

programmingLanguage.shift()
console.log(programmingLanguage)


//unshift
const countryName = ['India', 'China', 'Korea']

countryName.unshift('swis')
console.log(countryName)

//array pattern..........................................
const browserso: string[] = ['Chrome', 'Firefox'];

const scores: number[] = [80, 90, 95];

const results: boolean[] = [true, false, true];