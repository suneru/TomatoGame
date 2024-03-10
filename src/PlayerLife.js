import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserProfile from './UserProfile';
import CurrentUserName from './UserInstance';

import React from 'react'

export default function PlayerLife(props) {
    const Hearts = {
        Life1 : true,
        Life2 : true,
        Life3 : true
    }
    let HowManyHearts = parseInt(props.HowManyHearts);
    if(HowManyHearts === 3){
        Hearts.Life1 = true;
        Hearts.Life2 = true;
        Hearts.Life3 = true;
    }
    else if(HowManyHearts === 2){
        Hearts.Life1 = true;
        Hearts.Life2 = true;
        Hearts.Life3 = false;
    }
    else if(HowManyHearts === 1){
        Hearts.Life1 = true;
        Hearts.Life2 = false;
        Hearts.Life3 = false;
    }
    else if(HowManyHearts === 0){
        Hearts.Life1 = false;
        Hearts.Life2 = false;
        Hearts.Life3 = false;
    }
    else{
        Hearts.Life1 = true;
        Hearts.Life2 = true;
        Hearts.Life3 = true;
    }
  
    let UserData = CurrentUserName.getUserName();

    return(
        <div className="container-fluid">
            <a className="btn btn-default btn-lg m-2"  onClick={() => ReactDOM.render(<UserProfile />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fs-1 fw-bold"><i className="bi bi-emoji-sunglasses" style={{cursor: 'auto'}}> &nbsp;{UserData.Name}</i></p>
                {/* <p className="fs-1 fw-bold">{UserData.Name}</p> */}
                <p className="fs-3ss fw-bold">
                    {Hearts.Life1 ? <i className="bi bi-egg-fill "> </i> : <i className="bi bi-egg"> </i>}
                    {Hearts.Life2 ? <i className="bi bi-egg-fill"> </i> : <i className="bi bi-egg"> </i>}
                    {Hearts.Life3 ? <i className="bi bi-egg-fill"> </i> : <i className="bi bi-egg"> </i>}
                </p>
            </a>
        </div>
    );
}
