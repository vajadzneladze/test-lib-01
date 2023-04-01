export interface ModalProps {
    title?: string,
    size?: ModalSizes,
    isOpen?: boolean,
    children?: JSX.Element | JSX.Element[],
    closeBtn?: string,
    confirmBtn? : string,
    onClick:() => void,
}

export type ModalSizes = 'sm' | 'md' | 'lg';
