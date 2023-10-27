//how to compare two JSON have the same  properties without same order  
//a.letobj1={name:"Person1",age:5 };
//b.letobj2={age:5 , name:"Person1"};
let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};
function isEqual(a, b) 
{
    const keysA = Object.keys(a).sort();
    const keysB = Object.keys(b).sort();
    
    if (JSON.stringify(keysA) !== JSON.stringify(keysB)) 
    return false;
    
    return keysA.every(key => a[key] === b[key]);
}

console.log(isEqual(obj1, obj2));  


