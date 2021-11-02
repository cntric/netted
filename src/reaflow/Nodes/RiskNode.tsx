import React, {FC, ReactElement, useState} from 'react';
import { BaseNode } from './BaseNode';
import {NodeProps} from "reaflow";
import { ExclamationCircleFill } from 'react-bootstrap-icons';
import Tree from "react-json-tree";


export type RiskNodeProps = NodeProps & {}

export const RiskNode : FC<RiskNodeProps>  = (props) =>{

    const [isHovered, setHovered] = useState(false);
    const handleMouseOver = ()=>{
        setHovered(true);
    }
    const handleMouseOut = ()=>{
        setHovered(false);
    }

    const [isModaled, setModaled] = useState(false);
    const handleClick = ()=>{
        console.log("Click!")
        setModaled(!isModaled);
    }

    return (

        <BaseNode
        onEnter={handleMouseOver}
        onLeave={handleMouseOut}
        onClick={handleClick}
        {...props}>
            <div style={{
                height : "80%",
                width : "80%",
                position : "relative",
                border : isHovered ? "1px solid green" : "1px solid gray",
                borderRadius : "100%",
                padding : "10%",
                fontSize : "8px",
                background : isHovered ? "#009900" : "none",
                color : isHovered ? "white" : "black"
            }}>
                <ExclamationCircleFill style={{
                    color : isHovered ? "white" : "black"
                }} size={24}/>
                {props.properties.data ? props.properties.data.name : "Nothing"}
                {isModaled && <div style={{
                position : "absolute",
                top : "100%",
                left : "100%",
                textAlign : "left",
                width : "300px",
                background : "#ffffffff",
                border : "1px solid gray",
                borderRadius : "10px",
                fontSize : "10px",
                padding : "10px",
                zIndex : 4000
            }}>
                <Tree 
                    theme={{
                        scheme: 'monokai',
                        author: 'wimer hazenberg (http://www.monokai.nl)',
                        base00: '#272822',
                        base01: '#383830',
                        base02: '#49483e',
                        base03: '#75715e',
                        base04: '#a59f85',
                        base05: '#f8f8f2',
                        base06: '#f5f4f1',
                        base07: '#f9f8f5',
                        base08: '#f92672',
                        base09: '#fd971f',
                        base0A: '#f4bf75',
                        base0B: '#a6e22e',
                        base0C: '#a1efe4',
                        base0D: '#66d9ef',
                        base0E: '#ae81ff',
                        base0F: '#cc6633',
                    }}
                    data={props.properties.data}/>
                </div>}
            </div>
        </BaseNode>

    )

}