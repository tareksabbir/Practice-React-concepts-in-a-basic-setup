import { useEffect, useState } from "react";
import UserData from "./UserData";


const Users = () => {
    const [users,setUsers]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">This is user data:{users.length} </h1>
           <div className="grid  grid-cols-3 mt-10">
           {
                users.map((user)=><UserData key={user.id} user={user} ></UserData>)
            }
           </div>
        </div>
    );
};

export default Users;