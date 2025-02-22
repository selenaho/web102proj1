import React from "react";

const Restaurant = (props) => {
    return (
        <div className="Restaurant">
            <h2>{props.place}. {props.name}</h2>
            <p>{props.location} | {props.cost}</p>
        </div>
    )
}

export default Restaurant;