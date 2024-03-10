import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import backgroundImage from './Bg.jpg';
import MainMenu from './MainMenu';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`}}>
    
    <br/><br/><br/> 
    <Header/>
    <MainMenu/>
    <Footer/>
    
    
  </div>
  );
}

export default App;
