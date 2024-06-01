import React from "react";
import { useNavigate } from "react-router-dom";

function Support(){
    const navigate= useNavigate();
    function changeHandler(){
        navigate("/labs");
    }
    return(
        <>
            <div> This is Support Page</div>
            <button onClick={changeHandler}>GO TO LABS PAGE</button>
        </>
    );
}

export default Support;