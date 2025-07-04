'use client';
import React from 'react';


type Props = {
    twColor?: string;
    percentage: number;
    radius: number;
    fill?: string;
    strokeWidth?: number;
}

const CircleProgress = ({ twColor, percentage, radius, fill, strokeWidth }: Props) => {
    const r = radius;

    const cx = '50%';
    const cy = '50%';
    const w = Math.round(radius / 16);
    const strokeWidthCalc = strokeWidth ? strokeWidth : w < 8 ? 8 : w;

    const size = radius * 2 + strokeWidthCalc;
    return (
        <div style={{ height: size, width: size }}>
            <svg viewBox={`0 0 ${size} ${size}`} className='-rotate-90'>
                <circle
                    className='text-white/50 dark:text-slate-200/50'
                    strokeWidth={strokeWidthCalc - .5}
                    stroke='currentColor'
                    fill={fill || 'transparent'}
                    r={r}
                    cx={cx}
                    cy={cy}
                />
                <circle
                    strokeDasharray={2 * Math.PI * r}
                    strokeDashoffset={2 * Math.PI * r - ((percentage / 100) * 2 * Math.PI * r)}
                    // style={animatedStyle}
                    stroke={twColor || 'white/50'}
                    strokeWidth={strokeWidthCalc}
                    strokeLinecap='round'
                    fill='transparent'
                    r={r}
                    cx={cx}
                    cy={cy}
                />
            </svg>
        </div>
    )
};

export default CircleProgress;
