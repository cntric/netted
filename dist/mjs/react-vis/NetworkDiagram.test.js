import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "@testing-library/react";
import { NetworkDiagram } from "./NetworkDiagram";
export const NetworkDiagramSuiteA = () => {
    describe("Basic functionality for network diagram.", function () {
        test("Renders", function () {
            render(_jsx(NetworkDiagram, {}, void 0));
        });
    });
};
NetworkDiagramSuiteA();
