'use client';

import React, { useMemo } from 'react';
import colors from 'tailwindcss/dist/colors';
import Spinner from '../Spinners/Spinner';
import { motion } from 'framer-motion';

interface Props {
    disabled?: boolean;
    color?: 'primary' | 'red' | 'green' | 'purple' | 'teal' | 'yellow' | 'cyan';
    type?: 'button' | 'submit';
    active?: boolean;
    children: React.ReactNode;
    loading?: boolean;
    className?: string;
    size?: 'big' | 'base' | 'small' | 'square';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FunButton: React.FC<Props> = ({ 
    onClick, 
    disabled, 
    type, 
    children, 
    color = 'primary', 
    loading, 
    active,
    className, 
    size = 'base' 
}) => {
    const { front, bottom } = useMemo(() => {
        switch (color) {
            case 'primary':
                return { bottom: '#00b4d8', front: colors.sky['600'] };
            case 'red':
                return { bottom: '#f00f0f', front: colors.red['700'] };
            case 'green':
                return { bottom: colors.green['500'], front: colors.green['600'] };
            case 'purple':
                return { bottom: colors.indigo['500'], front: colors.indigo['600'] };
            case 'teal':
                return { bottom: colors.teal['500'], front: colors.teal['600'] };
            case 'cyan':
                return { bottom: colors.cyan['500'], front: colors.cyan['600'] };
            case 'yellow':
                return { bottom: colors.yellow['500'], front: colors.yellow['600'] };
            default:
                return { bottom: '#00b4d8', front: colors.sky['700'] };
        }
    }, [color]);

    const classStyle = useMemo(() => {
        switch (size) {
            case 'base':
                return 'relative block px-8 py-3 rounded-lg text-lg text-white font-medium font-header hover:bg-slate-900/20';
            case 'big':
                return 'relative block px-12 py-4 rounded-lg text-lg text-white font-medium font-header hover:bg-slate-900/20';
            case 'small':
                return 'relative block px-6 py-1 rounded-lg text-lg text-white font-medium font-header hover:bg-slate-900/20';
            case 'square':
                return 'relative block h-12 w-12 rounded text-lg flex items-center justify-center text-white font-medium font-header hover:bg-slate-900/20';
            default:
                return 'relative block px-8 py-3 rounded-lg text-lg text-white font-medium font-header hover:bg-slate-900/20';
        }
    }, [size]);

    const computedClassName = useMemo(() => {
        const cName = className + ' rounded-lg border-none p-0 cursor-pointer opacity-90 hover:bg-black/30 transition-opacity';
        return cName + (disabled ? ' opacity-70 cursor-default' : '');
    }, [className, disabled]);

    const computedClassStyle = useMemo(() => {
        const cName = classStyle;
        return cName + (disabled ? ' opacity-70 cursor-default hover:bg-black/70' : '');
    }, [classStyle, disabled]);

    return (
        <motion.button
            className={`${computedClassName}`}
            style={{ background: front, outlineOffset: '4px' }}
            type={type}
            onMouseDown={onClick}
            whileTap={{ y: disabled ? 0 : 2 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
        >
            <motion.span
                className={computedClassStyle}
                style={{ 
                    background: bottom,
                    opacity: 1,
                }}
                initial={{ y: active ? 0 : -6 }}
                animate={{ y: active ? 0 : -6 }}
                whileTap={{ y: disabled ? -6 : 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            >
                {loading ? 
                    <div className={size === 'small' ? 'min-h-6' : 'min-h-10'}>
                        <Spinner.Centered visible={true} size={size === 'small' ? 'small' : 'base'} white />
                    </div>
                    :
                    children
                }
            </motion.span>
        </motion.button>
    );
};

export default FunButton;
