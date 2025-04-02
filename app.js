//string
var fruit = 'apple';
fruit = 'banana';
//number
var age = 30;
//boolean
var isHungry = true;
//undefined
var username = undefined;
//null
var email = null;
//arrays
//string
var fruits = ['apple', 'banana', 'mango'];
//number
var ages = [20, 30, 40];
//boolean
var randoms = [true, false, true];
//object
var person = {
    name: 'John',
    age: 30,
    isPass: true
};
//classes
//built in class
var today = new Date();
//custom class
var House = /** @class */ (function () {
    function House() {
    }
    return House;
}());
var house = new House();
//function
//arrow function
//void
var greet = function () {
    console.log('hello');
};
//never
var logerror = function (message) {
    console.log(message);
};
logerror("error");
function add(a, b) {
    return a + b;
}
;
add(5, 10);
var addTwo = function (a, b) {
    return a + b;
};
//one 
var jsonData = '{"name": "John", "age": 25 ,"isPassed":true}'; // ✅ Correct format
var personData = JSON.parse(jsonData);
console.log(personData);
//two and three
var isPass;
var permission = function () {
    isPass = true;
    console.log("Permission Granted");
};
//destructuring 
var data = {
    name: 'John',
    age: 25,
};
var logData = function (obj) {
};
