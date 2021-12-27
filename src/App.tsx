import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NetworkDiagram} from "./react-vis"
function App() {
  return (
    <div className="App">
      <NetworkDiagram style={{
        height : "100vh",
        width : "100vw"
      }} nodes={{
        "liam" : {
          label : "Liam",
          x : 0,
          y : 0
        },
        "kayla" : {
          label : "kayla",
          x : 0,
          y : 0
        },
        "rory" : {
          label : "rory",
          x : 10,
          y : 10
        }
     }} edges={[
       {from : "liam", to : "kayla"}
     ]}/>
    </div>
  );
}

export default App;
