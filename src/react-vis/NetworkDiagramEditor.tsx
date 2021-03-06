import React, {FC, ReactElement} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { generate } from 'shortid';
import { NetworkDiagramBoltOn } from './BoltOn';

export type DiagramMode = "node" | "none" | "edge";

export const NetworkDiagramEditor : NetworkDiagramBoltOn  = ({
    network,
    edges,
    nodes
}) =>{

    const [id, setId] = useState(generate());

    const [mode, setMode] = useState("none");
    const [nodeParams, setNodeParams] = useState<any>({});
    const [edgeParams, setEdgeParams] = useState<any>({});

    network && network.on('selectEdge', (params)=>{
        setMode("edge");
        setEdgeParams(params);
    });
    network && network.on("deselectEdge", (params)=>{
        setMode("none");
    })

    return (

        <div style={{
            position : "absolute",
            width :"80%",
            height : "200px",
            bottom : "10px",
            left : "10%"
        }}>
            {mode}
        </div>

    )

}