'use client';

import {tw} from '../utils/utils';
import React from 'react';
import Spinner from '../Spinners/Spinner';

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
                return tw('bg-primary hover:bg-primary/95 shadow-xs hover:shadow-none dark:shadow-none dark:hover:bg-primary/90 font-header text-white font-medium transition-all duration-75 disabled:opacity-50 hover:bg-black/10');
            case 'indigo':
                return tw('bg-indigo-500 font-header text-white font-medium transition-all duration-75 disabled:opacity-50 hover:bg-black/10');
            case 'green':
                return tw('bg-green-500 font-header text-white font-medium transition-all duration-75 disabled:opacity-50 hover:bg-black/10');
            case 'teal':
                return tw('bg-teal-500 font-header text-white font-medium transition-all duration-75 disabled:opacity-50 hover:bg-black/10');
            case 'secondary':
                return tw('bg-secondary text-white font-header font-medium transition-all duration-75 disabled:opacity-50 hover:bg-black/10');
            case 'base':
                return tw('bg-white border-1 font-header border-gray-200 dark:bg-slate-600 dark:text-gray-100 transition-all duration-75 disabled:opacity-50 dark:hover:bg-slate-400 hover:bg-slate-100');
            case 'gray':
                return tw('bg-slate-400 dark:bg-slate-700 font-header text-white border-1 font-medium transition-opacity duration-75 disabled:opacity-50 hover:bg-black/10');
            case 'alert':
                return tw('bg-amber-500 font-header text-white transition-all duration-75 disabled:opacity-50 hover:bg-black/10');
            case 'warning':
                return tw('bg-red-500 font-header text-white font-medium transition-opacity duration-75 disabled:opacity-50 hover:bg-black/10');
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
            className={tw('rounded-lg cursor-pointer focus:outline-none transition duration-100', styled(), sized())}
            onClick={onClick}>
            <div className='w-full max-h-11'>
                {loading ?
                    <div className='flex w-full justify-center items-center'>
                        <Spinner white size={32} />
                    </div>
                    :
                    children
                }
            </div>
        </button>
    );
}

export default Button;
