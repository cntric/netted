import React, { useEffect, useRef, FC, useReducer, useState, useMemo } from "react";
import { 
    Network,   
    Node,
    Edge,
    Options,
    Data,
    DataInterfaceEdges,
    NetworkEvents 
} from "vis-network/standalone";
import { DataSet } from "vis-data/standalone"
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
    extractNetwork ? : (network ? : Network, nodes ? : DataSet<any, any>, edges ? : DataSet<any, any>)=>any,
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

    const network = useRef<Network|undefined>(undefined);

    // A reference to the div rendered by this component
    const domNode = useRef<HTMLDivElement>(null);

    // I'm only accepting nodes as an object, with keys for ids.
    const _nodes = convertNodesToDataSet(nodes||{});

    const data = {
        nodes  : _nodes,
        edges : new DataSet(edges||[])
    };

    useEffect(()=>{
        if(domNode.current && !network.current) network.current = new Network(domNode.current, data, {});
    }, [domNode.current])


    // We need the component to be rerendered once
    // after the domNode has been rendered and the network initialized.
    const [tick, forceUpdate] = useReducer(x=>x+1, 0);
    useEffect(()=>{
        forceUpdate();
    }, [])
    
    // handle new data on options by mutably setting the data and options
    useEffect(()=>{
        network.current?.setData(data);
    }, [data, tick])
    useEffect(()=>{
        network.current?.setOptions(options||{});
    }, [options, tick])

    // allow network to be extracted
    useEffect(()=>{
        extractNetwork && extractNetwork(network.current, data.nodes, data.edges);
    }, [tick])

    // And, the teardown
    useEffect(()=>{
        return ()=>{
            if(network.current){
                network.current.destroy();
                delete network.current;
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
            key={generate()}
            edges={data.edges}
            nodes={data.nodes}
            network={network.current}/>)}
        </div>
    );

}