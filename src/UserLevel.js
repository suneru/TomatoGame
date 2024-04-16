import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLinks from './MainLinks';
import NewGame from './NewGame';
import LevelInstance from './Class/LevelInstance';

import React from 'react'

export default function UserLevel() {
  return (
    <div>
            <a className="btn btn-outline-danger m-4 fs-1 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<MainLinks />, document.getElementById('Box'))}><i className="bi bi-headset-vr fs-1 fw-bold"></i>TOMATO</a>
            <br/><br/><br/>
            <button className="btn btn-outline-danger btn-lg m-4 fw-bold" onClick={() => {
                    LevelInstance.setLevel(1);
                    ReactDOM.render(<NewGame />, document.getElementById('Box'));
                }} style={{width:"200px"}}>
                Easy
            </button><br/>
            <button className="btn btn-outline-danger btn-lg m-4 fw-bold" onClick={() => {
                    LevelInstance.setLevel(2);
                    ReactDOM.render(<NewGame />, document.getElementById('Box'));
                }} style={{width:"200px"}}>
                Medium
            </button><br/>
            <button className="btn btn-outline-danger btn-lg m-4 fw-bold" onClick={() => {
                    LevelInstance.setLevel(3);
                    ReactDOM.render(<NewGame />, document.getElementById('Box'));
                }} style={{width:"200px"}}>
                Hard
            </button>
            <br/><br/><br/>
        </div>
  )
}
