import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from './MainLinks';
import React from 'react'
import CurrentUserName from './UserInstance';

export default function UserProfile(){
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
    ReactDOM.render(<div></div>, document.getElementById('PlayerHere')); 
    
    let UserData = CurrentUserName.getUserName();

    return(
        <div>
        <a className="btn btn-outline-danger m-4 fs-1 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<MainLinks />, document.getElementById('Box'))}><i className="bi bi-headset-vr fs-1 fw-bold"></i>TOMATO</a>
        <br/>
            <table className="text-start">
                <tbody>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Username</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.Name}</a></td>
                    </tr>
                   
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Rank</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.Rank}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Super Time</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.SuperTime}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Games Played</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.GamesPlayed}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Games Won</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.Won}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}