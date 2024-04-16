import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useRef } from 'react';
import LoginUser from './LoginUser';
import ReactDOM from 'react-dom';




export default function RegisterUser() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const ConfirmpasswordRef = useRef();
    return(
        <div>
            <a className="btn btn-outline-danger m-4 fs-1 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<LoginUser />, document.getElementById('Box'))}><i className="bi bi-headset-vr fs-1 fw-bold"></i>TOMATO</a>
            <br/><br/><br/>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-secondary" id="Username"> Username</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="Username" ref={usernameRef}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-secondary" id="Password"> Password</span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Password" ref={passwordRef}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-secondary" id="ConfirmPassword"> Password</span>
                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="ConfirmPassword" aria-describedby="ConfirmPassword" ref={ConfirmpasswordRef}/>
            </div>
            <button type="button" className="btn btn-dark btn-lg m-2 fw-bold" onClick={() => RegisterHandle(usernameRef.current.value, passwordRef.current.value, ConfirmpasswordRef.current.value)}><i className="bi bi-person-add  fs-1 fw-bold"></i> Register</button>
            <br/><br/><br/><br/>
        </div>
    );
}

function RegisterHandle(NewUserName, NewPassword, NewConfirmPassword){
    if( NewUserName && NewPassword && NewConfirmPassword){
        if(NewPassword === NewConfirmPassword){
        fetch(`http://localhost:4000/Server/UserProfile/${NewUserName}`)
        .then(response => response.json())
        .then(Data => {
            if(!Data){
                fetch('http://localhost:4000/Server/Register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            UserID: null,
                            Name: NewUserName,
                            Password: NewPassword,
                            Rank: 0,
                            SuperTime: 60,
                            GamesPlayed: 0,
                            Won: 0
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log("regi");
                        console.log(data);
                        ReactDOM.render(<LoginUser />, document.getElementById('Box'));
                    })
                    .catch(error => {
                        console.error(error);
                        console.log("Error registering new user     "+error);
                    });
            }
            else{
                alert("Username Already Exists");
            }
        
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Can Not Connect At The Moment: Server Update On Progress.");
        });
        
        }
        else{
            alert("Both Password are doesn't match");
        }
    }
    else{
        alert("Please fill Username, Password & Confirm Password");
    }
}

