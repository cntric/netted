import { jsx as _jsx } from "react/jsx-runtime";
import { Children, useRef, useEffect } from 'react';
export const NodesAndris = ({ children, style }) => {
    const containerRef = useRef(null);
    const _children = Children.toArray(children).map((child) => {
        return containerRef && child.props ? {
            ...child,
            props: {
                ...child.props,
                containerRef: containerRef
            }
        } : child;
    });
    useEffect(() => {
        console.log(containerRef);
    });
    return (_jsx("div", Object.assign({ ref: containerRef, style: {
            height: "100%",
            width: "100%",
            ...style
        } }, { children: _children }), void 0));
};
