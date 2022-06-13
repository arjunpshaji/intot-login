import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";


function Routerr(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </Router>
        </div>
    )
}
export default Routerr;