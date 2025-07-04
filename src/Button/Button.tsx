'use client';

import Spinner from '../Spinners/Spinner';
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
                return `bg-primary font-header text-white font-medium transition-all duration-75 ${disabled ? 'bg-white/50' : 'hover:bg-black/10'}`;
            case 'indigo':
                return `bg-indigo-500 font-header text-white font-medium transition-all duration-75 ${disabled ? 'bg-white/50' : 'hover:bg-black/10'}`;
            case 'green':
                return `bg-green-500 font-header text-white font-medium transition-all duration-75 ${disabled ? 'bg-white/50' : 'hover:bg-black/10'}`;
            case 'teal':
                return `bg-teal-500 font-header text-white font-medium transition-all duration-75 ${disabled ? 'bg-white/50' : 'hover:bg-black/10'}`;
            case 'secondary':
                return 'bg-secondary text-white font-header font-medium hover:bg-black/10 transition-all duration-75';
            case 'base':
                return 'bg-white border-1 font-header border-gray-200 dark:bg-slate-600 dark:text-gray-100 dark:hover:bg-slate-400 hover:bg-slate-100 transition-all duration-75';
            case 'gray':
                return 'bg-slate-400 dark:bg-slate-700 font-header text-white border-1 font-medium hover:bg-black/10 transition-opacity duration-75';
            case 'alert':
                return 'bg-amber-500 font-header text-white transition-all hover:bg-black/10 duration-75';
            case 'warning':
                return 'bg-red-500 font-header text-white font-medium hover:bg-black/10 transition-opacity duration-100';
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
        <button type={type || 'button'} disabled={disabled} className={`rounded-lg focus:outline-none transition duration-100 ${styled()} ${sized()}`} onClick={onClick}>
            <div className='w-full max-h-11'>
                {loading ?
                    <div className='flex w-full justify-center items-center'>
                        <Spinner white />
                    </div>
                    :
                    children
                }
            </div>
        </button>
    );
}

export default Button;
