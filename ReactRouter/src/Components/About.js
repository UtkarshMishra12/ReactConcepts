import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const navigate= useNavigate();
    function changeHandler(){
        navigate("/Support");
    }
    return(
        <>
            <div>This is About Page</div>
            <button onClick={changeHandler}>Go to Support Page</button>
        </>
    );
}

export default About;