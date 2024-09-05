import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    return (
        <div className="text-center mt-6">
            this is user hi {user.name}
        </div>
    );
};

export default UserDetails;