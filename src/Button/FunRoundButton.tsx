'use client';

import React, { useMemo } from 'react';
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
                return { bottom: '#00b4d8', front: '#0284c7' };
            case 'red':
                return { bottom: disabled ? 'hsl(340deg 100% 42%)' : 'hsl(345deg 100% 47%)', front: disabled ? 'hsl(340deg 100% 52%)' : 'hsl(340deg 100% 32%)', };
            case 'green':
                return { bottom: disabled ? '#86efac' : '#22c55e', front: disabled ? '#4ade80' : '#16a34a' };
            case 'purple':
                return { bottom: disabled ? '#a5b4fc' : '#6366f1', front: disabled ? '#818cf8' : '#4f46e5' };
            case 'teal':
                return { bottom: disabled ? '#5eead4' : '#14b8a6', front: disabled ? '#2dd4bf' : '#0d9488' };
            case 'yellow':
                return { bottom: disabled ? '#fde047' : '#eab308', front: disabled ? '#facc15' : '#ca8a04' };
            default:
                return { bottom: disabled ? '#d1d5db' : '#00b4d8', front: disabled ? '#38bdf8' : '#0369a1' };
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
