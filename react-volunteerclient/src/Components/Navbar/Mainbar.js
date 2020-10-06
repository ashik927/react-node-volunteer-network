import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './Mainbar.css'

const Mainbar = (props) => {
    
    return (
        <div className="Nav">
            <ul>
                <li className={props.color ? "color":""} style={{cursor:"pointer"}} onClick={()=>props.handleShow("breakfast")} >Breakfast</li>
                <li style={{cursor:"pointer"}} onClick={()=>props.handleShow("launch")}>Launch</li>
                <li style={{cursor:"pointer"}} onClick={()=>props.handleShow("dinner")}>Dinner</li>

            </ul>
        </div>
    );
};

export default Mainbar;