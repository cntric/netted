import { NodeData } from "reaflow";

export interface NodeTypeI<T> extends NodeData {
    data : {
        type : string,
        value : T
    }
}