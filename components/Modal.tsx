
import React, { useEffect } from 'react';
import { XMarkIcon } from './icons';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-[99] transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative transition-transform duration-300 transform scale-100"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 text-3xl cursor-interactive"
                    aria-label="Close modal"
                >
                    <XMarkIcon className="w-8 h-8"/>
                </button>
                <div className="text-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
