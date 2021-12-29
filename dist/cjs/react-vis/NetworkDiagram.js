"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkDiagram = exports.Networks = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const vis_network_1 = require("vis-network");
const vis_data_1 = require("vis-data");
const NetworkDiagramToolbar_1 = require("./NetworkDiagramToolbar");
const NetworkDiagramEditor_1 = require("./NetworkDiagramEditor");
const shortid_1 = require("shortid");
/**
 *
 * @param nodes
 * @returns
 */
const convertNodesToDataSet = (nodes) => {
    return new vis_data_1.DataSet(Object.keys(nodes).map((key) => {
        return Object.assign({ id: key }, nodes[key]);
    }));
};
exports.Networks = {};
/**
 *
 * @param param0
 * @returns
 */
const NetworkDiagram = ({ style, nodes, edges, BoltOns = [NetworkDiagramToolbar_1.DefaultNetworkDiagramToolbar, NetworkDiagramEditor_1.NetworkDiagramEditor], options, extractNetwork }) => {
    // I use a unique 
    const [id, setId] = (0, react_1.useState)((0, shortid_1.generate)()); // generate from shortid
    // A reference to the div rendered by this component
    const domNode = (0, react_1.useRef)(null);
    // I'm only accepting nodes as an object, with keys for ids.
    const _nodes = convertNodesToDataSet(nodes || {});
    const data = {
        nodes: _nodes,
        edges: new vis_data_1.DataSet(edges || [])
    };
    // Initialize once
    if (domNode.current && !exports.Networks[id])
        exports.Networks[id] = new vis_network_1.Network(domNode.current, data, {});
    // We need the component to be rerendered once
    // after the domNode has been rendered and the network initialized.
    const [tick, forceUpdate] = (0, react_1.useReducer)(x => x + 1, 0);
    (0, react_1.useEffect)(() => {
        forceUpdate();
    }, []);
    // handle new data on options by mutably setting the data and options
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = exports.Networks[id]) === null || _a === void 0 ? void 0 : _a.setData(data);
    }, [data, tick]);
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = exports.Networks[id]) === null || _a === void 0 ? void 0 : _a.setOptions(options || {});
    }, [options, tick]);
    // allow network to be extracted
    (0, react_1.useEffect)(() => {
        extractNetwork && extractNetwork(exports.Networks[id]);
    }, [tick]);
    // And, the teardown
    (0, react_1.useEffect)(() => {
        return () => {
            if (exports.Networks[id]) {
                exports.Networks[id].destroy();
                delete exports.Networks[id];
            }
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: Object.assign({ position: "relative" }, style) }, { children: [(0, react_1.useMemo)(() => (0, jsx_runtime_1.jsx)("div", { style: {
                    height: "100%",
                    width: "100%"
                }, ref: domNode }, void 0), [domNode]), BoltOns.map((BoltOn) => (0, jsx_runtime_1.jsx)(BoltOn, { edges: data.edges, nodes: data.nodes, network: exports.Networks[id] }, void 0))] }), void 0));
};
exports.NetworkDiagram = NetworkDiagram;
