import { ReactNode } from 'react';


type Step = {
    label: ReactNode;
}

type Props = {
    steps: Step[];
    activeStep: number;
    onStepPress: (s: number) => void;
}

const StepsComponent = ({ steps, activeStep, onStepPress }: Props) => {

    return (
        <div className='flex justify-between items-center w-full p-1 mb-2'>
            {steps.map((step, index) => {
                return (
                    <div key={`step_${index}_${step.label}`} className='flex justify-center items-center space-x-2 w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <button
                                type={'button'}
                                onClick={() => onStepPress(index)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full min-w-10 md:min-w-20 sm:min-w-40 font-header transition-all duration-150
                                        ${activeStep === index
                                        ? 'bg-primary text-white shadow-lg scale-110 border-2 border-primary'
                                        : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 border-2 border-transparent hover:border-primary/30'
                                    }`}
                            >
                                <p className='font-medium truncate'><span className='text-gray-500 dark:text-gray-400'>{index + 1}. </span>{step.label}</p>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default StepsComponent;
