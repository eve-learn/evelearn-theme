'use client';

import React from 'react';
// import { PRIMARY_COLOR } from '../contstants';
const PRIMARY_COLOR = '#00b4d8';

type Props = {
    twColor?: string;
    percentage: number;
    label: string;
}

const CourseProgress = ({ twColor, percentage, label }: Props) => {
    // 2pi * r = c

    const cx = '50%';
    const cy = '50%';
    const r = 50;
    const strokeWidth = 10;

    const fullLength = 2 * Math.PI * r;
    // one minus percentage because this is the dash offset
    // so 30% needs to be offset 70%.
    const length = fullLength * (percentage < 1 ? 1 - (percentage) : 0.01);

    // from: {
    //     strokeDasharray: 2 * Math.PI * r,
    //     strokeDashoffset: length,
    //     transformOrigin: 'center',
    // },

    const strokeDashoffset = 2 * Math.PI * r - ((percentage / 100) * 2 * Math.PI * r);

    return (
        <div className='flex items-center flex-col justify-center space-y-0  dark:bg-inherit dark:text-gray-300'>
            <div className='relative flex items-center justify-center -my-2 -mt-1 overflow-hidden rounded-full'>
                <svg className='-rotate-90'>
                    <circle
                        className='text-gray-300'
                        strokeWidth={strokeWidth}
                        stroke='currentColor'
                        fill='transparent'
                        // strokeLinecap={'round'}
                        r={r}
                        cx={cx}
                        cy={cy}
                    />
                    <circle
                        style={{ strokeDashoffset }}
                        color={twColor || PRIMARY_COLOR}
                        ref={(ref) => {
                            // The ref is `null` on component unmount
                            if (ref) {
                                // setLength(ref.getTotalLength());
                            }
                        }}
                        strokeWidth={strokeWidth}
                        strokeLinecap='round'
                        stroke='currentColor'
                        fill='transparent'
                        r={r}
                        cx={cx}
                        cy={cy}
                        strokeDasharray={fullLength}
                        strokeDashoffset={length}
                    />
                </svg>
                <span className={`absolute top-[${50 / 2}] text-xl leading-none font-medium font-header hidden sm:block`}>{(percentage).toString() + '%'}</span>
            </div>
            <p className='font-medium sm:text-xl font-header text-center w-full'>{label}</p>
        </div>
    )
}

const Small = ({ twColor, percentage, label }: Props) => {

    const cx = 18;
    const cy = 18;
    const r = 14;
    const strokeWidth = 4;
    const strokeDashoffset = 2 * Math.PI * r - ((percentage / 100) * 2 * Math.PI * r);


    return (
        <div className='flex items-center space-x-2 rounded-full bg-transparent border-2 border-slate-100 w-full'>
            <div className='flex items-center justify-center overflow-hidden'>
                <svg className='w-10 h-11 transform translate-x-1 translate-y-1'>
                    <circle
                        className='text-gray-300'
                        strokeWidth={strokeWidth}
                        stroke='currentColor'
                        fill='transparent'
                        r={r}
                        cx={cx}
                        cy={cy}
                    />
                    <circle
                        style={{ strokeDashoffset }}
                        className={twColor || 'text-blue-500'}
                        ref={(ref) => {
                            // The ref is `null` on component unmount
                            if (ref) {
                                // setLength(ref.getTotalLength());
                            }
                        }}
                        strokeWidth={strokeWidth}
                        // strokeDasharray='circumference'
                        // strokeDashoffset='circumference'
                        strokeLinecap='round'
                        stroke='currentColor'
                        fill='transparent'
                        r={r}
                        cx={cx}
                        cy={cy}
                    />
                </svg>
            </div>
            <p className='font-medium dark:text-gray-300 text-gray-600 text-sm font-header mt-1'>{label} {(percentage).toString() + '%'}</p>
        </div>
    )
};

CourseProgress.Small = Small;

export default CourseProgress;
