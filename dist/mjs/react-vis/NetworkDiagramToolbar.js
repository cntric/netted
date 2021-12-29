import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Diagram2Fill } from 'react-bootstrap-icons';
import { Button } from "cntric-component-library";
/**
 * Produces a default toolbar for the network diagram.
 * @param param0
 * @returns
 */
export const DefaultNetworkDiagramToolbar = ({ network, style }) => {
    const [editMode, setEditMode] = useState("none");
    const handleAddEdge = async () => {
        if (editMode === "edge")
            setEditMode("none");
        else
            setEditMode("edge");
    };
    useEffect(() => {
        if (editMode === "edge") {
            network && network.addEdgeMode();
            network && network.on("startStabilizing", () => {
                network && network.addEdgeMode();
            });
        }
        if (editMode === "none") {
            network && network.disableEditMode();
            network && network.on("startStabilizing", () => {
                network && network.disableEditMode();
            });
        }
        ;
    });
    console.log(network?.getSelection());
    return (_jsx("div", Object.assign({ style: {
            padding: "5px",
            display: "grid",
            position: "absolute",
            top: "5px",
            left: "5px",
            border: "1px solid",
            zIndex: 1000,
            backdropFilter: "invert(1%)",
            borderRadius: "2px",
            fontSize: "10px"
        } }, { children: _jsxs("div", Object.assign({ style: {
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "2fr 1fr"
            } }, { children: [_jsx(Button, Object.assign({ action: handleAddEdge, size: "sm", primaryColor: "blue", secondaryColor: "white", invert: editMode === "edge" }, { children: _jsx(Diagram2Fill, { size: "18px" }, void 0) }), void 0), _jsx("div", { children: "Add edge" }, void 0)] }), void 0) }), void 0));
};
