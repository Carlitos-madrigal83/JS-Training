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
let boolean = true;

//12.-
let oppositeBoolean = !boolean;

// F U N C I O N E S - - ->

//1.-
function multiplyTwoNumbers(firstNumber, secondNumber) {
    firstNumber * secondNumber;
    console.log(multiplyTwoNumbers);
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

// E J E R C I C I O   5

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

// E J E R C I C I O   6

function multiplyString(num, str) {
    return String(num * +str);
}
multiplyString(6, '645');

let num = Number(23);
let str = String('Carlos');
let bol = Boolean(true);

str.length

// E J E R C I C I O   7
function toggleBoolean(boolean) {
    //console.log(booleanNew)
    return !boolean;
}
toggleBoolean(boolean);

// E J E R C I C I O   8

function fillObject(obj, str, arr) {
    obj[str] = arr;
    return obj;
}
fillObject({}, 'modelos', ['serie 3', 'serie 5']);

// E J E R C I C I O   9
let obj = {
    name: 'Carlos', // propiedad -> clave:valor
    id: 1
};
let obj2 = {
    name: 'Jose',
    id: 2
};
let obj3 = {
    name: 'Aroa',
    id: 3
};

function findObjectInArray(arr, num) {
    let objDevolver;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['id'] === num) {
            objDevolver = obj;
        }
    }

    return objDevolver;
}
findObjectInArray([obj, obj2, obj3], 1);

// E J E R C I C I O   10

function findPropertyInObject(obj, str) {

    let objProperties = Object.keys(obj);
    let propiedadEncontrada = false;

    for (let i = 0; i < objProperties.length; i++) {
        if (objProperties[i] === str) {
            propiedadEncontrada = true;
        }
    }

    return propiedadEncontrada;

}
findPropertyInObject(obj, 'name');

// E J E R C I C I O   10 Opción 2
function findPropertyInObject2(obj, str) {
    return obj.hasOwnProperty(str);
}
findPropertyInObject2(obj, 'name');

// E J E R C I C I O   11

function findSnakeInObject(obj, snake_case) {
    // No entiendo el ejercicio
}
findSnakeInObject();

// E J E R C I C I O   12

function makePalindrome(str) {
    let strNew = str.slice(0, str.length - 1);
    let strNewReverse = strNew.split("").reverse().join("");
    return str + strNewReverse
}
makePalindrome('recon');

// oso

// 'arañara reconocer' Palabras palindromas
// E J E R C I C I O   13

function sortStrings(arr) {
    return arr.sort(function (a, b) {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
}
sortStrings(['Carlos', 'Aroa', 'Jose']);

// Programación encapsulada
(() => {  // función flecha anónima autoejecutada
    const miFuncion = function () { // Declaración de función
        a = 10;
        console.log(this); // Variable this apunta al objeto window
        console.log(a);
    };
})();

// E J E R C I C I O   14

function convertToCamelCase(a, b, c) {
    let stringConvert = a + b[0].toUpperCase() + b.slice(1, b.length) + c[0].toUpperCase() + c.slice(1, c.length);
    return stringConvert;

    // carlosAroaJose
}
convertToCamelCase("carlos", "aroa", "jose");



function convertToCamelCase2(strs) { // for
    let str, strFinal = strs[0];

    for (let i = 1; i < strs.length; i++) {
        str = strs[i][0].toUpperCase() + strs[i].slice(1, strs[i].length);
        console.log(str);
        strFinal = strFinal + str;
    }
    console.log(strFinal);

}
convertToCamelCase2(["carlos", "aroa", "jose"]);

function convertToCamelCase3(strs) { // for
    let stringsConvert = [];

    for (let i = 0; i < strs.length; i++) {
        if (i) {
            stringsConvert.push(strs[i][0].toUpperCase() + strs[i].slice(1, strs[i].length));
        } else {
            stringsConvert.push(strs[i]);
        }
    }

    return stringsConvert.join("");

}
convertToCamelCase3(["carlos", "aroa", "jose"]);

function convertToCamelCase4(strs) { // map
    let stringsConvert = strs.map(function (str, index, objetoTrabajado) {
        // console.log(index); // índice de cada elemento de strs
        // console.log(str); // cada elemento de strs
        // console.log({ objetoTrabajado }); // cada elemento de strs
        if (index)
            return str[0].toUpperCase() + str.slice(1, str.length);
        else {
            return str;
        }
    });

    return stringsConvert.join("");

    // carlosAroaJose
}
convertToCamelCase4(["carlos", "aroa", "jose"]);

function convertToCamelCase5(strs) {
    return strs.map((str, index) => index ? (str[0].toUpperCase() + str.slice(1, str.length)) : str).join("");
}
convertToCamelCase5(["carlos", "aroa", "jose"]);

// E J E R C I C I O   15

function convertToKebabCase(a, b, c) {

    console.log(arguments);
    if (arguments.length > 2) {
        return Array.prototype.join.call(arguments, "");
    }
}

let kebabCase = convertToKebabCase(2, 4, 6);