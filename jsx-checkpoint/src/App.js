import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgSrc from './images/imageInSrc.jpg'

function App() {
  return (
    <div>

<div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">سبحان الله </h1>
    
    <img src={imgSrc} alt="ttt"/>
  
    <img src="/imageInPublic.jpg" alt="tt"/>

   

  </div>
  <video width={320} height={240} controls>
    <source src="MyVideo.mp4" type="video/mp4" />
  </video>

  </div>
  
  );
}

export default App;
