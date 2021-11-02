import { PanInfo } from 'framer-motion';
import React, {FC, ReactElement} from 'react';
import { NodeApolloI } from '../NodeTypeApollo';

export type GenericNodeAgambenProps = {
    node : NodeApolloI,
    updateNode : (node : NodeApolloI, targetId : string)=>void,
    onDragEnd ? : (event : MouseEvent | TouchEvent | PointerEvent, info : PanInfo)=>void
    onDragStart ? : (event : MouseEvent | TouchEvent | PointerEvent, info : PanInfo)=>void,
    onDrag ? : (event : MouseEvent | TouchEvent | PointerEvent, info : PanInfo)=>void
}

export const GenericNodeAgamben : FC<GenericNodeAgambenProps>  = () =>{

    return (

        <div>
        

        </div>

    )

}