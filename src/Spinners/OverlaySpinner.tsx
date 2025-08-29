'use client';

import AnimateLogo from '../Icons/AnimateLogo';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = { visible: boolean; };

const OverlaySpinner = ({ visible }: Props) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        let root = document.getElementById('spinner-root');
        if (!root) {
            root = document.createElement('div');
            root.id = 'spinner-root';
            document.body.appendChild(root);
        }
        setModalRoot(root);
        
        // No cleanup needed here. We want the root to persist.
    }, []);

    if (!visible || !modalRoot) {
        return null;
    }

    return createPortal(
        <div style={{zIndex: 11000}} className="animate-fade-in">
            <div style={{zIndex: 11001}} className='fixed top-0 left-0 w-full h-screen flex items-center justify-center dark:bg-black/70 bg-white/60'>
                <div className='h-44 w-44 overflow-visible'>
                    <AnimateLogo />
                </div>
            </div>
        </div>,
        modalRoot
    );
};

export default OverlaySpinner;
