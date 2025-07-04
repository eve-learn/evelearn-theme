'use client';

type ProgressBarProps = {
    progress: number;
    height?: number;
    backgroundColor?: string;
    color: string;
}

const ProgressBarSimple = ({ progress, color, height = 10, backgroundColor = '#ccc' }: ProgressBarProps) => {
    return (
        <div className="w-full">
            <div 
                className="w-full overflow-hidden transition-all duration-150 ease-in-out"
                style={{
                    backgroundColor: backgroundColor,
                    height: `${height}px`,
                    borderRadius: `${height / 2}px`
                }}
            >
                <div 
                    className="transition-all duration-150 ease-in-out"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: color,
                        height: `${height}px`,
                        borderRadius: `${height / 2}px`
                    }}
                />
            </div>
        </div>
    )
}

export default ProgressBarSimple;
