import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
export default function Footer(){
  return(
    <footer className="footer text-light py-1 bottom" style={{ background: 'linear-gradient(to bottom, transparent 0%, #290101 100%)' }}>
      <div className="container">
        <br/><br/><hr />
        <div className="text-center">
          <p style={{ cursor:'default', color:'rgba(250, 210, 210, 0.9)', textDecoration:'none' }}>&copy; 2024 | Suneru Wijeweera | 2337577</p>
          <br/>
         
        </div>
      </div>
    </footer>
  );
}