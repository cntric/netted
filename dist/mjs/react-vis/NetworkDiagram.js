import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useReducer, useMemo } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data/standalone";
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
export const NetworkDiagram = ({ style, nodes, edges, BoltOns = [DefaultNetworkDiagramToolbar, NetworkDiagramEditor], BoltOnMemo, options, extractNetwork }) => {
    // reset 
    const network = useRef(undefined);
    // A reference to the div rendered by this component
    const domNode = useRef(null);
    // I'm only accepting nodes as an object, with keys for ids.
    const _nodes = convertNodesToDataSet(nodes || {});
    const data = {
        nodes: _nodes,
        edges: new DataSet(edges || [])
    };
    useEffect(() => {
        if (domNode.current && !network.current)
            network.current = new Network(domNode.current, data, {});
    }, [domNode.current]);
    // We need the component to be rerendered once
    // after the domNode has been rendered and the network initialized.
    const [tick, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
        forceUpdate();
    }, []);
    // handle new data on options by mutably setting the data and options
    useEffect(() => {
        network.current?.setData(data);
    }, [data, tick]);
    useEffect(() => {
        network.current?.setOptions(options || {});
    }, [options, tick]);
    // allow network to be extracted
    useEffect(() => {
        console.log("Extracting network...", network.current, data.nodes, data.edges);
        extractNetwork && extractNetwork(network.current, data.nodes, data.edges);
    }, [tick]);
    // And, the teardown
    useEffect(() => {
        return () => {
            if (network.current) {
                network.current.destroy();
                delete network.current;
            }
        };
    }, []);
    return (_jsxs("div", { style: {
            position: "relative",
            ...style
        }, children: [useMemo(() => _jsx("div", { style: {
                    height: "100%",
                    width: "100%"
                }, ref: domNode }, void 0), [domNode]), useMemo(() => BoltOns.map((BoltOn) => _jsx(BoltOn, { edges: data.edges, nodes: data.nodes, network: network.current }, generate())), [...BoltOnMemo || []])] }, void 0));
};
