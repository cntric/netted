"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkDiagramEditor = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const shortid_1 = require("shortid");
const NetworkDiagramEditor = ({ network, edges, nodes }) => {
    const [id, setId] = (0, react_1.useState)((0, shortid_1.generate)());
    const [mode, setMode] = (0, react_1.useState)("none");
    const [nodeParams, setNodeParams] = (0, react_1.useState)({});
    const [edgeParams, setEdgeParams] = (0, react_1.useState)({});
    network === null || network === void 0 ? void 0 : network.on('selectEdge', (params) => {
        setMode("edge");
        setEdgeParams(params);
    });
    network === null || network === void 0 ? void 0 : network.on("deselectEdge", (params) => {
        setMode("none");
    });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
            position: "absolute",
            width: "80%",
            height: "200px",
            bottom: "10px",
            left: "10%"
        } }, { children: mode }), void 0));
};
exports.NetworkDiagramEditor = NetworkDiagramEditor;
