// T I P O S  D E  D A T O S - - - >

//1.-
//const notDefined

//2.-
//const firstNumber = 1
//const secondNumber = 2

//3.-
let emptyString = ""

//4.-
const string = "asdf"

//5.-
let emptyArray = []

//6.-
const arrayOfNumbers = [1, 2, 3, 4, 5]

//7.-
const arrayOfStrings = ["", "Carlos", "Aroa", "Naiara", "Irene"]

//8.-
const emptyObject = {}

//9.-
let arrayOfObjects = {
    marca: "Seat",
    modelo: "León"
}

//10.-
const object = {
    name: "Carlos",
    age: 37,
    hobbies: ["Futbol", "Padel", "Motos"]
}

//11.-
let boolean = true

//12.-
let oppositeBoolean = !boolean

// F U N C I O N E S - - ->

//1.-
function multiplyTwoNumbers(firstNumber, secondNumber) {
    firstNumber * secondNumber;
    console.log(multiplyTwoNumbers)
}
multiplyTwoNumbers()
let a = 'Carlos';

function multiplyTwoNumbers(a, b) { // arguments
    return a * b
}
multiplyTwoNumbers(2, 4); // param

function stringToUpperCase(a) {
    return a.toUpperCase();
}
stringToUpperCase('Carlos');

// [1, 2, 3, 4, 5] % 2

// [0] => 1 % 2
// [1] => 1 % 2
// [2] => 1 % 2
// [3] => 1 % 2
// [4] => 1 % 2

// [i] => 1 % 2, 2 % 2, ...

function squareNumbers(arrayOfNumbers) {
    let arrayOfSquareNumbers = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        arrayOfSquareNumbers.push(arrayOfNumbers[i] ** 2);
    }
    return arrayOfSquareNumbers;
}
squareNumbers(arrayOfNumbers);

function squareNumbers2(arrayOfNumbers) {
    let arrayOfSquareNumbers = [];
    arrayOfNumbers.forEach(num => arrayOfSquareNumbers.push(num ** 2));
    return arrayOfSquareNumbers;
}
squareNumbers2(arrayOfNumbers);

function squareNumbers3(arrayOfNumbers) {
    return arrayOfNumbers.map((num) => num ** 2);
}
squareNumbers3(arrayOfNumbers);

// [1, 2, 3, 4, 5]

function findOddNumbers(arrayOfNumbers) {
    let newArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 !== 0) {
            newArray.push(arrayOfNumbers[i]);
        }
    }
    return newArray;
}

findOddNumbers(arrayOfNumbers);

function addAllNumbers(arrayOfNumbers) {
    let suma = arrayOfNumbers[0];

    for (let i = 1; i <= arrayOfNumbers.length; i++) {
        suma = suma + arrayOfNumbers[i];
    }

    return suma;
}

// Ejecución 1 ->
// suma = suma + arrayOfNumbers[i];
// suma = suma + arrayOfNumbers[1];
// suma = suma + 2
// suma = 1 + 2
// suma = 3
// Ejecución 2 ->
// suma = suma + arrayOfNumbers[];
// suma = suma + arrayOfNumbers[];
// suma =
// suma =
// suma =
addAllNumbers(arrayOfNumbers);

//function multiplyString(numero, string) {

//}
//multiplyString();
let booleanNew = true
console.log(booleanNew)

function toggleBoolean(booleanNew) {
    //console.log(booleanNew)
    return !booleanNew;
}
console.log(booleanNew)

toggleBoolean(booleanNew);
console.log(booleanNew)