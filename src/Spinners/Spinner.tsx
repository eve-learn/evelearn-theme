import clsx from "clsx";

interface SpinnerProps {
    size?: 'base' | 'small';
    white?: boolean | string;
    visible?: boolean | string;
}

const Spinner = ({ visible = true, size, white: isWhite }: SpinnerProps) => {
    // const {theme} = useDarkMode();
    
    if (visible === false) return null;
    
    const color = isWhite ? 'stroke-white/90' : 'stroke-slate-600/80';
    const bgColor = isWhite ? 'stroke-white/20' : 'stroke-slate-500/20';
    const dimensions = size === 'small' ? 'w-5 h-5' : 'w-8 h-8';
    
    const spinnerClasses = `
        absolute
        top-0
        animate-spin
        ${dimensions}
    `;
    
    return (
        <div className='relative h-8 w-8 flex justify-center items-center'>
            <svg 
                className={`absolute top-0 ${dimensions} ${bgColor}`} 
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.4"
            >
                <circle cx="12" cy="12" r="10" />
            </svg>
            
            <svg 
                className={spinnerClasses} 
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.4"
                strokeLinecap="round"
            >
                {/* Circle with two gaps */}
                <path 
                    d={`
                        M 12 2 
                        A 10 10 0 0 1 22 12 
                        A 10 10 0 0 1 12 22 
                        A 10 10 0 0 1 2 12 
                        A 10 10 0 0 1 12 2
                    `}
                    // offset={'20'}
                    strokeDasharray="13 18.4"
                    stroke='inherit'
                    className={color}
                />
            </svg>
        </div>
    );
};

const SpinnerCentered = (props: SpinnerProps) => {
    if (props.visible === false) return null;
    return (
        <div className='w-full flex justify-center items-center'>
            <Spinner {...props} />
        </div>
    );
};

Spinner.displayName = 'Spinner';
SpinnerCentered.displayName = 'Spinner.Centered';

Spinner.Centered = SpinnerCentered;

export default Spinner;
