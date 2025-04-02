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

//array2
//nested array
 let nestedArray : string [][] = [["arr1"],["arr2"],["arr3"]];

 //flex array type alias
 type Str=[string,number,string,number,number,boolean];
 let flexArray : Str=["jake",20,"apple",20,25,true];
console.log(flexArray);
 //one 
 randoms.push(true);

 //two
 let chooseFruit = fruits[0];

//three
fruits.map((f) =>
{
    console.log(f.toUpperCase());
})

//Tuple
//fruits=> [name,price,stock]

/*let banana: (string | number | boolean) [] = ["Banana",200,true ];
console.log(banana);
banana[1]="two thousands";
console.log(banana);
banana.push("you got have");
console.log(banana);*/

//type alias
type Fruit= [string,number,boolean,string,number]
let banana: Fruit = ["Banana",200,true,"banana",10 ];
console.log(banana);
let haha: Fruit=["haha",100,true,"baba",10]
 