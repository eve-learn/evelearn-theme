'use client';
import React, { useEffect, useMemo, useState } from 'react';
import XIcon from '../Icons/XIcon';

interface Props {
    type?: 'error' | 'warning' | 'info';
    isDismissible?: boolean;
    onDismiss?: () => void;
    isVisible: boolean;
}

const NoticeBox: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ children, type, isDismissible, isVisible, onDismiss }) => {
    const [visible, setVisible] = useState(true);

    const styles = useMemo(() => {
        const base = 'relative text-base rounded-md p-2 ';
        if (!visible) return 'hidden';
        switch (type) {
            case 'error':
                return base.concat('w-full absolute top-50 text-red-500 border-red-400 border-2');
            case 'info':
                return base.concat('text-green-800 border-green-400 bg-green-100');
            case 'warning':
                return base.concat('text-orange-500 border border-orange-400 bg-white');
            default:
                return base.concat('w-full absolute top-0 text-red-500 border-red-500 bg-white p-3 border-2');
        }
    }, [type, visible]);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    if (!isVisible) return null;
    return (
        <div
            style={{
                zIndex: 100,
            }}
            className={styles}
        >
            <div className='relative'>
                {isDismissible &&
                    <button
                        type={'button'}
                        onClick={() => {
                            setVisible(s => !s)
                            onDismiss?.();
                        }}
                        className='absolute bottom-1 right-1 transition-colors cursor-pointer duration-75 hover:text-blue-500'
                    >
                        <XIcon className='h-5 w-5' />
                    </button>
                }
                {children}
            </div>
        </div>
    )
}

export default NoticeBox;
