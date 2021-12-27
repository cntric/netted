"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const react_vis_1 = require("./react-vis");
function App() {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsx)(react_vis_1.NetworkDiagram, { style: {
                height: "100vh",
                width: "100vw"
            }, nodes: {
                "liam": {
                    label: "Liam",
                    x: 0,
                    y: 0
                },
                "kayla": {
                    label: "kayla",
                    x: 0,
                    y: 0
                },
                "rory": {
                    label: "rory",
                    x: 10,
                    y: 10
                }
            }, edges: [
                { from: "liam", to: "kayla" }
            ] }, void 0) }), void 0));
}
exports.default = App;
