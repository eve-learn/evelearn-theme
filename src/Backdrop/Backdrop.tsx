
type Props = {
    visible: boolean; 
    onClick: () => void;
    opacity?: number;
}

const Backdrop = ({ visible, onClick, opacity }: Props) => {
    if (!visible) return null;
    return <div 
        style={{
            opacity: opacity ? opacity : 90,
            zIndex: 21,
        }}
        className='fixed top-0 left-0 w-full h-screen bg-gray-100 dark:bg-slate-900' onClick={onClick}></div>;
};

export default Backdrop;