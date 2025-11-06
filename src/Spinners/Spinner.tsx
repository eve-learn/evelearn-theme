import { PRIMARY_COLOR } from "../constants";

interface SpinnerProps {
    size?: number | string;
    white?: boolean | string;
    visible?: boolean | string;
}

const Spinner = ({ visible = true, size, white: isWhite }: SpinnerProps) => {
    let newSize = 32

    if (typeof size === "string") {
        if (size === "base") {
            size = 32;
        } else if (size === "large") {
            size = 44;
        }
    }

    if (visible === false) return null;


    return (
        <div style={{ height: newSize + 2, width: newSize + 2 }} className='relative h-8 w-8 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={newSize} height={newSize}>
                <radialGradient
                    id="a10"
                    cx="0.66"
                    cy="0.313"
                    fx="0.66"
                    fy="0.313"
                    gradientTransform="scale(1.5)"
                >
                    <stop offset="0" stopColor={isWhite ? '#FFF' : PRIMARY_COLOR}></stop>
                    <stop offset="0.3" stopColor={isWhite ? '#FFF' : PRIMARY_COLOR} stopOpacity="0.9"></stop>
                    <stop offset="0.6" stopColor={isWhite ? '#FFF' : PRIMARY_COLOR} stopOpacity="0.6"></stop>
                    <stop offset="0.8" stopColor={isWhite ? '#FFF' : PRIMARY_COLOR} stopOpacity="0.3"></stop>
                    <stop offset="1" stopColor={isWhite ? '#FFF' : PRIMARY_COLOR} stopOpacity="0"></stop>
                </radialGradient>
                <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="url(#a10)"
                    strokeDasharray="200 1000"
                    strokeLinecap="round"
                    strokeWidth="17"
                    // @ts-expect-error it does exist
                    transformOrigin="center"
                >
                    <animateTransform
                        attributeName="transform"
                        calcMode="spline"
                        dur="1.8"
                        keySplines="0 0 1 1"
                        keyTimes="0;1"
                        repeatCount="indefinite"
                        type="rotate"
                        values="360;0"
                    ></animateTransform>
                </circle>
                <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#FFF"
                    strokeLinecap="round"
                    strokeWidth="17"
                    opacity="0.5"
                    // @ts-expect-error it does exist
                    transformOrigin="center"
                ></circle>
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
