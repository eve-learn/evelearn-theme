'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';

interface Props {
    title: string;
    cancelText?: string;
    isVisible: boolean;
    confirmText?: string;
    isSingleAction?: boolean;
    setDontShowAgain?: React.Dispatch<React.SetStateAction<boolean>>;
    dontShowAgain?: boolean;
    borderColor?: string;
    buttonColor?: 'base' | 'primary' | 'secondary' | 'warning' | 'alert' | 'gray' | undefined;
    onConfirm: (confirmed: boolean) => void;
    onDismissed?: () => void;
    onCancel?: () => void;
    isDark?: boolean;
    children?: React.ReactNode;
}

const BottomAlert: React.FC<Props> = ({ isDark, setDontShowAgain, dontShowAgain, title, borderColor, onDismissed, cancelText, confirmText, onConfirm, onCancel, isSingleAction, children, buttonColor }) => {

    const dismiss = () => {
        onDismissed?.();
    };

    return (
        <div
            className='top-0 left-0 fixed w-full h-screen flex justify-center'
            style={{
                background: isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                zIndex: 9999,
            }}
        >
            <div className='absolute top-0 w-full h-screen flex justify-center bg-gray-200/90 dark:bg-slate-800/50'>
                <div className='absolute sm:w-1/2 w-full mx-auto shadow-xl rounded-md p-6 flex z-50 flex-col top-24 bg-white dark:bg-slate-900 overflow-clip rounded-bl-lg rounded-br-lg border-b-8 border-b-blue-500'>
                    <div style={{ borderColor: borderColor || '#0ea5e9' }}>
                        <h3 className='font-semibold font-header text-gray-700 dark:text-gray-300 text-xl'>{title}</h3>
                        <div className='mt-2 text-lg'>
                            {children}
                        </div>
                        {setDontShowAgain ?
                            <div className='flex items-center space-x-1'>
                                <input
                                    onChange={() => {
                                        setDontShowAgain(s => !s)
                                    }}
                                    id={`show_again_check`}
                                    // value={value ? 'true' : 'false'}
                                    checked={!!dontShowAgain}
                                    type={'checkbox'}
                                    className={`form-checkbox text-blue-600 focus:ring-blue-500 border-gray-300 rounded h-4 w-4`}
                                />
                                <label htmlFor='show_again_check' className='dark:text-gray-200 text-gray-700'>{"Don't show again"}</label>
                            </div>
                            :
                            null
                        }
                        <div className='mt-4 flex items-center justify-end space-x-4 z-10'>
                            {isSingleAction ?
                                <Button
                                    type={'button'}
                                    kind={buttonColor}
                                    onClick={() => {
                                        onConfirm(true);
                                        dismiss()
                                    }}
                                >
                                    {confirmText || 'Okay'}
                                </Button>
                                :
                                <div className='w-1/3 flex justify-end space-x-4'>
                                    <div className='w-full flex flex-col'>
                                        <Button
                                            type={'button'}
                                            kind={'secondary'}
                                            onClick={() => {
                                                onCancel?.();
                                                dismiss()
                                            }}
                                        >
                                            {cancelText || 'Cancel'}
                                        </Button>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <Button
                                            type={'button'}
                                            kind={buttonColor}
                                            onClick={() => {
                                                onConfirm(true);
                                                dismiss()
                                            }}
                                        >
                                            {confirmText || 'Confirm'}
                                        </Button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

const BAWrapper: React.FC<Props> = (props) => {
    if (!props.isVisible) return null;

    return ReactDOM.createPortal(
        <BottomAlert {...props} />,
        document.body
    );
};

export default BAWrapper;
