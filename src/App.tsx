import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CanvasAntonio, startDrawing, draw, finishDrawing } from './Netted';
import { NodesAndris } from './Netted/Nodes/NodesAndris/NodesAndris';
import {NodeWrapperAnna} from "./Netted/NodeWrapper/NodeWrapperAnna";
function App() {
  return (
    <div className="App">
      <CanvasAntonio
        style={{
          height : "100vh",
          width : "100vw"
        }}
        panning={true}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={finishDrawing}
      >
        <CanvasAntonio.Overlays>
         <NodesAndris style={{
           position :"absolute",
           top : 0,
           left : 0
         }}>
          <NodeWrapperAnna style={{
            top : 15,
            left : 400,
            position : "absolute"
          }}>
          <div style={{
            background : "blue",
            height : "10px",
            width : "20px",
          }}></div>
          </NodeWrapperAnna>
         </NodesAndris>
        </CanvasAntonio.Overlays>
      </CanvasAntonio>
    </div>
  );
}

export default App;
