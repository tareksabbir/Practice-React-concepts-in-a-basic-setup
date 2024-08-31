const BookMark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="p-5 mb-3 border rounded-lg shadow-xl relative z-0 transition-all duration-300 hover:scale-110 bg-white">
            <h1 >{title}</h1>
        </div>
    );
};

export default BookMark;