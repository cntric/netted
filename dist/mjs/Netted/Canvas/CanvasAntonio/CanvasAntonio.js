import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { getComponentMembers, generateNamedMember } from "rgfm";
export const render = (ref, frame, draw) => {
    const _render = () => {
        frame++;
        // draw && draw(ref, frame);
        return window.requestAnimationFrame(_render);
    };
    return _render();
};
const Members = ["Overlays"];
const CanvasAntonio = ({ style, extentX = 1000, extentY = 1000, initialX, initialY, panning, onPanningStop, onMouseDown, onMouseMove, onMouseUp, children }) => {
    const { Overlays } = getComponentMembers(Members, children);
    const _initialX = initialX || extentX / 2;
    const _initialY = initialY || extentY / 2;
    const ref = useRef(null);
    const [frame, nextFrame] = useReducer(x => x + 1, 0);
    const [isDrawing, setIsDrawing] = useState(false);
    const _onMouseDown = (e) => {
        setIsDrawing(true);
        onMouseDown && onMouseDown(e, ref, frame, isDrawing);
        nextFrame();
    };
    const _onMouseMove = (e) => {
        !panning && onMouseMove && onMouseMove(e, ref, frame, isDrawing);
        nextFrame();
    };
    const _onMouseUp = (e) => {
        setIsDrawing(false);
        onMouseUp && onMouseUp(e, ref, frame, isDrawing);
        nextFrame();
    };
    return (_jsx(TransformWrapper, { onPanningStop: onPanningStop, initialScale: 1, centerOnInit: true, disabled: !panning, children: _jsx(TransformComponent, { wrapperStyle: {
                height: "200px",
                width: "200px",
                ...style
            }, children: _jsxs("div", { style: {
                    height: extentY,
                    width: extentX,
                    position: "relative"
                }, children: [_jsx("canvas", { onMouseDown: _onMouseDown, onMouseUp: _onMouseUp, onMouseMove: _onMouseMove, height: extentY, width: extentX, style: {
                            background: "pink"
                        }, ref: ref }, void 0), _jsx("div", { style: {
                            height: extentX,
                            width: extentY,
                            position: "absolute",
                            left: 0,
                            top: 0
                        }, children: Overlays }, void 0)] }, void 0) }, void 0) }, void 0));
};
CanvasAntonio.Overlays = generateNamedMember("Overlays");
export { CanvasAntonio };
