"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkDiagramSuiteA = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const NetworkDiagram_1 = require("./NetworkDiagram");
const NetworkDiagramSuiteA = () => {
    describe("Basic functionality for network diagram.", function () {
        test("Renders", function () {
            (0, react_1.render)((0, jsx_runtime_1.jsx)(NetworkDiagram_1.NetworkDiagram, {}, void 0));
        });
    });
};
exports.NetworkDiagramSuiteA = NetworkDiagramSuiteA;
(0, exports.NetworkDiagramSuiteA)();
