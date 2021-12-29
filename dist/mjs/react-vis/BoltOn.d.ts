import React, { FC } from 'react';
import { Network } from "vis-network";
export declare type NetworkDiagramBoltOnProps = {
    network?: Network;
    style?: React.CSSProperties;
    updateCount?: number;
};
export declare type NetworkDiagramBoltOn = FC<NetworkDiagramBoltOnProps>;
