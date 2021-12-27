import React, {FC, ReactElement, useEffect, useState} from 'react';
import {
    Network, Options
} from "vis-network/standalone/esm/vis-network";

export type NetworkDiagramBoltOnProps = {
    network ? : Network
    style ? : React.CSSProperties,
    updateCount ? : number
}

export type NetworkDiagramBoltOn = FC<NetworkDiagramBoltOnProps>;