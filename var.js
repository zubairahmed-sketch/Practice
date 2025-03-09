/*
const accountId = 132
let email="hammad"
var aP="9873"
aC="sukkur"

// accountId=9273
email = "zubari"
ap="7637"
aC="makkah"

console.log(accountId);
console.table([email,aP,aC])

console.log(typeof null)

*/

/*
let score = true

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)
*/

/*
let isLoggedIn="HammadZuabri"
let booleanILoggedIn=Boolean(isLoggedIn)
console.log(typeof isLoggedIn)
console.log(booleanILoggedIn)
*/

/*
let some = 90

let stringNumber = String(some)
console.log(stringNumber)
console.log(typeof stringNumber)

console.log(2**3)
*/

/*
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2"+3)
console.log(1+"2"+"3")
console.log(1+2+"3")
console.log(1+2+3+4+"5"+"6")
console.log(1+2+"3"+4+"5"+"6"+"5")

console.log(+true)
*/

//comparison

/*
console.log("2">1);
console.log("1"<"2");

const id=Symbol("12344");
const anotherId=Symbol("1234");

console.log(id==anotherId);
*/
// const name="hammad"
// const id = 2


// console.log(id + name + "hammaduabris");
// console.log(`Hello my name is ${name} and my id is ${id} `);

// const n = new String("hamadZubari");
//access key

// console.log(n[0]);
// console.log(n.length);
// console.log(n.toUpperCase());
// console.log(n.charAt(2));
// console.log(n.indexOf('h'));

// const n = [1,2,3,4,5,6]

// //const n1 = n.slice(0,4);
// n.splice(1,2,4,5)
// //console.log(n1);
// console.log(n);


// const n2="    HammadZubari"
// console.log(n2);
// console.log(n2.trim());

//string convert in Array

//console.log(n.split('m'));


//number
// const balance = 100

// console.log(balance);
// console.log(balance.toFixed(2));


// const balance1 = new Number(100);
// console.log(balance1);

//Math
/*
console.log(Math.min(1,2,3,0));
console.log(Math.random());


const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1))+min);

*/

//date Time

/*
let mydate= new Date()
console.log(mydate.toDateString());
console.log(mydate.toString());

let myCreateDate = new Date(2024,0,21)
console.log(myCreateDate.toDateString());

*/
//Arrays
//shallow copies: jo bhe change krenge wo original arraay ma bhe change hoga 
//deep copies:do'nt share the same reference

// const myarr = [1,2,3,4,5]
/*

console.log(myarr);

myarr.push(6)
console.log(myarr);

myarr.pop(6)
console.log(myarr);
myarr.shift();
myarr.unshift(0);
console.log(myarr);
console.log(myarr.includes(5));
console.log(myarr.indexOf(12));
console.log(myarr.indexOf(0));
const newarr = myarr.join();
console.log(newarr);
*/
// slice and splice

/*
console.log(myarr);

const my1 = myarr.slice(0,3)
console.log("A",my1);
console.log(myarr);


const my2 = myarr.splice(0,3)
console.log("B",my2);
console.log(myarr);

*/
//objects literals
/*
const mySym = Symbol["key"]

const jsUser = {
    name: "Hammad",
    age:21,
    [mySym]:"key1",
    location:"Sukkur"
}
console.log(jsUser.name);
console.log(jsUser[mySym]);

jsUser.name="zubari";
Object.freeze(jsUser)
jsUser.name="hammad"
console.log(jsUser);

console.log(Object.keys(jsUser));
*/

//function
/*
function sum(n1,n2){
   //let result = n1+n2

    return n1+n2

}

const result = sum(3,5)

console.log("result:",result);

const user = {
    name:"Hammad",
    id:3424
}

function objectPass(anyObject){
    console.log(`User Name is ${anyObject.name} and Id is ${anyObject.id}`);   
}
*/
//objectPass(user)

//direct pass object is function
/*
objectPass({
    name:"Zuabri",
    id:1234
})

// pass arrays in function

const arr = [1,2,3,4]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(arr));
*/

//for of
/*
const arr = [1,2,3,4]

for (const num of arr) {
    console.log(num);
    
}
*/
//map (unique value,no duplicate value)

// const map =  new Map()

// map.set('Pak','Pakistan')
// map.set('USA',"America")
// map.set('India','bhar ma ja')

// for (const key in map) {
//   console.log(key);
  
        
//     }


// const myObj = {
//     name:'Hamad',
//     age:18
// }

// for (const val of myObj) {  //error becouse object not iterable in For of
//     console.log(val);
    
// }

//forn in 
// const myObj = {
//     name:'Hamad',
//     age:18
// }
// for (const key in myObj) {

//     //   text+=myObj[key]
//       // console.log(myObj[key]); 
//        console.log(myObj[key]); //give a key 
//    }
    // hello = val => "hammad"+val
    // console.log(hello());

    
    // const person = {
    //     name:"hammad",
    //     greed: function p(){
    //         const innerp = ()=>{
    //             console.log(this.name);
                
    //         }
    //         innerp();
    //     }
    // }
    // person.greed();

    // let c = new Array(3)
    // c[0]=1
    // console.log(c);
    
    // let x = function(){
    //     console.log("hamm");
        
    // }
    // x();
   
    
    // var total=0
    //  const arr=[2,3,4,5,6]

    //  for (const element in arr) {
    //     total+=arr[element]
    // }
    // console.log(total);
    

//for each

// const arr=[2,3,4,5,6]

// arr.forEach(function (item) {
//     console.log(item);
    
// })

// arr.forEach((item)=>{
//     console.log(item);
    
// })
// function print (item)
// {
//     console.log(item);  
// }
// arr.forEach(print)

// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

// const student = [
//     {
//         name:"Hammad",
//         id:123
//     },
//     {
//         name:"Ehsan",
//         id:456
//     },
//     {
//         name:"Mangi",
//         id:789
//     }
// ]
// student.forEach((item)=>{
//     console.log(item.name);
    
// })
// for (const key in student) {
//     console.log(student[key]);
    
// }


// const person = {
//     name:"Hammad",
//     age:20,
//     caste:"Zuabri"
// }

// function onlystring(person){
//     for(const key in person){
//         if(typeof person[key]=== "string"){
//             console.log(person[key]);
            
//         }
//     }
// }

// onlystring(person)


// const num2 = prompt("Enter any number :");
// console.log(num1);

// var num1 = 12

// if(num1%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// const arr = ["appl1","ana","aks","hammad2"]

// const element = arr.filter((element)=>/\d/.test(element))

// console.log(element);

var name1 = 'Hammad'
var age = 20
var color = 'white'
function z (){
    lo~
    console.log("free")
}

var hmm = {
    name1,color,age
}
console.log(hmm);






 








