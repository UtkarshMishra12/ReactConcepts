import React from "react";
import { useNavigate } from "react-router-dom";

function Labs(){
    const navigate = useNavigate();
    function changeHandler(){
        navigate(-1);
    }
    return(
        <>
            <div>This is Labs Page</div>
            <button onClick={changeHandler}>GO BACK!</button>
        </>
    );
}

export default Labs;