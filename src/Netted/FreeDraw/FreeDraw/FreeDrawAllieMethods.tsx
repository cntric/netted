import { CanvasEventHandlerI } from "../../Canvas";

export const startDrawing : CanvasEventHandlerI = (
    event, 
    ref,
    frame,
    isDrawing
)=>{
    const { offsetX, offsetY } = event.nativeEvent;
    if(!ref.current) return;
    const context = ref.current.getContext('2d');
    if(!context) return;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
}

export const draw : CanvasEventHandlerI = (
    event, 
    ref,
    frame,
    isDrawing
)=>{
    if(!isDrawing) return;
    const {offsetX, offsetY} = event.nativeEvent;
    if(!ref.current) return;
    const context = ref.current.getContext('2d');
    if(!context) return;
    context.lineTo(offsetX, offsetY);
    context.stroke();
}

export const finishDrawing : CanvasEventHandlerI = (
    event,
    ref,
    frame,
    isDrawing
)=>{
    if(!ref.current) return;
    const context = ref.current.getContext('2d');
    if(!context) return;
    context.closePath();
}