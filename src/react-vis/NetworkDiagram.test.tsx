import React from "react";
import {render} from "@testing-library/react";
import { NetworkDiagram } from "./NetworkDiagram";

export const NetworkDiagramSuiteA = ()=>{


    describe("Basic functionality for network diagram.", function(){
    
       test("Renders", function(){
           render(<NetworkDiagram/>)
           
       })

    })


}; NetworkDiagramSuiteA();