let myurl = "https://jsonplaceholder.typicode.com/users";

let btn = document.querySelector("button"); 
btn.addEventListener("click",()=>{
    console.log("Button is clicked just now ");
    fetchData();
})


async function fetchData(){
    let data = fetch(myurl)
    .then((res)=>{
        console.log(res);
        return res.json(); 
    })
}