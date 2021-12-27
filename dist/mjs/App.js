import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { NetworkDiagram } from "./react-vis";
function App() {
    return (_jsx("div", Object.assign({ className: "App" }, { children: _jsx(NetworkDiagram, { style: {
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
export default App;
