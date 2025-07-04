'use client';

import React, { useMemo } from 'react';
import { useField } from 'formik';
import ErrorText from '../Common/ErrorText';

type Props = {
    name: string;
    // https://stackoverflow.com/questions/56675652/proper-typescript-type-for-creating-jsx-element-from-string
    labelText: React.ReactNode;
    onChange?: (value: boolean) => void;
    isLarge?: boolean;
    isDisabled?: boolean;
}

const Checkbox = ({ name, labelText, isLarge, onChange, isDisabled }: Props) => {
    const [{ value }, { error }, { setValue, setTouched }] = useField<boolean>(name);
    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouched(true);
        setValue(!value, true);
    }
    const rand = useMemo(() => {
        return Math.random()
    }, []);

    return (
        <div className='relative flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <input
                    disabled={!!isDisabled}
                    onChange={(e) => {
                        onCheck(e)
                        onChange?.(Boolean(e.target.value));
                    }} value={value ? 'true' : 'false'}
                    id={`${name}${rand}`}
                    name={name}
                    type='checkbox'
                    checked={!!value}
                    className={`form-checkbox text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${isLarge ? 'h-5 w-5' : 'h-4 w-4'}`}
                />
                {typeof labelText === 'string' ?
                    <label htmlFor={`${name}${rand}`} className='ml-2 block text-sm text-gray-800 dark:text-gray-200'>
                        {labelText}
                    </label>
                    :
                    <label htmlFor={`${name}${rand}`}>
                        {labelText}
                    </label>
                }
            </div>
            {error && <ErrorText classNames='absolute w-64 left-6 top-4 text-xs text-red-500' text={error} />}
        </div>
    );
}

type MultiChoiceCheckBoxProps = {
    name: string;
    allOptionsName: string;
    hasMultipleAnswers: boolean;
    index: number;
    isLarge?: boolean;
}

const MultiChoiceCheckBox = ({ name, hasMultipleAnswers, index, isLarge, allOptionsName }: MultiChoiceCheckBoxProps) => {
    const [{ value }, {  }, { setValue, setTouched }] = useField<boolean>(name);
    const [{ value: optionsValue }, , { setValue: setOptionsValue }] = useField<{ option: string; isCorrectAnswer: boolean; id: number; }[] | undefined>(allOptionsName);
    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTouched(true);

        if (hasMultipleAnswers) {
            setValue(!value);
            return;
        }
        setOptionsValue(optionsValue?.map((el, idx) => ({ option: el.option, id: el.id, isCorrectAnswer: index === idx ? !el.isCorrectAnswer : false })));
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <input
                    onChange={(e) => onCheck(e)}
                    value={index}
                    checked={!!value}
                    id={name}
                    name={name}
                    type='checkbox'
                    className={`form-checkbox text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${isLarge ? 'h-5 w-5' : 'h-4 w-4'}`}
                />
            </div>
        </div>
    )
}

Checkbox.Multi = MultiChoiceCheckBox;

export default Checkbox;
