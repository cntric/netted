import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CanvasAntonio, startDrawing, draw, finishDrawing } from './Netted';
import { NodesAndris } from './Netted/Nodes/NodesAndris/NodesAndris';
import {NodeWrapperAnna} from "./Netted/NodeWrapper/NodeWrapperAnna";
import {NetworkDiagramAlonso} from "./reaflow";
function App() {
  return (
    <div className="App">
      <NetworkDiagramAlonso/>
    </div>
  );
}

export default App;
