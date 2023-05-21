import React, { ReactNode, useEffect } from 'react';
import { Tooltip as DxToolTip } from 'devextreme-react';

const animationConfig: any = {
    show: {
        type: 'pop',
        from: { scale: 0.1, opacity: 0 },
        to: { scale: 1, opacity: 1 },
    },
    hide: {
        type: 'pop',
        from: { scale: 1, opacity: 1 },
        to: { scale: 0.1, opacity: 0 },
    },
};


export interface ToolTipProp {
    id: string,
    children: ReactNode | JSX.Element,
    position: 'left' | 'top' | 'right' | 'bottom'
}

const Tooltip = ({ id, children, position }: ToolTipProp) => {

    useEffect(() => {

        const toolTP = document.querySelector('.dx-popup-content') as HTMLElement;

        if(toolTP ){
          toolTP.style.color = 'red !important';
        }
    }, [])
 
    return (
        
        children  ? 
        <DxToolTip
            target={`#${id}`}
            showEvent="mouseenter"
            // hideEvent="mouseleave"
            animation={animationConfig}
            position={position || 'left'}
            hideOnOutsideClick={false}
        >
            {children && children}
        </DxToolTip> : <div></div>
    )
}


export default Tooltip;