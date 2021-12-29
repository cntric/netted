import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { generate } from 'shortid';
export const NetworkDiagramEditor = ({ network, edges, nodes }) => {
    const [id, setId] = useState(generate());
    const [mode, setMode] = useState("none");
    const [nodeParams, setNodeParams] = useState({});
    const [edgeParams, setEdgeParams] = useState({});
    network?.on('selectEdge', (params) => {
        setMode("edge");
        setEdgeParams(params);
    });
    network?.on("deselectEdge", (params) => {
        setMode("none");
    });
    return (_jsx("div", Object.assign({ style: {
            position: "absolute",
            width: "80%",
            height: "200px",
            bottom: "10px",
            left: "10%"
        } }, { children: mode }), void 0));
};
