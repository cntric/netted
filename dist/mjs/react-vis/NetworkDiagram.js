import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useReducer, useState, useMemo } from "react";
import { DataSet, Network } from "vis-network";
import { DefaultNetworkDiagramToolbar } from "./NetworkDiagramToolbar";
import { NetworkDiagramEditor } from "./NetworkDiagramEditor";
import { generate } from "shortid";
/**
 *
 * @param nodes
 * @returns
 */
const convertNodesToDataSet = (nodes) => {
    return new DataSet(Object.keys(nodes).map((key) => {
        return {
            id: key,
            ...nodes[key]
        };
    }));
};
export const Networks = {};
/**
 *
 * @param param0
 * @returns
 */
export const NetworkDiagram = ({ style, nodes, edges, BoltOns = [DefaultNetworkDiagramToolbar, NetworkDiagramEditor], options, extractNetwork }) => {
    // I use a unique 
    const [id, setId] = useState(generate()); // generate from shortid
    // A reference to the div rendered by this component
    const domNode = useRef(null);
    // I'm only accepting nodes as an object, with keys for ids.
    const _nodes = convertNodesToDataSet(nodes || {});
    const data = {
        nodes: _nodes,
        edges: edges
    };
    // Initialize once
    if (domNode.current && !Networks[id])
        Networks[id] = new Network(domNode.current, data, {});
    // We need the component to be rerendered once
    // after the domNode has been rendered and the network initialized.
    const [tick, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
        forceUpdate();
    }, []);
    // handle new data on options by mutably setting the data and options
    useEffect(() => {
        Networks[id]?.setData(data);
    }, [data, tick]);
    useEffect(() => {
        Networks[id]?.setOptions(options || {});
    }, [options, tick]);
    // allow network to be extracted
    useEffect(() => {
        extractNetwork && extractNetwork(Networks[id]);
    }, [tick]);
    // And, the teardown
    useEffect(() => {
        return () => {
            if (Networks[id]) {
                Networks[id].destroy();
                delete Networks[id];
            }
        };
    }, []);
    return (_jsxs("div", Object.assign({ style: {
            position: "relative",
            ...style
        } }, { children: [useMemo(() => _jsx("div", { style: {
                    height: "100%",
                    width: "100%"
                }, ref: domNode }, void 0), [domNode]), BoltOns.map((BoltOn) => _jsx(BoltOn, { network: Networks[id] }, void 0))] }), void 0));
};
