import React from "react";





const Card = (props) => {

    return(
        <div className="card-container">
            <div className="card-title"> {props.title} </div>
            <div className="card-content">
                <input type={"checkbox"} /> 
                <span>{props.task}</span>
            </div>
            <div>+</div>
        </div>
    )


}

export { Card }