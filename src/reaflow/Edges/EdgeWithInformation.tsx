import React, {FC, ReactElement, useState} from 'react';
import {Info} from "react-bootstrap-icons";
import {
    ObjectEditor,
    SchemaTypes
} from "object-editor-react";
import {
    BaseEdge, mkBaseEdge
} from "./BaseEdge"
import { EdgeProps } from 'reaflow';
import Tree from "react-json-tree";

const sampleSchema = {
    "Description" : SchemaTypes.string(),
    "Additional Materials" : SchemaTypes.any()
}

export type EdgeWithInformationProps = EdgeProps & {}

export const EdgeWithInformation : FC<EdgeWithInformationProps>  = (props) =>{

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

    const Edge = mkBaseEdge(<div 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
            cursor : "pointer",
            borderRadius : "100%",
            width : 24,
            height : 24,
            background : isHovered ? "#009900" : "#006400",
            display : "grid",
            alignContent : "center",
            alignItems : "center",
            justifyContent : "center",
            justifyItems : "center"
        }}>
            <Info 
            size={20}
            style={{
                color : "#90ee90"
            }}/>
            {isModaled && <div style={{
                position : "absolute",
                top : "100%",
                left : "100%",
                textAlign : "left",
                width : "300px",
                background : "white",
                border : "1px solid gray",
                borderRadius : "10px",
                fontSize : "10px",
                padding : "10px",
                zIndex : 1000
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
                data={{
                        "Description" : "Lorem Ipsum",
                        "Additional Materials" : {
                            a : "thing",
                            in : "the",
                            forest : "deep"
                        }
                    }}/>
            </div>}
        </div>);

        const _props  = {
            ...props,
            onEnter : handleMouseOver,
            onLeave : handleMouseOut,
            onClick : handleClick
        }

    return (

        
           <Edge
            {..._props}
           />
        
    )

}