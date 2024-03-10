import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RegisterUser from './RegisterUser';
import MainLinks from './MainLinks';
import CurrentUserNameInstance from './UserInstance';
import React, {  useRef } from 'react';


export default function LoginUser() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    return(
        
        <div>
              
            <a className="btn btn-outline-danger m-4 fs-1 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<LoginUser />, document.getElementById('Box'))}><i className="bi bi-headset-vr fs-1 fw-bold"></i>TOMATO</a>
           
            <br/><br/><br/><br/>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-secondary" id="basic-addon1"><i className="bi bi-at"></i>Username</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" ref={usernameRef}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-secondary" id="basic-addon1"><i className="bi bi-asterisk"></i> Password</span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" ref={passwordRef}/>
            </div>
            <button type="button" className="btn btn-success btn-lg m-2 fw-bold" onClick={() => LoginHandle(usernameRef.current.value, passwordRef.current.value)}><i className="bi bi-fingerprint fs-1 fw-bold"></i> Login</button>&nbsp;
            <button type="button" className="btn btn-dark btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<RegisterUser />, document.getElementById('Box'))}><i className="bi bi-person-add  fs-1 fw-bold"></i> Register</button>
            <br/><br/><br/><br/><br/>
        </div>
    );
}

function LoginHandle(CurrentUserName, CurrentPassword){
    if(CurrentUserName && CurrentPassword){
        fetch(`http://localhost:4000/Server/UserProfile/${CurrentUserName}`)
        .then(response => response.json())
        .then(Data => {
            if(Data && CurrentPassword === Data.Password){
                CurrentUserNameInstance.setUserName(Data);
                ReactDOM.render(<MainLinks />, document.getElementById('Box'));
            }
            else{
                alert("Invalid Username & Password");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Can Not Connect At The Moment: Server Update On Progress.");
        });
    }
    else{
        alert("Please fill Username & Password");
    }
}


