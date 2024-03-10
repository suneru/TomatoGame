
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import LoginUser from './LoginUser';
import React from 'react';

export default function MainMenu() {    
  return (
    <div>
         
            <div className="container text-center">
                <div className="row gx-3 text-center justify-content-center">
                    <div id="PlayerHere" className="col-lg-2"></div>
                    <div className=" col-lg-6 rounded-4 border border-success border-10">
                        <div className="card my-4 text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}} id="Box">
                            <LoginUser/>
                        </div>
                    </div>
                    <div id="TimerHere" className="col-lg-2"></div>
                </div>
            </div>
            <br/><br/>
        </div>
        
   
  )
}
