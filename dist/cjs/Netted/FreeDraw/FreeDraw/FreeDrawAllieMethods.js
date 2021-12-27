"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finishDrawing = exports.draw = exports.startDrawing = void 0;
const startDrawing = (event, ref, frame, isDrawing) => {
    const { offsetX, offsetY } = event.nativeEvent;
    if (!ref.current)
        return;
    const context = ref.current.getContext('2d');
    if (!context)
        return;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
};
exports.startDrawing = startDrawing;
const draw = (event, ref, frame, isDrawing) => {
    if (!isDrawing)
        return;
    const { offsetX, offsetY } = event.nativeEvent;
    if (!ref.current)
        return;
    const context = ref.current.getContext('2d');
    if (!context)
        return;
    context.lineTo(offsetX, offsetY);
    context.stroke();
};
exports.draw = draw;
const finishDrawing = (event, ref, frame, isDrawing) => {
    if (!ref.current)
        return;
    const context = ref.current.getContext('2d');
    if (!context)
        return;
    context.closePath();
};
exports.finishDrawing = finishDrawing;
