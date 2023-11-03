const {doSomething, againDoSomething, create, read,updateFunc,deleteFunc} = require("./newModule.js");

console.log("JS node test run is successful");

doSomething();
againDoSomething();

// create();
// read();  
// updateFunc();
// deleteFunc();
console.log(create(1));
console.log(create(10));
console.log(read());
console.log(updateFunc(1,14));
console.log(deleteFunc(1)); 
