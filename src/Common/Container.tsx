'use client';

import React, { useEffect } from 'react';
// import ErrorBoundary from './ErrorBoundary';

interface ContainerProps {
    backgroundColor?: string;
    backgroundImage?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    isDark?: boolean;
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ backgroundColor, backgroundImage, style, children, onClick }) => {
    // Apply background color to body using useEffect
    useEffect(() => {
        if (backgroundColor) {
            document.body.style.background = backgroundColor;
        } else {
            document.body.style.background = '';
        }

        // Cleanup function to reset body background when component unmounts
        return () => {
            document.body.style.background = '';
        };
    }, [backgroundColor]);

    return (
        (backgroundImage) ?
            <div
                style={{
                    backgroundImage: backgroundImage,
                    backgroundSize: 'cover',
                    ...style,
                }}
                className='w-full md:min-h-screen dark:bg-slate-950 mx-auto overflow-y-auto overflow-x-clip px-0 md:px-2 sm:py-4 py-1 relative'
                onClick={onClick}
            >
                {children ? children : null}
            </div>
            :
            <div
                className={`w-full dark:bg-slate-950 mx-auto overflow-y-auto overflow-x-clip px-0 sm:px-16 relative pt-20`}
                onClick={onClick}
                style={style || { minHeight: '100vh' }}
            >
                {children ? children : null}
            </div>
    );
};

export default Container;
