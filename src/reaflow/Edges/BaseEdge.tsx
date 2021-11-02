import React, {FC, ReactElement} from 'react';
import {
    Edge,
    EdgeProps,
    EdgeChildProps
} from "reaflow";

export type BaseEdgeProps = EdgeProps & {
    height ? : number,
    width ? : number
}

export const BaseEdge : FC<BaseEdgeProps>  = (props) =>{

    const _props = {
        ...props
    }

    console.log(props);


    return (

        <Edge
        style={{
            overflow : "visible"
        }}
            {...props}
        >
            {
                (childProps : EdgeChildProps)=>{
                    return (
                        <foreignObject 
                                width={props.height || 100}
                                height={props.width || 100}
                                style={{
                                    position : "relative",
                                    pointerEvents : "none"
                                }}
                            >
                            <div style={{
                                position : "fixed",
                                height : props.height || 100,
                                width : props.width || 100,
                                pointerEvents : "none",
                                background : "blue"
                            }}>
                                {props.children}
                            </div>
                        </foreignObject>
                    )
                }
            }
        </Edge>

    )

}

export const mkBaseEdge = (children? : React.ReactNode | React.ReactElement | React.ReactElement[] | undefined) : FC <EdgeProps>=>(props : BaseEdgeProps)=>{


    return (

        <Edge
            {...props}
        >
            {
                (childProps : EdgeChildProps)=>{

                    const {
                        x,
                        y
                    }= childProps.center || { x: 0, y : 0};

                    const _height = props.height || 50;
                    const _width = props.width || 50;

                    return (
                        <foreignObject 
                                width={"100%"}
                                height={"100%"}
                                style={{
                                    position : "relative",
                                    pointerEvents : "none",
                                }}
                            >
                            <div style={{
                                position : "fixed",
                                height : _height,
                                width : _width,
                                pointerEvents : "none",
                                display : "grid",
                                gridTemplateColumns : "1fr",
                                gridTemplateRows : "1fr",
                                alignContent : "center",
                                alignItems : "center",
                                justifyContent : "center",
                                justifyItems : "center",
                                overflow : "visible",
                                top : y - (_height/2),
                                left : x - (_width/2)
                            }}>
                                {children}
                            </div>
                        </foreignObject>
                    )
                }
            }
        </Edge>

    )


}