'use client';

import React from 'react';

type Props = {
    inProp: boolean;
    children: React.ReactNode;
};

const Fade = ({ children, inProp }: Props) => {


    return (
        <div className='animate-fade-in'>
            {children}
        </div>
    );
};

export default Fade;
