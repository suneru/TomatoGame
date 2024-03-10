import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import UserLevel from './UserLevel';
import TopScore from './TopScore';
import UserProfile from './UserProfile';
import LoginUser from './LoginUser';
import React from 'react';
import PlayerLife from './PlayerLife';



export default function MainLinks(){
    ReactDOM.render(<PlayerLife/>, document.getElementById('PlayerHere'));
   ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
   
    return(
        <div>
            <a className="btn btn-outline-danger m-4 fs-1 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<MainLinks />, document.getElementById('Box'))}><i className="bi bi-headset-vr fs-1 fw-bold"></i>TOMATO</a><br/>
            <button className="btn btn-outline-danger btn-lg m-2 fw-bold" onClick={() => {
                ReactDOM.render(<UserLevel />, document.getElementById('Box'));
                }} style={{width:"200px"}}>Start Game</button><br/>
             
            <button className="btn btn-outline-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<TopScore />, document.getElementById('Box'))} style={{width:"200px"}}>Top Score</button><br/>
            <button className="btn btn-outline-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<UserProfile />, document.getElementById('Box'))} style={{width:"200px"}}>Profile</button><br/>
            <button className="btn btn-outline-danger btn-lg m-2 fw-bold" onClick={() => {
               
                ReactDOM.render(<LoginUser />, document.getElementById('Box')) ;ReactDOM.render(<p></p>, document.getElementById('PlayerHere'));
            }} style={{width:"200px"}}>Logout</button><br/>
        </div>
    );
}