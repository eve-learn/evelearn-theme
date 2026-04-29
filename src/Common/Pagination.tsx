import ReactPaginate from "react-paginate";

type PaginationProps = {
    handlePageClick: ({ selected }: { selected: number }) => void;
    pageCount: number;
    nextLabel: React.ReactNode;
    previousLabel: React.ReactNode;
    pageRangeDisplayed?: number;
};

const Pagination = ({handlePageClick, pageCount, nextLabel, previousLabel, pageRangeDisplayed = 5 }: PaginationProps) => {

    return (
        <ReactPaginate
            breakLabel={'...'}
            containerClassName={'w-full flex space-x-2 items-center'}
            pageClassName='bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-white rounded-md'
            activeLinkClassName={'bg-sky-500 rounded-md text-white dark:text-inherit cursor-pointer'}
            pageLinkClassName={'h-9 w-9 flex justify-center items-center cursor-pointer'}
            previousClassName={'text-gray-700 dark:text-gray-200 cursor-pointer'}
            previousLinkClassName={'p-2 cursor:pointer hover:opacity-90'}
            nextClassName={'text-gray-700 dark:text-gray-200 cursor-pointer'}
            nextLinkClassName={'p-2'}
            disabledClassName={'text-gray-200 dark:text-gray-400 rounded-xl cursor-not-allowed'}
            disabledLinkClassName={'p-2'}
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageRangeDisplayed}
            pageCount={pageCount}
            nextLabel={nextLabel}
            previousLabel={previousLabel}
            renderOnZeroPageCount={undefined}
        />
    )
};

export default Pagination;
