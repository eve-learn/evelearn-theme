'use client';

import React from 'react';
import Tippy from '../Common/Tippy';
import { tippyClassname } from '../Common/fieldStyle';

const ProgressBar = ({ progress }: { progress: number }) => (
    <div>
        <div className='-mt-2 mb-6'>
            <div className='bg-gray-100 rounded-full h-2'>
                <div
                    className={`rounded-full h-2 ${progress === 100 ? 'bg-green-400' : 'bg-gray-100'}`}
                    style={{
                        width: `${progress}%`,
                        minWidth: '100%',
                        position: 'absolute'
                    }}
                />
            </div>
        </div>
    </div>
);

type Props = {
    steps: { label: string }[];
    stepIndex: number;
    color?: string;
    onStepClick?: (i: number) => void;
}

const ProgressStepBar = ({ steps, stepIndex, onStepClick, color }: Props) => {


    return (
        <div className='flex w-full items-center space-x-0.5 -mt-1 overflow-hidden'>
            {steps.map((el, i) => {
                return (
                    <div className='flex-1 relative' key={`index_progress_${el.label}`}>
                        <Tippy
                            content={el.label}
                            className={tippyClassname}
                        >
                            <div className='mb-4'>
                                <div
                                    // type={'button'}
                                    onClick={() => onStepClick?.(i)}
                                    className='cursor-pointer bg-gray-100 rounded-full h-2 overflow-hidden'>
                                    <div
                                        className={`cursor-pointer rounded-full h-2 ${stepIndex >= i ? 'bg-green-400' : 'bg-gray-100'}`}
                                        style={{
                                            width: `${stepIndex >= i ? 100 : 0}%`,
                                            transition: 'width 0.3s ease'
                                        }}
                                    />
                                </div>
                            </div>
                        </Tippy>
                    </div>
                )
            })}
        </div>
    );
}

ProgressBar.Step = ProgressStepBar;

export default ProgressBar;
