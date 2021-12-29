import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Network} from "vis-network";
import { DataSet } from "vis-data";

export type NetworkDiagramBoltOnProps = {
    network ? : Network
    style ? : React.CSSProperties,
    updateCount ? : number,
    edges ? : DataSet<any, any>,
    nodes ? : DataSet<any, any>
}

export type NetworkDiagramBoltOn = FC<NetworkDiagramBoltOnProps>;