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
// var  request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true);
// request.send();
// request.onload = function()
// {
// var data = request.response;
// var result = JSON.parse(data);
// console.log(result);
// for(var i=0; i<result.length;i++)
//  {
//   console.log(result[i].flags.png);
  
//    }
//  }



// Q3 Printing countries name, region, subregion, & Population 
var  request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload = function()
{
    var data3 = request3.response;
 //console.log(data3);
    var result3 = JSON.parse(data3);
    console.log(result3)
    for (var i=0; i<result3.length; i++)
    {
        console.log("Country Name :" + result3[i].name.common , "Region:" + result3[i].region, "Subregion:" + result3[i].subregion, "population:"+ result3[i].population);
    
    }
}
