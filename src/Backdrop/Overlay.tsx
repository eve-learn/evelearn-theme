'use client';

import React, { useEffect, useState } from 'react';
import { BaseModalProps } from '../Common/Modal';
import ReactDOM from 'react-dom';

export type OverlayProps = BaseModalProps & {
    children?: React.ReactNode;
    withContainer?: boolean;
    opacity?: number;
    isDark?: boolean;
    zIndex?: number;
    onClick?: () => void;
}

const Overlay = ({ visible, onDismissed, onClick, zIndex, isDark, children, opacity, withContainer = true, }: OverlayProps) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        let root = document.getElementById('modal-root');
        if (!root) {
            root = document.createElement('div');
            root.id = 'modal-root';
            // Add the same theme class to modal root as the document element
            root.classList.add(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            document.body.appendChild(root);
        }
        setModalRoot(root);

        return () => {
            const root = document.getElementById('modal-root');
            if (root) {
                document.body.removeChild(root);
            }
        }
    }, [visible]);

    if (!visible || !modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="animate-fade-in">
            {withContainer ?
                <div
                    onClick={onDismissed || onClick}
                    className='top-0 left-0 fixed w-full h-screen dark:bg-black/70 bg-white/60 backdrop-blur-lg flex items-center justify-center'
                    style={{
                        // background: dark ? `rgba(0, 0, 0, ${opacity || '0.7'})` : `rgba(255, 255, 255, ${opacity || '0.6'})`,
                        zIndex: zIndex || 9999,
                    }}
                >
                    {children}
                </div>
                :
                children
            }
        </div>,
        modalRoot
    );
};

export default Overlay;