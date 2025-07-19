'use client';

import clsx from 'clsx';
import { useField } from 'formik';

type Props = { 
    name: string; 
    isLarge?: boolean; 
    labelText?: string; 
    option: string; 
    onSelect?: () => void;
};

const RadioOption = ({ name, isLarge, labelText, option, onSelect }: Props) => {
    const [{ value }, { }, { setValue }] = useField(name);
    return (
        <div className='flex items-center'>
            <input
                onChange={() => {
                    setValue(option);
                    onSelect?.();
                }}
                value={option}
                id={option}
                name={name}
                type='checkbox'
                checked={value === option}
                className={clsx('form-checkbox text-blue-600 focus:ring-blue-500 border-gray-300 rounded', isLarge ? 'h-5 w-5' : 'h-4 w-4')}
            />
            {typeof labelText === 'string' ?
                <label htmlFor={option} className='ml-2 block text-sm text-gray-900'>
                    {labelText}
                </label>
                :
                <label htmlFor={option}>
                    {labelText}
                </label>
            }
        </div>
    )
}

export default RadioOption;