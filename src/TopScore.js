
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from './MainLinks';
import React from 'react';
 export default function TopScore(){
        fetch('http://localhost:4000/Server/UpdateTopScore', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .catch(error => console.error('Error:', error));
    return(
        <div>
           <a className="btn btn-outline-danger m-4 fs-1 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<MainLinks />, document.getElementById('Box'))}><i className="bi bi-headset-vr fs-1 fw-bold"></i>TOMATO</a>
        <br/>

            <table className="text-start">
                <tbody>
                    <tr>
                        <tr>
                        <th><a className="btn btn-outline-success m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}><i className="bi bi-person-fill">Player Name</i></a></th>
                        <th><a className="btn btn-outline-success m-2 fw-bold" style={{width:"130px" , cursor: 'auto'}}><i className="bi bi-hourglass-split">Super Time</i></a></th>
                        <th><a className="btn btn-outline-success m-2 fw-bold" style={{width:"140px" , cursor: 'auto'}}><i className="bi bi-trophy-fill">Winner</i></a></th>

                        </tr>
                    </tr>
                    <tr id="tr1">
                        <UsersOfTopScore Rank={1} />
                    </tr>
                    <tr id="tr2">
                        <UsersOfTopScore Rank={2} />
                    </tr>
                    <tr id="tr3">
                        <UsersOfTopScore Rank={3} />
                    </tr> 
                    <tr id="tr4">
                        <UsersOfTopScore Rank={4} />
                    </tr> 
                    <tr id="tr5">
                        <UsersOfTopScore Rank={5} />
                    </tr> 
                    
                </tbody>
            </table>
        </div>
    );
}

function UsersOfTopScore(porps){
    let Rank = porps.Rank;
    fetch(`http://localhost:4000/Server/TopScore/${Rank}`)
    .then(response => response.json())
    .then(Data => {
        console.table(Data);
        ReactDOM.render(<UserTopScoreGUI Data={Data} />, document.getElementById('tr'+porps.Rank));
    })
    .catch(error => console.error('Error:', error));
}

function UserTopScoreGUI(porps){
    return(
        <tr>

            <td><a className="btn btn-outline-dark m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}><i>{porps.Data.Name}</i></a></td>
            <td><a className="btn btn-outline-dark m-2 fw-bold" style={{width:"130px", cursor: 'auto'}}><i>{porps.Data.SuperTime}</i></a></td>
            <td><a className="btn btn-outline-dark m-2 fw-bold" style={{width:"140px", cursor: 'auto'}}><i className={`bi bi-${porps.Data.Rank}-square-fill`}></i></a></td>

        </tr>
    );
}

