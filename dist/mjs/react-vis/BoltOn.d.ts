import React, { FC } from 'react';
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data/standalone";
export declare type NetworkDiagramBoltOnProps = {
    network?: Network;
    style?: React.CSSProperties;
    updateCount?: number;
    edges?: DataSet<any, any>;
    nodes?: DataSet<any, any>;
};
export declare type NetworkDiagramBoltOn = FC<NetworkDiagramBoltOnProps>;
