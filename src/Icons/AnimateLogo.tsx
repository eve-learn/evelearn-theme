import React, { useEffect, useState } from "react";

const AnimateLogo = () => {
    const [isFirefox, setIsFirefox] = useState(false);

    useEffect(() => {
        // Check if browser is Firefox
        const userAgent = window.navigator.userAgent;
        setIsFirefox(userAgent.indexOf("Firefox") > -1);
    }, []);

    // Firefox-specific version with different animation approach
    if (isFirefox) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin" viewBox="0 0 600 600">
                <g>
                    <path
                        className="stroke-black dark:stroke-white text-gray-900 dark:text-gray-50"
                        stroke={"currentColor"}
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="82"
                        strokeDasharray="1600"
                        d="M466.49 164.79c17.79 34.76 25.48 75.66 19.08 118.96-11.28 76.36-67.11 139.06-141.89 158.25-127.11 32.61-243.49-61.27-245.86-184.81C95.79 150.86 182.9 60.52 289.23 58.56c33.95-.63 66.08 7.48 94.22 22.29 0 0 15.68 6.34 10.14 23.19 0 0-68.52 219.82-352.61 268.06"
                    >
                        <animate
                            attributeName="stroke-dashoffset"
                            to="0"
                            from="1600"
                            dur="4s"
                            fill="freeze"
                            repeatCount="indefinite"
                            calcMode="cubic"
                            keyTimes="0;0.375;0.5;0.875;1"
                            keySplines="0 0.26 0 1;0 0.26 0 1;0 0.26 0 1;0 0.26 0 1"
                            values="1600;0;0;1600;1600"
                        />
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 300 300"
                            to="360 300 300"
                            dur="2s"
                            fill="freeze"
                            repeatCount="indefinite"
                            calcMode="cubic"
                            keyTimes="0;0.75;1"
                            keySplines="0 0.26 0 1"
                            values="0 300 300;360 300 300;360 300 300;"
                        />
                    </path>
                </g>
            </svg>
        );
    }

    // Default version for other browsers
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
            <g
                style={{
                    transformOrigin: 'center',
                }}
                transform='translate(300 300) rotate(0)'
                height={176}
                width={176}
            >
                <path
                    className="stroke-black dark:stroke-white text-gray-900 dark:text-gray-50"
                    stroke={"currentColor"}
                    id="motionPath"
                    fill="none"
                    strokeLinecap="round"
                    height={600}
                    width={600}
                    style={{
                        transformOrigin: 'center',
                    }}
                    strokeMiterlimit="10"
                    strokeWidth="82"
                    strokeDasharray="1600"
                    d="M466.49 164.79c17.79 34.76 25.48 75.66 19.08 118.96-11.28 76.36-67.11 139.06-141.89 158.25-127.11 32.61-243.49-61.27-245.86-184.81C95.79 150.86 182.9 60.52 289.23 58.56c33.95-.63 66.08 7.48 94.22 22.29 0 0 15.68 6.34 10.14 23.19 0 0-68.52 219.82-352.61 268.06"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        to="0"
                        from="1600"
                        dur="4s"
                        fill="freeze"
                        repeatCount="indefinite"
                        calcMode="cubic"
                        keyTimes="0;0.375;0.5;0.875;1"
                        keySplines="0 0.26 0 1;0 0.26 0 1;0 0.26 0 1;0 0.26 0 1"
                        values="1600;0;0;1600;1600"
                    />
                </path>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="2s"
                    fill="freeze"
                    repeatCount="indefinite"
                    calcMode="cubic"
                    keyTimes="0;0.75;1"
                    keySplines="0 0.26 0 1"
                    values="0;360;360;"
                />

            </g>

        </svg>
    );
}

export default AnimateLogo;
