import React from "react";





const Card = (props) => {

    return(
        <div className="card-container">
            <div className="card-title">Title: </div>
            <div className="card-content">
                <input type={"checkbox"} /> 
                <span>Todo</span>
            </div>
        </div>
    )


}

export { Card }