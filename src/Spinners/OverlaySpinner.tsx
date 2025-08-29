'use client';

import AnimateLogo from '../Icons/AnimateLogo';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = { visible: boolean; };

const OverlaySpinner = ({ visible }: Props) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (modalRoot || !visible) return;
        // Create a div element to serve as our portal's root
        let root = document.getElementById('spinner-root');
        if (!root) {
            root = document.createElement('div');
            root.id = 'spinner-root';
            document.body.appendChild(root);
        }
        setModalRoot(root);
        return () => {
            let root = document.getElementById('spinner-root');
            if (root) {
                // root = document.createElement('div');
                // root.id = 'modal-root';
                document.body.removeChild(root);
            }
        }

    }, [visible]);

    if (!visible || !mounted) return null;
    return (
        createPortal(
            <div style={{zIndex: 11000}} className="animate-fade-in">
                <div style={{zIndex: 11001}} className='fixed top-0 left-0 w-full h-screen flex items-center justify-center dark:bg-black/70 bg-white/60'>
                    <div className='h-44 w-44 overflow-visible'>
                        <AnimateLogo />
                    </div>
                </div>
            </div>,
            typeof window !== 'undefined' ? document.body : {} as DocumentFragment, 'spinner'
        )
    )
}

export default OverlaySpinner;
