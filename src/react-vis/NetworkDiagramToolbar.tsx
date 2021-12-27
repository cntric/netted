import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Diagram2Fill, PencilFill } from 'react-bootstrap-icons';
import {
    Network
} from "vis-network/standalone/esm/vis-network";
import {Button} from "cntric-component-library";
import { useReducer } from 'react';
import { NetworkDiagramBoltOn } from './BoltOn';
import { generate } from 'shortid';

/**
 * Produces a default toolbar for the network diagram.
 * @param param0 
 * @returns 
 */
export const DefaultNetworkDiagramToolbar : NetworkDiagramBoltOn = ({
    network,
    style
}) =>{

    const [editMode, setEditMode] = useState<"edge" | "node" | "none">("none");

    const handleAddEdge = async ()=>{
        if(editMode === "edge") setEditMode("none");
        else setEditMode("edge");
    }

    useEffect(()=>{
        if(editMode === "edge") {
            network && network.addEdgeMode();
            network && network.on("startStabilizing", ()=>{
                network && network.addEdgeMode();
            })
        }
        if(editMode === "none"){
            network && network.disableEditMode();
            network && network.on("startStabilizing", ()=>{
                network && network.disableEditMode();
            })
        };   
    })

    return (

        <div style={{
            padding  : "5px",
            display : "grid",
            position : "absolute",
            top : "5px",
            left : "5px",
            border : "1px solid",
            zIndex : 1000,
            backdropFilter : "invert(1%)",
            borderRadius : "2px",
            fontSize : "10px"
        }}>
            <div style={{
                display : "grid",
                gridTemplateColumns : "1fr",
                gridTemplateRows : "2fr 1fr"
            }}>
                <Button 
                action={handleAddEdge}
                size="sm"
                primaryColor="blue" secondaryColor="white" invert={editMode === "edge"}>
                    <Diagram2Fill size={"18px"}/>
                </Button>
                <div>
                    Add edge
                </div>
            </div>
        </div>

    )

}