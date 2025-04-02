//string
let fruit: string = 'apple';
fruit = 'banana';
//number
let age: number = 30;
//boolean
let isHungry: boolean = true;
//undefined
let username: undefined=undefined;
//null
let email: null=null;

//arrays
//string
let fruits: string[] = ['apple', 'banana', 'mango'];

//number
let ages: number[] = [20, 30, 40];

//boolean
let randoms: boolean[] = [true, false, true];

//object
let person: {name: string, age: number, isPass: boolean} = {
    name: 'John',
    age: 30,
    isPass: true
}

//classes
//built in class
let today : Date =new Date();
//custom class
class House {
}
let house: House =new House();
//function

//arrow function

//void
const greet = (): void=> {
    console.log('hello');
}

//never
const logerror = (message: string)=>{
    console.log(message);
}
logerror("error");

function add(a: number, b: number): number{
    return a+b;
};

add (5, 10);

let addTwo = function(a: number, b: number): number{
    return a+b;
}; 

//one 
const jsonData = '{"name": "John", "age": 25 ,"isPassed":true}'; // ✅ Correct format

const personData :{
    name: string;
    age: number;
    isPassed: boolean;
} = JSON.parse(jsonData);
console.log(personData);

//two and three
let isPass : boolean | string;

const permission= ( ) : void =>{
    isPass = true;
    console.log("Permission Granted");

}

//destructuring 
const data= {
    name : 'John',
    age : 25,
};
const logData = ({name,age} :{ name :string, age : number }): void =>{
    console.log(name);
    console.log(age);

};
logData(data);