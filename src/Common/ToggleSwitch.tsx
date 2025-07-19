'use client';

import { useField } from 'formik';
import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type FormikProps = {
    label: string;
    name: string;
}

const Formik = ({ label, name }: FormikProps) => {
    const [{ value }, , { setValue }] = useField<boolean>(name);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.checked);
    };

    return (
        <label className='flex items-center space-x-2 cursor-pointer'>
            <div className="relative">
                <input
                    type="checkbox"
                    className="opacity-0 absolute"
                    checked={value}
                    onChange={handleChange}
                />
                <div
                    className={clsx('w-10 h-6 rounded-full p-[4px] transition-colors duration-300', value ? 'bg-[#00b4d8]' : 'bg-[#64748b]')}
                >
                    <motion.div
                        className="w-4 h-4 bg-white rounded-full absolute top-1"
                        initial={false}
                        animate={{
                            x: value ? 16 : 0
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </div>
            </div>
            <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>{label}</span>
        </label>
    );
};

type Props = {
    label: string;
    onChange: (bool: boolean) => void;
    value: boolean;
}

const ToggleSwitch = ({ label, onChange, value }: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return (
        <label className='flex items-center space-x-2 cursor-pointer'>
            <div className="relative">
                <input
                    type="checkbox"
                    className="opacity-0 absolute"
                    checked={value}
                    onChange={handleChange}
                />
                <div
                    className={clsx('w-10 h-6 rounded-full p-[4px] transition-colors duration-300', value ? 'bg-[#00b4d8]' : 'bg-[#64748b]')}
                >
                    <motion.div
                        className="w-4 h-4 bg-white rounded-full absolute top-1"
                        initial={false}
                        animate={{
                            x: value ? 16 : 0
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                </div>
            </div>
            <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>{label}</span>
        </label>
    );
};

ToggleSwitch.Formik = Formik;

export default ToggleSwitch;
