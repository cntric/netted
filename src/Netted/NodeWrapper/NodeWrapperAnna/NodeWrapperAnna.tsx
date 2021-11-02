import React, {FC, ReactElement} from 'react';
import {motion, PanInfo} from "framer-motion";

export type NodeWrapperAnnaProps = {
    style ? : React.CSSProperties
    containerRef ? : React.RefObject<HTMLDivElement>
    onDragEnd ? : (event : MouseEvent | TouchEvent | PointerEvent, info : PanInfo)=>void
    onDragStart ? : (event : MouseEvent | TouchEvent | PointerEvent, info : PanInfo)=>void,
    onDrag ? : (event : MouseEvent | TouchEvent | PointerEvent, info : PanInfo)=>void
}

const NodeWrapperAnna : FC<NodeWrapperAnnaProps> = ({
    children,
    style,
    containerRef,
    onDragEnd,
    onDragStart,
    onDrag
}) =>{

    console.log(containerRef);

    return (

        <motion.div 
        onMouseDown={(e)=>{
            e.stopPropagation();
        }}
        onMouseMove={(e)=>{
            e.stopPropagation();
        }}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        dragConstraints={containerRef}
        drag
        style={{
            cursor : "pointer",
            ...style
        }}>
            {children}
        </motion.div>

    )

}

export {NodeWrapperAnna}