let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    console.log("Clicked button ");
    let myinput = document.querySelector('#name').value;
    if (myinput.length <3) {
        alert("Min length of name should be 3");
    } else if(myinput.length>10){
        alert("Max limit is 10");
    } else{
        confirm("Successfully done now");
    } 

    let myemail = document.querySelector('#email').value;
    if (myemail.value < 3) {
        alert("Min length of name should be 3");
        
    } else if(myinput.length>10){
        alert("Max limit is 10");
    } else{
        confirm("Successfully done now");
    } 
}) 

// function formValidator(){ 
//     alert
// }