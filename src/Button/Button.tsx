'use client';

import clsx from 'clsx';
import React from 'react';

interface Props {
    disabled?: boolean;
    kind?: 'primary' | 'secondary' | 'base' | 'warning' | 'alert' | 'gray' | 'green' | 'teal' | 'indigo';
    size?: 'small' | 'fixed' | 'large';
    type?: 'button' | 'submit';
    loading?: boolean;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ disabled = false, loading, onClick, kind = 'primary', size = 'small', type = 'button', children }: Props) => {

    const styled = () => {
        switch (kind) {
            case 'primary':
                return clsx('bg-primary font-header text-white font-medium transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            case 'indigo':
                return clsx('bg-indigo-500 font-header text-white font-medium transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            case 'green':
                return clsx('bg-green-500 font-header text-white font-medium transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            case 'teal':
                return clsx('bg-teal-500 font-header text-white font-medium transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            case 'secondary':
                return clsx('bg-secondary text-white font-header font-medium transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            case 'base':
                return clsx('bg-white border-1 font-header border-gray-200 dark:bg-slate-600 dark:text-gray-100 transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-slate-400 hover:bg-slate-100');
            case 'gray':
                return clsx('bg-slate-400 dark:bg-slate-700 font-header text-white border-1 font-medium transition-opacity duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            case 'alert':
                return clsx('bg-amber-500 font-header text-white transition-all duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            case 'warning':
                return clsx('bg-red-500 font-header text-white font-medium transition-opacity duration-75 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10');
            default:
                break;
        }
    }

    const sized = () => {
        switch (size) {
            case 'small':
                return 'p-1';
            case 'fixed':
                return 'box-border w-32 h-11';
            case 'large':
                return 'px-2 h-11';
            default:
                return 'px-2 py-1';
        }
    }

    return (
        <button
            type={type || 'button'}
            disabled={disabled}
            className={clsx('rounded-lg cursor-pointer focus:outline-none transition duration-100', styled(), sized())}
            onClick={onClick}>
            <div className='w-full max-h-11'>
                {loading ?
                    <div className='flex w-full justify-center items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="size-10"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M2 16s9-15 20-4C11 23 2 8 2 8"
                                strokeDasharray="70"
                                strokeDashoffset="70"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    calcMode="spline"
                                    dur="2"
                                    keySplines="0 0 1 1"
                                    repeatCount="indefinite"
                                    from="70"
                                    to="-70"
                                    fill="freeze"
                                />
                            </path>
                        </svg>
                    </div>
                    :
                    children
                }
            </div>
        </button>
    );
}

export default Button;
