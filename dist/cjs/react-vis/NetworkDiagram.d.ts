import React, { FC } from "react";
import { Network, Edge, Options } from "vis-network/standalone";
import { DataSet } from "vis-data/standalone";
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
    BoltOnMemo?: any[];
    options?: Options;
    extractNetwork?: (network?: Network, nodes?: DataSet<any, any>, edges?: DataSet<any, any>) => any;
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
