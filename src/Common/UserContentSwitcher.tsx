import { motion } from 'framer-motion';
import PlusCircleIcon from '../Icons/PlusCircleIcon';
import ArrowCircleRight from '../Icons/ArrowCircleRight';
import clsx from 'clsx';


type ModeProps = {
    setGalleryMode: React.Dispatch<React.SetStateAction<string>>;
    galleryMode: string;
    title1: string;
    title2:string;
    icon1?: React.ComponentType<React.ComponentProps<"svg">>;
    icon2?: React.ComponentType<React.ComponentProps<"svg">>;
  };

const UserContentSwitcher = ({ icon1: Icon1, icon2: Icon2, setGalleryMode, galleryMode, title1, title2 }: ModeProps) => {
    return (
      <div className='relative flex flex-row items-center my-2 bg-slate-100 dark:bg-slate-900 w-full h-14 rounded-lg'>
        <motion.div
          className='absolute w-1/2 h-11 rounded-md bg-white dark:bg-slate-600'
          animate={{
            x: galleryMode === title1.toLowerCase() ? '1%' : '99%'
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 200
          }}
        />
        
        <button
          onClick={() => setGalleryMode(title1.toLowerCase())}
          className='py-2 flex flex-row w-1/2 justify-center items-center gap-1 z-10'
        >
          <span
            className={clsx('truncate', {
                'text-primary dark:text-blue-400': galleryMode === title1.toLowerCase(),
                'text-slate-500 dark:text-slate-400 opacity-90': galleryMode !== title1.toLowerCase()
            })}
          >
            {title1.toLocaleUpperCase()}
          </span>
  
          {Icon1 ? (
            <Icon1
              className={clsx('h-5 w-5', {
                'text-primary dark:text-blue-400': galleryMode === title1.toLowerCase(),
                'text-slate-500 dark:text-slate-400 opacity-90': galleryMode !== title1.toLowerCase()
              })}
            />
          ):
          
            <PlusCircleIcon
              className={clsx('h-5 w-5', {
                'text-primary dark:text-blue-400': galleryMode === title1.toLowerCase(),
                'text-slate-500 dark:text-slate-400 opacity-90': galleryMode !== title1.toLowerCase()
              })}
            />}
        </button>
        
        <button
          onClick={() => setGalleryMode(title2.toLowerCase())}
          className='py-2 flex flex-row w-1/2 justify-center items-center gap-1 z-10'
        >
          <span
            className={clsx('truncate', {
                'text-primary dark:text-blue-400': galleryMode === title2.toLowerCase(),
                'text-slate-500 dark:text-slate-400 opacity-90': galleryMode !== title2.toLowerCase()
            })}
          >
            {title2.toLocaleUpperCase()}
          </span>
  
          {Icon2 ? (
            <Icon2
              className={clsx('h-5 w-5', {
                'text-primary dark:text-blue-400': galleryMode === title2.toLowerCase(),
                'text-slate-500 dark:text-slate-400 opacity-90': galleryMode !== title2.toLowerCase()
              })}
            />
          ) : (
            <ArrowCircleRight
              className={clsx('h-5 w-5', {
                'text-primary dark:text-blue-400': galleryMode === title2.toLowerCase(),
                'text-slate-500 dark:text-slate-400 opacity-90': galleryMode !== title2.toLowerCase()
              })}
            />
          )}
        </button>
      </div>
    );
  };
  
export default UserContentSwitcher;