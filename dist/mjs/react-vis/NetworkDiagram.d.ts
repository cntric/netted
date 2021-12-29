import React, { FC } from "react";
import { Network, Edge, Options } from "vis-network/standalone";
import { NetworkDiagramBoltOn } from "./BoltOn";
export declare type NodeDetailsI = Options["nodes"] & {
    x: number;
    y: number;
    label: string;
};
export interface NetworkDiagramProps {
    style?: React.CSSProperties;
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
