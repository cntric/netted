import React, {FC, ReactElement, Children, useRef, useEffect} from 'react';

export type NodesAndrisProps = {
    style ? : React.CSSProperties
}

export const NodesAndris : FC<NodesAndrisProps>  = ({
    children,
    style
}) =>{

    const containerRef = useRef<HTMLDivElement>(null);

    const _children = Children.toArray(children).map((child)=>{
        return containerRef && (child as React.ReactElement).props ? {
            ...child as React.ReactElement,
            props : {
                ...(child as React.ReactElement).props,
                containerRef : containerRef
            }
        } : child
    })

    useEffect(()=>{
        console.log(containerRef)
    })

    return (

        <div 
        ref={containerRef}
        style={{
            height : "100%",
            width : "100%",
            ...style
        }}>
            {_children}
        </div>

    )

}