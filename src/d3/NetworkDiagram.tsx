import React, {FC, ReactElement} from 'react';
import {Graph} from "react-d3-graph";

export type NetworkDiagramProps = {}

export const NetworkDiagram : FC<NetworkDiagramProps>  = () =>{

   // graph payload (with minimalist structure)
    const data = {
        nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
        links: [
        { source: "Harry", target: "Sally" },
        { source: "Harry", target: "Alice" },
        ],
    };
    
    // the graph configuration, just override the ones you need
    const myConfig = {
        nodeHighlightBehavior: true,
        node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
        },
        link: {
        highlightColor: "lightblue",
        },
    };
    
    const onClickNode = function(nodeId : string) {
        window.alert(`Clicked node ${nodeId}`);
    };
    
    const onClickLink = function(source : string, target : string) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };
  
  return <Graph
    id="graph-id" // id is mandatory
    data={data}
    config={myConfig}
    onClickNode={onClickNode}
    onClickLink={onClickLink}
  />;

}