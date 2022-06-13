// import React, {useEffect} from "react";
// import jwt from "jsonwebtoken";
// import {useHistory} from "react-router-dom";

// const Dashboard= ()=>{

    // const history= useHistory()

    // async function populateQuote(){
    //     const req= await fetch("http://localhost:3001/api/quote", {
    //         headers:{
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //     })

    //     const data=req.json()
    //     console.log(data)
    // }

    // useEffect(()=>{
    //     const token= localStorage.getItem("token")
    //     if (token){
    //         const user= jwt.decode(token)
    //         if(!user){
    //             localStorage.removeItem("token")
    //             history.replace("/login")
    //         }
    //         else{
    //             populateQuote()
    //         }
    //     }

    // }, [])


//     return(
//         <h1>hiii</h1>
//     )

// }

// export default Dashboard;

// KjhTHegBs87GvUQLFLqraWySbf8D1EfcwNW9Xwa2UJ0JdKVfLECXbD9MXJM4XvUW


// API FETCH
// import React from "react";
// class Dashboard extends React.Component {

// 	// Constructor
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code
// 	componentDidMount() {
// 		fetch("http://localhost:3001/api/usersdata")
// 			.then((res) => res.json())
// 			.then((json) => {
// 				this.setState({
// 					items: json,
// 					DataisLoaded: true
// 				});
// 			})
// 	}
// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded) return <div>
// 			<h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "Dashboard">
// 			<h1> Fetch data from an api in react </h1> {
// 				items.map((item) => (
// 				<ol key = { item.id } >
//                     User_Email: { item.email },
// 					User_Name: { item.name }
					
// 					</ol>
// 				))
// 			}
// 		</div>
// 	);
// }
// }

// export default Dashboard;


// import React from 'react';
// import axios from 'axios';

// export default class Dashboard extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:3001/api/reguser`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         {
//           this.state.persons
//             .map(person =>
//               <li key={person.id}>{person.name}</li>
//             )
//         }
//       </ul>
//     )
//   }
// }

// import React from "react";
// function Dashboard(){

//     async function handleclick(){
    
//         const res = await fetch('http://localhost:3001/stored', {
//             method: 'GET',
//         });
//         const data = await res.json();
//         return console.log(data); 
//     }
    
//     return(
//         <div class="data">
//             <h1>DATA</h1>
//             <input type="button" value="get data" onClick={handleclick}/>
//         </div>
//     );
// }

// export default Dashboard;

import React from "react";
import {useState, useEffect} from "react";

function Dashboard(){
    const [datas, setDatas]= useState([{
        email: "",
        name:"",
        phone:""
    }])
    useEffect(()=>{
        fetch("http://localhost:3001/users").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setDatas(jsonRes));
    })


    return(
        <div  class="dash">
            <h1>AVAILABLE DATA</h1>
            {/* {
                datas.map(content=>
                <div>
                    <h3>{content.email}</h3>
                    <h3>{content.name}</h3>
                </div>)
                
            } */}

        <table class="table table-stripped">
          <thead>
              <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">PHONE</th>
              </tr>
          </thead>
          <tbody>
          {
                datas.map(content=>
              <tr>
                  <td >{content.name}</td>
                  <td >{content.email}</td>
                  <td >{content.phone}</td>
              </tr>

                )
              }
          </tbody>
      </table>

        </div>
    )
}

export default Dashboard;
