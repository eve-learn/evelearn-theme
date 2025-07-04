'use client';

import { useEffect, useState } from 'react';
const PRIMARY_COLOR = '#00b4d8';

const ScrollProgress = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100

            setScrollPercentage(scrollPercent)
        }


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div
            style={{
                height: '4px',
                borderRadius: 2,
                width: '100%',
                // backgroundColor: '#d1dced',
                position: 'fixed',
                top: '62px',
                left: '0px',
                right: '0px',
            }}
        >
            <div
                style={{
                    height: '100%',
                    backgroundColor: PRIMARY_COLOR,
                    borderRadius: 2,
                    width: `${scrollPercentage}%`,
                }}
            >

            </div>
        </div>
    )
};

export default ScrollProgress;
