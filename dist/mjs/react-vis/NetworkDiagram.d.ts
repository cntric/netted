import { FC } from "react";
import { Edge, Network, Options } from "vis-network/standalone/esm/vis-network";
import { NetworkDiagramBoltOn } from "./BoltOn";
export declare type NodeDetailsI = Options["nodes"] & {
    x: number;
    y: number;
    label: string;
};
export interface NetworkDiagramProps {
    nodes?: {
        [key: string]: NodeDetailsI;
    };
    edges?: Edge[];
    BoltOns?: NetworkDiagramBoltOn[];
    options?: Options;
    extractNetwork?: (network?: Network) => any;
}
export declare const Networks: {
    [key: string]: Network;
};
/**
 *
 * @param param0
 * @returns
 */
export declare const NetworkDiagram: FC<NetworkDiagramProps>;
