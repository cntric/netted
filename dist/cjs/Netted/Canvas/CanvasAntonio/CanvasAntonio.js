"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasAntonio = exports.render = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_zoom_pan_pinch_1 = require("react-zoom-pan-pinch");
const rgfm_1 = require("rgfm");
const render = (ref, frame, draw) => {
    const _render = () => {
        frame++;
        // draw && draw(ref, frame);
        return window.requestAnimationFrame(_render);
    };
    return _render();
};
exports.render = render;
const Members = ["Overlays"];
const CanvasAntonio = ({ style, extentX = 1000, extentY = 1000, initialX, initialY, panning, onPanningStop, onMouseDown, onMouseMove, onMouseUp, children }) => {
    const { Overlays } = (0, rgfm_1.getComponentMembers)(Members, children);
    const _initialX = initialX || extentX / 2;
    const _initialY = initialY || extentY / 2;
    const ref = (0, react_1.useRef)(null);
    const [frame, nextFrame] = (0, react_1.useReducer)(x => x + 1, 0);
    const [isDrawing, setIsDrawing] = (0, react_1.useState)(false);
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
    return ((0, jsx_runtime_1.jsx)(react_zoom_pan_pinch_1.TransformWrapper, Object.assign({ onPanningStop: onPanningStop, initialScale: 1, centerOnInit: true, disabled: !panning }, { children: (0, jsx_runtime_1.jsx)(react_zoom_pan_pinch_1.TransformComponent, Object.assign({ wrapperStyle: Object.assign({ height: "200px", width: "200px" }, style) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                    height: extentY,
                    width: extentX,
                    position: "relative"
                } }, { children: [(0, jsx_runtime_1.jsx)("canvas", { onMouseDown: _onMouseDown, onMouseUp: _onMouseUp, onMouseMove: _onMouseMove, height: extentY, width: extentX, style: {
                            background: "pink"
                        }, ref: ref }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                            height: extentX,
                            width: extentY,
                            position: "absolute",
                            left: 0,
                            top: 0
                        } }, { children: Overlays }), void 0)] }), void 0) }), void 0) }), void 0));
};
exports.CanvasAntonio = CanvasAntonio;
CanvasAntonio.Overlays = (0, rgfm_1.generateNamedMember)("Overlays");
