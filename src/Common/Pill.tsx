const Pill = ({ text }: { text: string; }) => {
    return (
        <span className={'rounded-full px-3 py-1 text-sm font-header font-medium bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 mr-2 mb-2'}>{text}</span>
    )
}

export default Pill;
