"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkDiagram = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_d3_graph_1 = require("react-d3-graph");
const NetworkDiagram = () => {
    // graph payload (with minimalist structure)
    const data = {
        nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
        links: [
            { source: "Harry", target: "Sally" },
            { source: "Harry", target: "Alice" },
        ],
    };
    // the graph configuration, just override the ones you need
    const myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "lightgreen",
            size: 120,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
        },
    };
    const onClickNode = function (nodeId) {
        window.alert(`Clicked node ${nodeId}`);
    };
    const onClickLink = function (source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };
    return (0, jsx_runtime_1.jsx)(react_d3_graph_1.Graph, { id: "graph-id" // id is mandatory
        , data: data, config: myConfig, onClickNode: onClickNode, onClickLink: onClickLink }, void 0);
};
exports.NetworkDiagram = NetworkDiagram;
