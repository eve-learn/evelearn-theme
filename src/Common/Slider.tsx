'use client';

import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SliderProps {
    min: number;
    max: number;
    step: number;
    value: number;
    sliderColor?: string;
    onChange: (value: number) => void;
}


const Slider = ({ min, max, step, value, onChange }: SliderProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(parseFloat(event.target.value));
    };

    return (
        <input
            type='range'
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className={`w-full h-2 rounded-lg range-input`}
        />
    );
};

type DebouncedSliderProps = {
    min: number;
    max: number;
    handleUpdate: (n: number) => void;
    initialValue: number;
}

const DebouncedSlider = ({ min, max, handleUpdate, initialValue }: DebouncedSliderProps) => {
    const [value, setValue] = useState(initialValue);

    const debouncedUpdate = useDebouncedCallback((v: number) => {
        handleUpdate(v);
    }, 120, { trailing: true, leading: false });

    return (
        <Slider
            min={min}
            max={max}
            step={1}
            value={value}
            onChange={(v) => {
                setValue(v);
                debouncedUpdate(v);
            }} />
    )
}

Slider.Debounced = DebouncedSlider;

export default Slider;
