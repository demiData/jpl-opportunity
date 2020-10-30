import React from "react"
import Card from "./components/Card/Card"
import Rover from "./components/Rover/Rover"
import './App.scss';

function App() {
  return (
    <div className="App" >
      <div  className="cardGreeting">
      <Card /> 
      </div>
 
     <div className="opportunity">
     <Rover />
     </div>
   
    </div>
  );
}

export default App;
