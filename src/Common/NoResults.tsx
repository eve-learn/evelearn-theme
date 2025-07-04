'use client';



const HEIGHT = 160;
const WIDTH = HEIGHT * (16 / 9);
// import { useTranslations } from 'next-intl';

type Props = {
    loading: boolean;
    message?: string;
}

const NoResults = ({loading, message}: Props) => {

    return (
        <div className='relative w-full flex justify-center items-center'>
        <div className='flex justify-start w-full space-x-2 py-3 p-4 bg-slate-100 dark:bg-slate-800 rounded-md'>
            <div style={{ width: `calc(${WIDTH}px + 1rem)`, height: 320, }} className='rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-150 px-2 pt-2 bg-slate-200 dark:bg-slate-700 animate-pulse' />
            <div style={{ width: `calc(${WIDTH}px + 1rem)`, height: 320, }} className='rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-150 px-2 pt-2 bg-slate-200 dark:bg-slate-700 animate-pulse' />
            {/* <div style={{ width: `calc(${WIDTH}px + 1rem)`, height: 320, }} className='rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-150 px-2 pt-2 bg-slate-200 animate-pulse' /> */}
            {/* <div style={{ width: `calc(${WIDTH}px + 1rem)`, height: 320, }} className='rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-150 px-2 pt-2 bg-slate-200 animate-pulse' /> */}
        </div>
        {!loading && (
            <div className='absolute w-full h-full flex justify-center items-center m-auto'>
                <div className='p-4 rounded-lg bg-white dark:bg-slate-700 shadow-xl'>
                    <p className='font-semibold text-lg text-gray-700 dark:text-gray-300'>{message || 'No results'}</p>
                </div>
            </div>
        )}
    </div>
    )
};

export default NoResults;
