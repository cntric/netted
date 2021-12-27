import { PanInfo } from 'framer-motion';
import { FC } from 'react';
import { NodeApolloI } from '../NodeTypeApollo';
export declare type GenericNodeAgambenProps = {
    node: NodeApolloI;
    updateNode: (node: NodeApolloI, targetId: string) => void;
    onDragEnd?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    onDragStart?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    onDrag?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
};
export declare const GenericNodeAgamben: FC<GenericNodeAgambenProps>;
