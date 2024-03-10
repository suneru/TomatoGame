import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from './MainLinks';
import PlayerLife from './PlayerLife';
import GameTimer from './GameTimer';
import CurrentUserNameInstance from './UserInstance';
import CurrentLevelSingleton from './LevelInstance';
import SuperTime from './SuperTime';


async function UpdateGamesWon(){
    let UserData = CurrentUserNameInstance.getUserName();
    let Won = UserData.Won;
    if(Won === null){
        Won=1;
    }
    else{
        Won = Won + 1;
    }

    await fetch(`http://localhost:4000/Server/Won/${UserData.Name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Won: Won,
        }),
    })
    .catch((error) => {
        // console.log('Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror:', error);
    });

    await fetch(`http://localhost:4000/Server/UserProfile/${UserData.Name}`)
    .then(response => response.json())
    .then(Data => {
        CurrentUserNameInstance.setUserName(Data);
        // console.log("GGGGGGGGGAAAAAMEEEEEEESSSS WWWWWWWOOOOOOONNNNNNNN     "+CurrentUserNameInstance.getUserName().Won);
    })
    .catch(error => console.error('Error:', error));
}

async function UpdateGamesPlayed(){
    let UserData = CurrentUserNameInstance.getUserName();
    let GamesPlayed2 = UserData.GamesPlayed;
    if(GamesPlayed2 === null){
        GamesPlayed2=1;
    }
    else{
        GamesPlayed2 = GamesPlayed2 + 1;
    }
    await fetch(`http://localhost:4000/Server/GamesPlayed/${UserData.Name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            GamesPlayed: GamesPlayed2,
        }),
    })
    .then(response => response.json())
    .then(Data => {
        console.table(Data);
    })
    .catch((error) => {
        // console.log('Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror:', error);
    });

    await fetch(`http://localhost:4000/Server/UserProfile/${UserData.Name}`)
    .then(response => response.json())
    .then(Data => {
        CurrentUserNameInstance.setUserName(Data);
        // console.log("GGGGGGGGGAAAAAMEEEEEEESSSS PPPPLLLAAAAYYYYEEEEDDDDD     "+CurrentUserNameInstance.getUserName().GamesPlayed);
    })
    .catch(error => console.error('Error:', error));
}

export function GameOver(){
    return(
        <div>
            <i className="bi bi-emoji-frown-fill btn btn btn-lg m-4 fs-1 fw-bold" style={{cursor: 'auto'}}></i><br/>
            <button className="btn btn-outline-warning btn-lg btn-block m-2 fw-bold" onClick={() => { ReactDOM.render(<StartGame />, document.getElementById('Box')); }}>New Quis over</button>
            {/* <button className="btn btn-outline-warning btn-lg btn-block m-2 fw-bold" onClick={() => { ReactDOM.render(<StartGame />, document.getElementById('Box')); ReactDOM.render(<PlayerLife HowManyHearts={3} />, document.getElementById('PlayerHere')); }}>New Quis</button> */}

        </div>
    );
}

function GameWon(){
    return(
        <div>
            <a className="btn btn-success btn-lg fw-bold" style={{cursor: 'auto'}}>Correct</a><br/>
            {/* <i className="bi bi-hand-thumbs-up-fill btn btn-danger btn-lg m-4" style={{cursor: 'auto'}}></i><br/> */}
            {/* <i className="bi bi-emoji-tear" style={{cursor: 'auto'}} ></i><br/> */}
            <button className="btn btn-outline-warning btn-lg btn-block m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame  />, document.getElementById('Box'))}>New Quis</button>
        </div>
    );
}

function GameIncorrect(){
    return(
        <div>
            <a className="btn btn-danger btn-lg m-4 fw-bold" style={{cursor: 'auto'}}>Incorrect</a>
            <i className="Emoji tear" style={{cursor: 'auto'}}></i><br/>
        </div>
    );
}

function CorrectOrNot(props){
    console.log("CorrectorNot - Correct = "+props.Correct);
    console.log("CorrectorNot - User = "+props.Answer);
    
    if(props.Answer === props.Correct){
        props.stopTimer();
        UpdateGamesWon();
        ReactDOM.render(<GameWon />, document.getElementById('InputAnswer'));
        
    }
    else{
        props.setHowManyHearts(props.HowManyHearts - 1);
        ReactDOM.render(<PlayerLife HowManyHearts={(props.HowManyHearts)-1}/>, document.getElementById('PlayerHere'));
        if(parseInt(props.HowManyHearts) === 1){
            props.stopTimer();
            ReactDOM.render(<GameOver />, document.getElementById('InputAnswer'));
           
             
        }
        else{
            ReactDOM.render(<GameIncorrect />, document.getElementById('HeartDisplay'));
             
        }
    }

   

}

function Game(props){
    const inputRef = useRef();
    const [HowManyHearts, setHowManyHearts] = useState(props.HowManyHearts);
    return(
        <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a className="btn btn-outline-danger m-4 fs-1 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<MainLinks />, document.getElementById('Box'))}><i className="bi bi-headset-vr fs-1 fw-bold"></i>TOMATO</a>
            <img src={props.Tomato.question} className="card-img-top" alt="Tomato API Failed" style={{objectFit: 'cover'}}/>
            <div id="InputAnswer" className="card-body" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                <div className="input-group mb-3">
                    <span className="btn btn-default" id="AnswerText" style={{cursor: 'auto'}}></span>
                    {/* { <input type="text" className="form-control" placeholder="Answer" aria-label="Answer" aria-describedby="AnswerText" onKeyUp={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(inputRef.current.value)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}/>
                     } */}
                    {/* <button type="button" className="bi bi-fingerprint btn btn-default fw-bold" onKeyUp={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(inputRef.current.value)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))}></button> */}
                </div>
                <dev>
                <button type="button" className="bi bi-0-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(0)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-1-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(1)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-2-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(2)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef} ></button>&nbsp;
                <button type="button" className="bi bi-3-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(3)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-4-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(4)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-5-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(5)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-6-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(6)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-7-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(7)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-8-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(8)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                <button type="button" className="bi bi-9-square-fill btn btn-dark" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(9)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('HeartDisplay'))} ref={inputRef}></button>&nbsp;
                </dev>
                <div id="HeartDisplay"></div>
                {/* <div id="Best"></div> */}
            </div>
        </div>
    );
}
        
export default function StartGame(){

    UpdateGamesPlayed();
    //ReactDOM.render(<PlayerLife HowManyHearts={3} stopTimer={stopTimer} />, document.getElementById('PlayerHere'));
 

    let TimeLeft;
    let TimeElapsed = 0;
    
    let Level = CurrentLevelSingleton.getLevel();

    if(Level === 1){
        TimeLeft = 30;
    }
    else if(Level === 2){
        TimeLeft = 20;
    }
    else if(Level === 3){
        TimeLeft = 10;
    }
   
    else{
        TimeLeft = 2;
    }

    let OneSecPass = setInterval(() => {
        if(TimeLeft > 0) {
            TimeLeft = (TimeLeft - 1);
            TimeElapsed = (TimeElapsed + 1);
            // if(document.getElementById('AnswerText')){
                
                ReactDOM.render(<GameTimer TimeLeft={TimeLeft} TimeElapsed={TimeElapsed} />, document.getElementById('TimerHere'));
            // }
            // else{
            //     clearInterval(OneSecPass);
            // }
        } else {
            clearInterval(OneSecPass);
            ReactDOM.render(<GameOver />, document.getElementById('InputAnswer'));
        }
    }, 1000);

    const stopTimer = () => {
        clearInterval(OneSecPass);
        SuperTime(TimeElapsed);
    };
    
    fetch('https://marcconrad.com/uob/tomato/api.php')
        .then(response => response.json())
        .then(Tomato => {
            console.log("TOMATO API - Question = "+Tomato.question);
            console.log("TOMATO API - Solution = "+Tomato.solution);
            ReactDOM.render(<Game Tomato={Tomato} HowManyHearts={3} stopTimer={stopTimer} />, document.getElementById('Box'));
        })
        .catch(error => console.error('Error:', error));
    return null;
}