import React from 'react';

type Point = 'sm' | 'md' | 'lg' | 'xl';

const Breakpoint: React.FC<{fromSize?: Point; toSize?: Point; children: React.ReactNode}> = ({ children, fromSize, toSize }) => {
    let className = '';

    if (fromSize && toSize) {
        className = `hidden ${fromSize}:block ${toSize}:hidden`;
    } else if (fromSize) {
        className = `hidden ${fromSize}:block`;
    } else if (toSize) {
        className = `block ${toSize}:hidden`;
    }

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Breakpoint;
