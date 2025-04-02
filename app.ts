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

//function

//arrow function

//void
const greet = (): void=> {
    console.log('hello');
}

//never
const logerror = (message: string):never =>{
    throw new Error(message);
}
logerror("error");

function add(a: number, b: number): number{
    return a+b;
};

add (5, 10);

let addTwo = function(a: number, b: number): number{
    return a+b;
}; 