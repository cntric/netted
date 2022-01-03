"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNetworkDiagramToolbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_icons_1 = require("react-bootstrap-icons");
const cntric_component_library_1 = require("cntric-component-library");
/**
 * Produces a default toolbar for the network diagram.
 * @param param0
 * @returns
 */
const DefaultNetworkDiagramToolbar = ({ network, style }) => {
    const [editMode, setEditMode] = (0, react_1.useState)("none");
    const handleAddEdge = () => __awaiter(void 0, void 0, void 0, function* () {
        if (editMode === "edge")
            setEditMode("none");
        else
            setEditMode("edge");
    });
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
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
        } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "2fr 1fr"
            } }, { children: [(0, jsx_runtime_1.jsx)(cntric_component_library_1.Button, Object.assign({ action: handleAddEdge, size: "sm", primaryColor: "blue", secondaryColor: "white", invert: editMode === "edge" }, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_icons_1.Diagram2Fill, { size: "18px" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", { children: "Add edge" }, void 0)] }), void 0) }), void 0));
};
exports.DefaultNetworkDiagramToolbar = DefaultNetworkDiagramToolbar;
