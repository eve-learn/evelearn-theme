'use client';

import React, { CSSProperties } from 'react';
import Overlay from '../Backdrop/Overlay';
import XIcon from '../Icons/XIcon';
import clsx from 'clsx';


export interface BaseModalProps {
    visible: boolean;
    children: React.ReactNode;
    appear?: boolean;
    dismissable?: boolean;
    dismissOnBackdropClick?: boolean;
    onDismissed?: () => void;
    style?: CSSProperties;
    fullscreen?: boolean;
    dismissLink?: string;
    bgOpacity?: number;
    displayDark?: boolean;
}

type ModalProps = BaseModalProps;

const Modal = ({
    visible,
    children,
    fullscreen,
    displayDark,
    dismissLink,
    bgOpacity,
    onDismissed,
    dismissable = true,
    dismissOnBackdropClick = true,
    style,
    ...props
}: ModalProps) => {
    if (!visible) return null;

    // Modal content wrapper class for fullscreen logic
    const modalWrapperClass = clsx(
        'relative mx-1 w-full',
        !fullscreen && 'md:mx-auto md:w-3/4 lg:w-1/2',
        fullscreen && 'fixed inset-0 mx-0 w-full h-full flex items-center justify-center md:mx-0 md:w-full lg:w-full'
    );

    // Modal panel class for fullscreen logic
    const modalPanelClass = clsx(
        'my-1 sm:mt-16 bg-white dark:bg-slate-900 shadow-lg border border-gray-100 dark:border-none rounded-xl overflow-x-visible overflow-y-visible no-scrollbar',
        fullscreen && 'rounded-none sm:mt-0 h-full w-full flex flex-col justify-center'
    );

    // Modal panel style for fullscreen logic
    const modalPanelStyle: CSSProperties = fullscreen
        ? { height: '100vh', width: '100vw', maxHeight: '100vh', ...style }
        : { maxHeight: 'calc(100vh - 6rem)', ...style };

    // Modal inner padding adjustment for fullscreen
    const innerPaddingClass = fullscreen ? 'p-4 sm:p-10 flex-1 flex items-center justify-center' : 'p-4 sm:p-10';

    // Inner "mt" adjustment for fullscreen
    const contentMarginTopClass = fullscreen ? '' : 'mt-8 sm:mt-0';

    return (
        <Overlay
            visible={visible}
            onClick={dismissOnBackdropClick ? onDismissed : undefined}
            isDark={displayDark}
            withContainer={true}
            {...props}
        >
            <div
                className={clsx(
                    displayDark && 'dark',
                    'bg-slate-900/20 fixed inset-0 flex items-center justify-center'
                )}
                style={{ zIndex: 10000 }}
            >
                <div className={modalWrapperClass}>
                    {dismissLink ? (
                        <a href={dismissLink}>
                            <div onClick={onDismissed}>
                                <XIcon className='absolute h-5 w-5 top-4 sm:top-8 right-4 transition-colors cursor-pointer duration-75 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500' />
                            </div>
                        </a>
                    ) : dismissable ? (
                        <button
                            className='absolute top-4 sm:top-8 right-4 transition-colors cursor-pointer duration-75 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500'
                            type={'button'}
                            onClick={onDismissed}
                        >
                            <XIcon className='h-5 w-5' />
                        </button>
                    ) : null}
                    <div
                        className={modalPanelClass}
                        onClick={e => e.stopPropagation()}
                        style={modalPanelStyle}
                    >
                        <div className={innerPaddingClass}>
                            <div className={contentMarginTopClass}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Overlay>
    );
};

export default Modal;