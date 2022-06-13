import React from "react";
import {useState} from "react";

function Login(){
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  async function handleLogin(event){

    event.preventDefault();

    const response = await fetch("http://localhost:3001/api/login", {

    method: "POST",

      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    const data= await response.json();

    if(data.user){
      localStorage.setItem("token", data.user);
      alert("Logged in...");
      window.location.href="/dashboard";
      // window.location.href="http://localhost:3002/";
    }
    else{
      alert("Please check your username and password");
    }
    console.log(data);
  }

    return(
      <React.Fragment>
<main className="form-signin w-100 m-auto">
  <form onSubmit={handleLogin}>
    <h1 className="h3 mb-3 fw-normal">Please Login</h1>

    <div className="form-floating">
      <input type="email" class="form-control" name="email" value={email} placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" class="form-control" name="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary"  type="submit" >Login</button>
    <p className="mt-5 mb-3 text-muted">&copy;2022</p>
  </form>
</main>
</React.Fragment>
      
    );
}
export default Login;