import React from "react";

const Restaurant = (props) => {
    return (
        <div className="Restaurant">
            <div class="imgWrapper">
                <img src={props.src}></img>
            </div>
            <h2>{props.place}. {props.name}</h2>
            <p>{props.location} | {props.cost}</p>
            <a href={props.menu}>Menu</a>
        </div>
    )
}

export default Restaurant;