import React, { FC, Ref } from 'react';
import { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
export interface CanvasEventHandlerI {
    (event: React.MouseEvent<HTMLCanvasElement>, ref: Exclude<React.RefObject<HTMLCanvasElement>, null>, frame: number, isDrawing: boolean): void;
}
export declare type CanvasAntonioProps = {
    extentY?: number;
    extentX?: number;
    initialX?: number;
    initialY?: number;
    style?: React.CSSProperties;
    panning?: boolean;
    onPanningStop?: (ref: ReactZoomPanPinchRef, event: MouseEvent | TouchEvent) => void;
    onMouseUp?: CanvasEventHandlerI;
    onMouseDown?: CanvasEventHandlerI;
    onMouseMove?: CanvasEventHandlerI;
};
export interface NodeFC extends FC {
    x: number;
    y: number;
}
export interface NodesFC extends FC {
    children: NodeFC;
}
export declare const render: (ref: Ref<HTMLCanvasElement>, frame: number, draw: CanvasEventHandlerI) => number;
declare const CanvasAntonio: FC<CanvasAntonioProps> & {
    Overlays: FC;
};
export { CanvasAntonio };
