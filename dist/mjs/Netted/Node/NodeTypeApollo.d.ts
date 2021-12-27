/// <reference types="react" />
export interface NodeApolloStringI {
    type: "string";
    value: string;
}
export interface NodeApolloNumberI {
    type: "number";
    value: number;
}
export interface NodeApolloBooleanI {
    type: "boolean";
    value: boolean;
}
export declare type NodeApolloPrimitiveT = NodeApolloStringI | NodeApolloNumberI | NodeApolloBooleanI;
export declare type NodeApolloArrayT = (NodeApolloPrimitiveT | NodeApolloObjectI)[];
export interface NodeApolloObjectI {
    type: "object";
    value: {
        [key: string]: NodeApolloPrimitiveT | NodeApolloArrayT;
    };
}
export declare type NodeApolloValueT = NodeApolloPrimitiveT | NodeApolloArrayT | NodeApolloObjectI;
export interface NodeApolloEdgeI {
    color?: React.CSSProperties;
    value?: NodeApolloValueT;
    toNodeId: string;
}
export declare type NodeApolloShapeT = "rounded-rectangle" | "sharp-rectangle" | "circle" | "triangle";
export interface NodeApolloI {
    id: string;
    canvasId: string;
    pos: {
        x: number;
        y: number;
    };
    edges: {
        [key: string]: NodeApolloEdgeI;
    };
    value: NodeApolloValueT;
    style?: React.CSSProperties;
    shape: NodeApolloShapeT;
}
