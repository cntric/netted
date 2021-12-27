"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeWrapperAnna = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const NodeWrapperAnna = ({ children, style, containerRef, onDragEnd, onDragStart, onDrag }) => {
    console.log(containerRef);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ onMouseDown: (e) => {
            e.stopPropagation();
        }, onMouseMove: (e) => {
            e.stopPropagation();
        }, onDrag: onDrag, onDragEnd: onDragEnd, onDragStart: onDragStart, dragConstraints: containerRef, drag: true, style: Object.assign({ cursor: "pointer" }, style) }, { children: children }), void 0));
};
exports.NodeWrapperAnna = NodeWrapperAnna;
