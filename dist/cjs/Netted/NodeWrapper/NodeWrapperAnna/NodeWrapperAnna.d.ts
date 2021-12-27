import React, { FC } from 'react';
import { PanInfo } from "framer-motion";
export declare type NodeWrapperAnnaProps = {
    style?: React.CSSProperties;
    containerRef?: React.RefObject<HTMLDivElement>;
    onDragEnd?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    onDragStart?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    onDrag?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
};
declare const NodeWrapperAnna: FC<NodeWrapperAnnaProps>;
export { NodeWrapperAnna };
