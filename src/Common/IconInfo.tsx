'use client';

import clsx from "clsx";
import Tippy from "./Tippy";
import { tippyClassname } from "./fieldStyle";


type IconInfoProps = {
    content: string;
    icon: React.ReactNode;
    number: number;
    color?: string;
}


const IconInfo = ({ content, icon, number, color }: IconInfoProps) => {
    return (
        <div className='flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-slate-400 dark:bg-slate-600 dark:border dark:border-white'>
            <Tippy
                className={tippyClassname}
                content={content}
            >
                <div className='relative'>
                    {icon}
                    <p className={clsx('absolute -bottom-1', 
                        number > 9 
                            ? number > 99 
                                ? number > 999 
                                    ? 'w-8 h-8 -right-6 -bottom-3' 
                                    : 'w-6 h-6 -right-5 -bottom-2' 
                                : 'w-5 h-5 -right-3' 
                            : 'w-4 -right-3', 
                        'flex justify-center items-center text-xs font-sans rounded-full text-white', 
                        color || 'bg-secondary'
                    )}>
                        {number}
                    </p>
                </div>
            </Tippy>
        </div>
    )
}

export default IconInfo;
