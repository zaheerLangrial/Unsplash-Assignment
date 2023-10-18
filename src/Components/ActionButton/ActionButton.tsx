
const variants = {
    transition: 'bg-gray-800 hover:bg-gray-600',
    red: 'bg-red-800 hover:bg-red-600',
    blue: 'bg-blue-800 hover:bg-blue-600',
    green: 'bg-green-800 hover:bg-green-600'
};

function ActionButton(props:any) {
    const { child, onClick, variant = 'transition' } = props;

    return (
        <button
            className={`text-white md:text-xl md:px-4 md:py-2 px-1 rounded-lg transition-colors duration-300 mr-2 ${variants[variant]}`}
            onClick={onClick}
        >
            {child}
        </button>
    );
}

export default ActionButton;

