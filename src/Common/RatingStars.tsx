'use client';

import StarIcon from '../Icons/StarIcon';
import StarIconSolid from '../Icons/StarIconSolid';
import Tippy from './Tippy';

type Props = {
    avgRating: number;
    large?: boolean;
}


const RatingStars = ({ avgRating, large }: Props) => {
    // const t = useTranslations();

    const icons = [1, 2, 3, 4, 5].map(el => {
        if (avgRating === 0) {
            return <StarIconSolid key={`rating_star_${el}`} className={`${large ? 'h-5 w-5' : 'h-3 w-3'} text-gray-200 dark:text-gray-400`} />
        }
        if (Number.isInteger(avgRating)) {
            if (el <= avgRating) {
                return <StarIconSolid key={`rating_star_${el}`} className={`${large ? 'h-5 w-5' : 'h-3 w-3'} text-blue-500`} />
            }
            return <StarIconSolid key={`rating_star_${el}`} className={`${large ? 'h-5 w-5' : 'h-3 w-3'} text-gray-200 dark:text-gray-400`} />
        }
        const whole = Math.floor(avgRating);
        if (el <= whole) {
            return <StarIconSolid key={`rating_star_${el}`} className={`${large ? 'h-5 w-5' : 'h-3 w-3'} text-blue-500`} />
        }
        return <StarIcon key={`rating_star_${el}`} percentage={avgRating - whole} color={'#00b4d8'} className={`${large ? 'h-5 w-5' : 'h-3 w-3'}`} />
    });

    return (
        <Tippy
            content={avgRating === 0 ? 'No ratings' : 'Average Rating' + ' ' + avgRating}
            className='bg-gray-800 opacity-90 text-white rounded-md px-2 py-1 cursor-pointer h-fit'
        >
            <div className='flex items-center space-x-0 justify-start'>
                {icons}
            </div>
        </Tippy>
    )
}

export default RatingStars;