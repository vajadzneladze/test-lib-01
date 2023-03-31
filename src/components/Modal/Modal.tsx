import React, { useEffect, useState } from "react";
import { StyledModal, StyledModalBody, StyledModalContent, StyledModalFooter, StyledModalHeader } from "./StyledModal";
import { ModalProps } from "./Modal.types";
import Button from "../Button/Button";


const Modal = ({
    size = 'md',
    title = '',
    closeBtn,
    confirmBtn,
    onClick,
    isOpen = false,
    children
}: ModalProps) => {

    const [isMounted, setIsMounted] = useState(isOpen);

    useEffect(() => {

        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    return (

        isMounted ? <StyledModal className={`component ${isMounted ? 'show' : ''}`}  >
            <StyledModalContent size={size} >
                {title && <StyledModalHeader >  {title} </StyledModalHeader>}

                <StyledModalBody>
                    {children}
                </StyledModalBody>

                {(closeBtn || confirmBtn) && <StyledModalFooter >

                    {closeBtn && size !== 'sm' && <Button variant='outlined' size='small' text={closeBtn} onClick={() => setIsMounted(false)} />}
                    {confirmBtn && <Button variant='contained' size='small' text={confirmBtn} onClick={() => onClick()} style={size === 'sm' ? { width: '296px' } : {}} />}

                </StyledModalFooter>}
            </StyledModalContent>
        </StyledModal > : null
    );
}


export default Modal;