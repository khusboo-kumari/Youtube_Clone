function doSomething() {
  console.log("Its November 1st  - doSomething called  from newModule.js");
  console.log("This is to be added in the index.js file also ");
}

function againDoSomething() {
  console.log("Again do something is called now *****&^#21"); 
}

//  CRUD Operation - Create, Read,Update,Delete  
let arr = [];
function create(Element){
    arr.push(Element);
    return arr; 
}

function read(){
    return arr;
}

function updateFunc(index,Element){
  arr[index] = Element;
  return arr;
}  

function deleteFunc(index){
    arr.splice(index,1);
    // delete 1 from the given index
    return arr;
}

module.exports = {
    doSomething,
    againDoSomething,
    create,
    read,
    updateFunc,
    deleteFunc
    
    
}

