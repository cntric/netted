import React, { useEffect, useRef, FC, useReducer, useState, useMemo } from "react";
import {
    Node,
    Edge,
    DataSet,
    Network,
    Options,
    Data,
    DataInterfaceEdges,
    NetworkEvents
  } from "vis-network";
import { NetworkDiagramBoltOn } from "./BoltOn";
import { DefaultNetworkDiagramToolbar } from "./NetworkDiagramToolbar";
import { NetworkDiagramEditor } from "./NetworkDiagramEditor";
import { generate } from "shortid";

export type NodeDetailsI = Options["nodes"] & {
    x : number,
    y : number,
    label : string
}


/**
 * 
 * @param nodes 
 * @returns 
 */
const convertNodesToDataSet = (nodes : {[key : string] : NodeDetailsI}) : DataSet<any, any> =>{
    return new DataSet(Object.keys(nodes).map((key)=>{
        return {
            id : key,
            ...nodes[key]
        }
    })) as unknown as DataSet<any, any>;
}

export interface NetworkDiagramProps{
    style ? : React.CSSProperties,
    nodes ? : {[key : string] : NodeDetailsI}
    edges ? : Edge[],
    BoltOns ? : NetworkDiagramBoltOn[]
    options ? : Options,
    extractNetwork ? : (network ? : Network)=>any
}

export const Networks : {[key : string] : Network} = {};

/**
 * 
 * @param param0 
 * @returns 
 */
export const NetworkDiagram : FC<NetworkDiagramProps>  = ({
    style,
    nodes,
    edges,
    BoltOns = [DefaultNetworkDiagramToolbar, NetworkDiagramEditor],
    options,
    extractNetwork
}) =>{

    // I use a unique 
    const [id, setId] = useState(generate()); // generate from shortid

    // A reference to the div rendered by this component
    const domNode = useRef<HTMLDivElement>(null);

    // I'm only accepting nodes as an object, with keys for ids.
    const _nodes = convertNodesToDataSet(nodes||{});

    const data: Data = {
        nodes  : _nodes,
        edges : edges
    };

    // Initialize once
    if(domNode.current && !Networks[id]) Networks[id] = new Network(domNode.current, data, {});

    // We need the component to be rerendered once
    // after the domNode has been rendered and the network initialized.
    const [tick, forceUpdate] = useReducer(x=>x+1, 0);
    useEffect(()=>{
        forceUpdate();
    }, [])
    
    // handle new data on options by mutably setting the data and options
    useEffect(()=>{
        Networks[id]?.setData(data);
    }, [data, tick])
    useEffect(()=>{
        Networks[id]?.setOptions(options||{});
    }, [options, tick])

    // allow network to be extracted
    useEffect(()=>{
        extractNetwork && extractNetwork(Networks[id]);
    }, [tick])

    // And, the teardown
    useEffect(()=>{
        return ()=>{
            if(Networks[id]){
                Networks[id].destroy();
                delete Networks[id];
            }
        }
    }, [])

    return (
        <div style={{
            position : "relative",
            ...style
        }}>
            {useMemo(()=><div style={{
                height : "100%",
                width : "100%"
            }} ref={domNode}/>, [domNode])}
            {BoltOns.map((BoltOn)=><BoltOn
            network={Networks[id]}/>)}
        </div>
    );

}