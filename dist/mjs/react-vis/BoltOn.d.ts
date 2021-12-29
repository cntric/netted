import React, { FC } from 'react';
import { Network } from "vis-network";
import { DataSet } from "vis-data";
export declare type NetworkDiagramBoltOnProps = {
    network?: Network;
    style?: React.CSSProperties;
    updateCount?: number;
    edges?: DataSet<any, any>;
    nodes?: DataSet<any, any>;
};
export declare type NetworkDiagramBoltOn = FC<NetworkDiagramBoltOnProps>;
