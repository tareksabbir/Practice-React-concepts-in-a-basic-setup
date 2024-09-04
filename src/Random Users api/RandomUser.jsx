

const RandomUser = ({user}) => {
    const {name,email,phone}=user
    return (
        <div className="p-10 border ">
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
        </div>
    );
};

export default RandomUser;