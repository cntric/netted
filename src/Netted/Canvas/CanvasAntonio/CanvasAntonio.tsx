import React, {FC, ReactElement, Ref, useEffect, useReducer, useRef, useState} from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import {getComponentMembers, generateNamedMember} from "rgfm";

export interface CanvasEventHandlerI {
    (
        event : React.MouseEvent<HTMLCanvasElement>,
        ref : Exclude<React.RefObject<HTMLCanvasElement>, null>, 
        frame : number,
        isDrawing : boolean
    ) : void
}

export type CanvasAntonioProps = {
    extentY ? : number,
    extentX ? : number,
    initialX ? : number,
    initialY ? : number,
    style  ? : React.CSSProperties,
    panning ? : boolean,
    onPanningStop ? : (ref: ReactZoomPanPinchRef, event: MouseEvent | TouchEvent) => void,
    onMouseUp ? : CanvasEventHandlerI
    onMouseDown ? : CanvasEventHandlerI
    onMouseMove ? : CanvasEventHandlerI
}

export interface NodeFC extends FC {
    x : number,
    y : number
} 

export interface NodesFC extends FC {
    children : NodeFC
}

export const render = (
    ref : Ref<HTMLCanvasElement>, 
    frame : number, 
    draw : CanvasEventHandlerI
) : number =>{

    const _render = ()=>{
        frame++;
        // draw && draw(ref, frame);
        return window.requestAnimationFrame(_render)
    }
    return _render();
}

const Members =["Overlays"];

const CanvasAntonio : FC<CanvasAntonioProps> & {
    Overlays : FC
}  = ({
    style,
    extentX = 1000,
    extentY = 1000,
    initialX,
    initialY,
    panning,
    onPanningStop,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    children
}) =>{

    const {
        Overlays
    } = getComponentMembers(Members, children);

    const _initialX = initialX || extentX/2;
    const _initialY = initialY || extentY/2;

    const ref = useRef<HTMLCanvasElement>(null);
    const [frame, nextFrame] = useReducer(x=>x+1,0);
    const [isDrawing, setIsDrawing] = useState(false);

    const _onMouseDown = (e : React.MouseEvent<HTMLCanvasElement>)=>{
        setIsDrawing(true);
        onMouseDown && onMouseDown(e, ref, frame, isDrawing);
        nextFrame();
    }
    const _onMouseMove = (e : React.MouseEvent<HTMLCanvasElement>)=>{
        !panning && onMouseMove && onMouseMove(e, ref, frame, isDrawing);
        nextFrame();
    }
    const _onMouseUp = (e : React.MouseEvent<HTMLCanvasElement>)=>{
        setIsDrawing(false);
        onMouseUp && onMouseUp(e, ref, frame, isDrawing);
        nextFrame();
    }
    
    return (

            <TransformWrapper
                onPanningStop={onPanningStop}
                initialScale={1}
                centerOnInit={true}
                disabled={!panning}>
                <TransformComponent 
                    wrapperStyle={{
                        height : "200px",
                        width : "200px",
                        ...style
                    }}>
                    <div style={{
                        height : extentY,
                        width : extentX,
                        position : "relative"
                    }}>
                        <canvas 
                            onMouseDown={_onMouseDown}
                            onMouseUp={_onMouseUp}
                            onMouseMove={_onMouseMove}
                            height={extentY}
                            width={extentX}
                            style={{
                                background : "pink"
                            }} ref={ref} />
                        <div style={{
                            height : extentX,
                            width : extentY,
                            position : "absolute",
                            left : 0,
                            top : 0
                        }}>
                            {Overlays}
                        </div>
                    </div>
                </TransformComponent>
            </TransformWrapper>
    )

}

CanvasAntonio.Overlays = generateNamedMember("Overlays");
export {CanvasAntonio};