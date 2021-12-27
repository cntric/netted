"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodesAndris = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NodesAndris = ({ children, style }) => {
    const containerRef = (0, react_1.useRef)(null);
    const _children = react_1.Children.toArray(children).map((child) => {
        return containerRef && child.props ? Object.assign(Object.assign({}, child), { props: Object.assign(Object.assign({}, child.props), { containerRef: containerRef }) }) : child;
    });
    (0, react_1.useEffect)(() => {
        console.log(containerRef);
    });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: containerRef, style: Object.assign({ height: "100%", width: "100%" }, style) }, { children: _children }), void 0));
};
exports.NodesAndris = NodesAndris;
