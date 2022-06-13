import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import validateFields from "../Validation";

function Register(){
  const [email, setEmail]= useState("");
  const [name, setName]= useState("");
  const [phone, setPhone]= useState("");
  const [password, setPassword]= useState("");

  async function ontheSubmit(event){

    event.preventDefault();

    const response = await fetch("http://localhost:3001/api/register", {

    method: "POST",

      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        email,
        name,
        phone,
        password
      }),
    })
    const data= await response.json();

    if(data.status==="ok"){
      Navigate("/login");
    }

    console.log(data);
  }
  let Navigate=useNavigate();

    return(
<React.Fragment>
<main className="form-signin w-100 m-auto">
  <form onSubmit={ontheSubmit}>
    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

    <div className="form-floating">
      <input required type="email" class="form-control" name="email" value={email} placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
        <input required type="text" class="form-control" name="name" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <label for="floatingInput">First Name</label>
    </div>
    <div className="form-floating">
        <input required type="text" class="form-control" name="phone" value={phone} placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
        <label for="floatingInput">Phone number</label>
    </div>

    <div className="form-floating">
      <input required type="password" class="form-control" name="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary"  type="submit" >Sign Up</button>
    <p className="mt-5 mb-3 text-muted">&copy;2022</p>
  </form>
</main>
</React.Fragment>
      
    );
}
export default Register;



// import React from "react";
// import {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import { Form, Button } from 'semantic-ui-react';
// import {useForm} from "react-hook-form";

// function Register(){
//   const [email, setEmail]= useState("");
//   const [name, setName]= useState("");
//   const [password, setPassword]= useState("");

//   const { register, formState: { errors } } = useForm();

//   async function handleClick(event){

//     event.preventDefault();

//     const response = await fetch("http://localhost:3001/api/register", {

//     method: "POST",

//       headers:{
//         "Content-Type":"application/json",
//       },
//       body: JSON.stringify({
//         email,
//         name,
//         password
//       }),
//     })
//     const data= await response.json();

//     if(data.status==="ok"){
//       Navigate("/login");
//     }

//     console.log(data);
//   }
//   let Navigate=useNavigate();

//     return(
//       <div>
// <main className="form-signin w-100 m-auto">
//   <Form onSubmit={handleClick}>
//     <h1 className="h3 mb-3 fw-normal">Please Register</h1>

    
//     <Form.Field>
//       <label for="floatingInput">Email address</label>
//       <input type="email" class="form-control" name="email" value={email} placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} {...register("email",{required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
//     </Form.Field>
//     {errors.email && <p>Please check the Email</p>}
    


//     <Form.Field>
//         <label for="floatingInput">Name</label>
//         <input type="text" class="form-control" name="name" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} {...register("name", { required: true, maxLength: 10 })}/>
//     </Form.Field>
//     {errors.name && <p>Please check the Name</p>}

//     <Form.Field>
//       <label for="floatingPassword">Password</label>
//       <input type="password" class="form-control" name="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} {...register("password", {required: true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}/>
//     </Form.Field>
//     {errors.password && <p>Please check the password</p>}

//     <Form.Field>
//     <Button className="w-100 btn btn-lg btn-primary"  type="submit" >Sign Up</Button>
//     <p className="mt-5 mb-3 text-muted">&copy;2022</p>
//     </Form.Field>
//   </Form>
// </main>
// </div>

      
//     );
// }
// export default Register;












