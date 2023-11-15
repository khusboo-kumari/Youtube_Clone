// // import React from "react";

// // function Signin() {
// //   return (
// //     <>
// //       <form>
// //         <div class="form-group">
// //           <label for="exampleInputEmail1">Email address</label>
// //           <input
// //             type="email"
// //             class="form-control"
// //             id="exampleInputEmail1"
// //             aria-describedby="emailHelp"
// //             placeholder="Enter email"
// //           />
// //           <small id="emailHelp" class="form-text text-muted">
// //             We'll never share your email with anyone else.
// //           </small>
// //         </div>
// //         <div class="form-group">
// //           <label for="exampleInputPassword1">Password</label>
// //           <input
// //             type="password"
// //             class="form-control"
// //             id="exampleInputPassword1"
// //             placeholder="Password"
// //           />
// //         </div>
// //         <div class="form-check">
// //           <input type="checkbox" class="form-check-input" id="exampleCheck1" />
// //           <label class="form-check-label" for="exampleCheck1">
// //             Check me out
// //           </label>
// //         </div>
// //         <button type="submit" class="btn btn-primary"> 
// //           Submit
// //         </button>
// //       </form>
// //     </>
// //   );
// // }

// // export default Signin;

// // Boksaaa SignIn

// import React from "react";
// import { Link } from 'react-router-dom'

// function SignIn() {
//   const handleSubmit=async(event)={
//     event.preventDefault();
//     const email =  document.getElementById('exampleInputPassword1').value;
//     const password =  document.getElementById('exampleInputPassword1').value;
//     const url = "http://localhost:5500/auth/login";

//     const data = {
//       email : email,
//       password:password
//     } 
//     console.log("body data",data)
     
//     fetch(url,{method:'POST',

//     headers:{'Content-Type': 'application/json'}, 

//     body:JSON.stringigy(data)})
//     .then(response =>{
//       console.log(response)
//       if (response.ok) {
//         return response.json();
//       } else{
//         throw new Error(response.message)
//       }
//     })

//     .then(data=>{
//       if(data.success){
//         console.log("Successs",data)
//         localStorage.setItem('token',data.token)
//         localStorage.setItem('email',data.email)
//         localStorage.setItem('userId',data._id)
//         localStorage.setItem('name',data.name)

//         window.location.href"http://localhost:3000/"


//       } else{
//         alert(data.message)
//       }
//       console.log(data)
//     })
//     .catch(error=>{
//       console.log(error)
//     })

//   }
//   return (
//     <div className="Signin" id="template">
//       <form class="labbuuu">
//         <div class="form-group white">
//             <h2 className="topSignIn">Sign In</h2>
//           <label for="exampleInputEmail1 white">Email address</label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//           <small id="emailHelp" class="form-text text-muted white">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div class="form-group white">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//             required
//           />
//         </div>
//         <div class="form-group form-check white">
//           <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//           <label class="form-check-label" for="exampleCheck1">
//             Remember me
//           </label>
//         </div>
//         <button type="submit" class="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignIn;


import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    const handleSubmit = async(event) => {
        event.preventDefault();
        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;

        const url = "http://localhost:5500/auth/login";
        const data = {
            email: email, password: password
        }

        console.log("body data", data)

        fetch(url, {method: 'POST', 
            headers:{'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)})
        .then(response => {
            console.log(response)
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.message)
            }
        })
        .then(data => {
            if(data.success){
                console.log("Success", data)
                localStorage.setItem('token', data.token)
                localStorage.setItem('email', data.email)
                localStorage.setItem('userId', data._id)
                localStorage.setItem('name', data.name);

                window.location.href = "http://localhost:3000/"
            }else{
                alert(data.message)
            }
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div className='SignIn'>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label white">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" required/>
            </div>
            <div class="signin-actions">
                <Link to={'/'}>
                    <button class="signin-action-buttons btn btn-secondary">Back</button>
                </Link>
                <button type="submit" onClick={(event) => handleSubmit(event)} class="signin-action-buttons btn btn-primary">Submit</button>
            </div>
            
        </form>
      
    </div>
  )
}

export default SignIn



