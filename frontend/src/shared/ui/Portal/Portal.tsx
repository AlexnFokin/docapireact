import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element,
    } = props;

    const target = element ?? document.getElementById('root') ?? document.body

    return createPortal(children, target);
};