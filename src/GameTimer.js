import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from 'react'

export default function GameTimer(props) {
    return(
        <div className="container-fluids" >
            <a className="btn btn-default btn-lg m-3" style={{cursor: 'auto'}}>
                &nbsp;&nbsp;&nbsp;
                <p className="fs-1 fw-bold">{props.TimeLeft}</p>
                <p className="fs-1 fw-bold"><i className="bi bi-clock"></i></p>
                
            </a>
            {/* <div id="SoN"></div> */}
        </div>
    );
}
