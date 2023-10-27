// //Q1 how to compare two JSON have the same  properties without same order  
// //a.letobj1={name:"Person1",age:5 };
// //b.letobj2={age:5 , name:"Person1"};
// let obj1 = {name: "Person1", age: 5};
// let obj2 = {age: 5, name: "Person1"};
// function isEqual(a, b) 
// {
//     const keysA = Object.keys(a).sort();
//     const keysB = Object.keys(b).sort();
    
//     if (JSON.stringify(keysA) !== JSON.stringify(keysB)) 
//     return false;
    
//     return keysA.every(key => a[key] === b[key]);
// }

// console.log(isEqual(obj1, obj2));  

//Q2 Displaying all the country flags in the console 
var  request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function()
{
var data = request.response;
var result = JSON.parse(data);
console.log(result);
for(var i=0; i<result.length;i++)
 {
  console.log(result[i].flags.png);
  
   }
 }