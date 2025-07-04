'use client';

import React, { useMemo } from 'react';
import colors from 'tailwindcss/dist/colors';
import { motion } from 'framer-motion';

interface Props {
    disabled?: boolean;
    color?: 'primary' | 'red' | 'green' | 'purple' | 'teal' | 'yellow';
    type?: 'button' | 'submit';
    active?: boolean;
    children: React.ReactNode;
    className?: string;
    size?: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FunRoundButton = ({ onClick, disabled, type, children, color, active, className, size = 44 }: Props) => {
    const { front, bottom } = useMemo(() => {
        switch (color) {
            case 'primary':
                return { bottom: '#00b4d8', front: colors.sky['600'] };
            case 'red':
                return { bottom: disabled ? 'hsl(340deg 100% 42%)' : 'hsl(345deg 100% 47%)', front: disabled ? 'hsl(340deg 100% 52%)' : 'hsl(340deg 100% 32%)', };
            case 'green':
                return { bottom: disabled ? colors.green['300'] : colors.green['500'], front: disabled ? colors.green['400'] : colors.green['600'] };
            case 'purple':
                return { bottom: disabled ? colors.indigo['300'] : colors.indigo['500'], front: disabled ? colors.indigo['400'] : colors.indigo['600'] };
            case 'teal':
                return { bottom: disabled ? colors.teal['300'] : colors.teal['500'], front: disabled ? colors.teal['400'] : colors.teal['600'] };
            case 'yellow':
                return { bottom: disabled ? colors.yellow['300'] : colors.yellow['500'], front: disabled ? colors.yellow['400'] : colors.yellow['600'] };
            default:
                return { bottom: disabled ? colors.gray['300'] : '#00b4d8', front: disabled ? colors.sky['400'] : colors.sky['700'] };
        }
    }, [color, disabled]);

    return (
        <motion.button
            className={`${className || 'border-none p-0 flex justify-center items-center cursor-pointer z-10'} ${disabled ? 'opacity-70 cursor-default' : 'hover:opacity-95'}`}
            style={{
                background: front,
                height: size,
                width: size + 2,
                borderRadius: (size + 2) / 2,
                outlineOffset: 0,
            }}
            type={type}
            disabled={disabled}
            onClick={onClick}
            whileHover={{ opacity: 0.95 }}
            whileTap={{ y: disabled ? 0 : 2 }}
        >
            <motion.span
                className="flex justify-center items-center z-10"
                style={{
                    background: bottom,
                    height: size,
                    width: size + 2,
                    borderRadius: (size + 2) / 2,
                }}
                initial={{ y: active ? 0 : -6 }}
                animate={{ y: active ? 0 : -6 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                whileHover={{ opacity: 0.95 }}
                whileTap={{ y: disabled ? (active ? 0 : -6) : 0 }}
            >
                {children}
            </motion.span>
        </motion.button>
    );
};

export default FunRoundButton;
