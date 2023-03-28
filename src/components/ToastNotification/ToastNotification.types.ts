export interface ToastNotificationProps {
    message: string;
    type?: 'success' | 'info' | 'warning' | 'error';
    autoClose?: number;
    onClose?: () => void;
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left' | 'top-right',
    closeButtonText?: string,
    actionHandler?: () => void
}