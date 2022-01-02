import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const NodeWrapperAnna = ({ children, style, containerRef, onDragEnd, onDragStart, onDrag }) => {
    console.log(containerRef);
    return (_jsx(motion.div, { onMouseDown: (e) => {
            e.stopPropagation();
        }, onMouseMove: (e) => {
            e.stopPropagation();
        }, onDrag: onDrag, onDragEnd: onDragEnd, onDragStart: onDragStart, dragConstraints: containerRef, drag: true, style: {
            cursor: "pointer",
            ...style
        }, children: children }, void 0));
};
export { NodeWrapperAnna };
