import React, {FC, ReactElement, useState} from 'react';
import { ReactDiagram, ReactPalette, ReactOverview } from 'gojs-react';
import * as go from "gojs";
import { Canvas, NodeProps, LayoutNodeData, NodeData, EdgeData, EdgeProps } from 'reaflow';
import { BaseNode} from '../../Nodes/BaseNode';
import { BaseEdge, mkBaseEdge } from '../../Edges/BaseEdge';
import { PersonNode } from '../../Nodes/PersonNode';
import { EdgeWithInformation } from '../../Edges/EdgeWithInformation';
import { PivotNode } from '../../Nodes/PivotNode';

export type NetworkDiagramAlonsoProps = {}

export const NetworkDiagramAlonso : FC<NetworkDiagramAlonsoProps>  = () =>{

  const [nodes, setNodes] = useState<LayoutNodeData[]>([
    {
      id: 'Liam',
      text: '1',
      x : 0,
      y : 0,
      data : {
        type : "person",
        name : "Liam M"
      }
    },
    {
      id: 'Anna',
      text: '2',
      x : 5,
      y : 10,
      data : {
        type : "person",
        name : "Anna H"
      }
    },
    {
      id: 'Waldo',
      text: '3',
      x : 5,
      y : 10,
      data : {
        type : "person",
        name : "Waldo"
      }
    },
    {
      id: 'Cleo',
      text: '2',
      x : 5,
      y : 10,
      data : {
        type : "person",
        name : "Cleo"
      }
    },
    {
      id: 'doc-01',
      text: '3',
      x : 18,
      y : 20,
      data : {
        type : "document",
        name : "Report 01"
      }
    },
    {
      id: 'receipt-01',
      text: '3',
      x : 18,
      y : 20,
      data : {
        type : "document",
        name : "Order 01"
      }
    },
    {
      id : 'pii-01',
      text : '4',
      x : 30,
      y : 30,
      data : {
        type : "risk",
        name : "Client PII"
      },
    },
      {
        id : 'pii-02',
        text : '4',
        x : 30,
        y : 30,
        data : {
          type : "risk",
          name : "Kids' PII"
        }
      }
  ]);
  const [edges, setEdges] = useState<EdgeData[]>([
    {
      from : "Liam",
      to : "Anna",
      id : "1-2",
    }
  ]);

  return (
    <Canvas
      nodes={nodes}
      edges={edges}
      node={(node : NodeProps)=>{
        return (
          <PivotNode {...node}/>
        )
      }}
      edge={(edge : EdgeProps)=>{

        return (
          <EdgeWithInformation {...edge}/>
        )
      }}
      arrow={<></>}
      onNodeLink={(event, from, to) => {
        const id = `${from.id}-${to.id}`;

        setEdges([
          ...edges,
          {
            id,
            from: from.id,
            to: to.id
          }
        ]);
      }}
    />
  )
}