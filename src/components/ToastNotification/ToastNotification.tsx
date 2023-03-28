import React from 'react';
import { toast, ToastOptions, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { ToastNotificationProps } from './ToastNotification.types';

export const StyledAction = styled.div`
    margin-top: 6px;
    cursor:pointer;
`;

const ToastNotification: React.FC<ToastNotificationProps> = ({
    message,
    type = 'info',
    autoClose = 3000,
    onClose,
    position = "top-right",
    closeButtonText,
    actionHandler = () => { }
}) => {

    const toastProps: ToastOptions = {
        position: position,
        autoClose: autoClose,
        onClose,
        closeButton: closeButtonText ? <StyledAction onClick={() => actionHandler()} className="action-button"> {closeButtonText} </StyledAction> : false,
        hideProgressBar: true,
        closeOnClick: false,
        transition: Bounce
    };

    switch (type) {
        case 'success':
            toast.success(message, toastProps);
            break;
        case 'warning':
            toast.warning(message, toastProps);
            break;
        case 'error':
            toast.error(message, toastProps);
            break;
        default:
            toast.info(message, toastProps);
            break;
    }

    return null;
};


export default ToastNotification;