import React, {FC, ReactElement} from 'react';
import {Node, NodeProps, NodeChildProps} from "reaflow";

export type BaseNodesProps = NodeProps & {

}

const BaseNode : FC<BaseNodesProps>  = (props) =>{

    const {
        children,
        ...rest
    } = { 
        ...props,
        label : <></>
    };

    return (

        <Node 
        style={{
            strokeWidth : 0,
            stroke : "#00000000", 
            fill: '#00000000',
            color: '#00000000',
            cursor: 'auto',
        }} {...rest}>
            {
                (nodeProps : NodeChildProps)=>{
                    return (
                        <foreignObject 
                                width={props.width}
                                height={props.height}
                                style={{
                                    position : "relative",
                                    pointerEvents : "none",
                                    overflow : "visible"
                                }}
                            >
                            <div style={{
                                position : "fixed",
                                height : "100%",
                                width : "100%",
                                pointerEvents : "none",
                                overflow : "visible",
                                display : "grid",
                                justifyItems : "center",
                                alignItems : "center"
                            }}>
                                {children}
                            </div>
                        </foreignObject>
                    )
                }
            }
        </Node>

    )

}

export {BaseNode};