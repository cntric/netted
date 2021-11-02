import React, {FC, ReactElement, useState} from 'react';
import { BaseNode } from './BaseNode';
import {NodeProps} from "reaflow";
import { ExclamationCircleFill } from 'react-bootstrap-icons';
import Tree from "react-json-tree";
import { DocumentNode } from './DocumentNode';
import { PersonNode } from './PersonNode';
import { RiskNode } from './RiskNode';


export type PivotNodeProps = NodeProps & {}

export const PivotNode : FC<PivotNodeProps>  = (props) =>{

    if(props.properties.data){

        if(props.properties.data.type === "person"){
            return (
                <PersonNode {...props}/>
            )
        }

        if(props.properties.data.type === "risk") {
            return (
                <RiskNode {...props}/>
            )
        }


    }

    return (
        <DocumentNode {...props}/>
    )
   
}