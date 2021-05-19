// -------- Seven data types that are primitives --------
// 1. Boolean. true and false.
let myBoolean = true;
let myBoolean2 = false;

// 2.   null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
let myNull = null;

// 3. undefined. A top-level property whose value is not defined.
let myUndefined = undefined;

// 4.   Number. An integer or floating point number. For example: 42 or 3.14159.
let myNumber = 42;
let myFloat = 3.14159;

// 5.   BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
let myBigInt = 9007199254740992n

// 6.   String. A sequence of characters that represent a text value. For example: "Howdy"
let myString = "Howdy";

// 7. Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

// Object
let myObject = new Date()

// -------- Literals --------

// 1. Array literals
let coffees = ['French Roast', 'Colombian', 'Kona'];

// Note: Trailing commas can create errors in older browser versions and it is a best practice to remove them.
let fish = ['Lion', , 'Angel'];
let myList = ['home', , 'school',];

// 2. Boolean literals
let myBoolean3 = true;
let myBoolean4 = false;

// 3. Floating-point literals
let myFloat2 = 3.1415926
let myFloat3 = -.123456789
let myFloat4 = -3.1E+12
let myFloat5 = .1e-23

// 4. Numeric literals
// (decimal, base 10)
let myDecimalNumber1 = 0
let myDecimalNumber2 = 117
let muDecimalNumber3 = -345
let myDecimalNumber4 = 123456789123456789n

// (octal, base 8)
let myOctalNumber1 = 015  // 0o15
let myOctalNumber2 = 0001 // 0o001
let muOctalNumber3 = -0o77
let myOctalNumber4 = 0o777777777777n

// (hexadecimal, "hex" or base 16)
let myHexadecimalNumber1 = 0x1123
let myHexadecimalNumber2 = 0x00111
let myHexadecimalNumber3 = -0xF1A7
let myHexadecimalNumber4 = 0x123456789ABCDEFn

// (binary, base 2)
let myBinaryNumber1 = 0b11
let myBinaryNumber2 = 0b0011
let muBinaryNumber3 = -0b11
let myBinaryNumber4 = 0b11101001010101010101n

// 5. Object literals

let sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

let car = {
  myCar: 'Saturn',
  getCar: carTypes('Honda'),
  special: sales,
};
console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota

let pepe = {
  name: 'pepe',
  age: 30,
  birthDate: new Date('01/01/1991'),
  interests: ['pizza', 'cars'],
}

let users = [
  {
    name: 'pepe',
    age: 30,
    birthDate: new Date('01/01/1991'),
    interests: ['pizza', 'cars'],
    disabled: false,
  },
  {
    name: 'maría',
    age: 25,
    birthDate: new Date('01/01/1996'),
    interests: ['babies', 'food', 'movies'],
    disabled: false,
  },
  {
    name: 'josé',
    age: 40,
    birthDate: new Date('01/01/1981'),
    interests: [],
    disabled: true,
  }
];

// 6. RegExp literals
let re = /ab+c/;

// 7. String literals
let myString1 = 'foo'
let myString2 = "bar"
let myString3 = '1234'
let myString4 = 'one line \n another line'
let myString5 = "John's cat"
