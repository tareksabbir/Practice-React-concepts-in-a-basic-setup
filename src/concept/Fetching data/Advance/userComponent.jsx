//it contains only presentational part do not contain any fetching or rendering data 
const UserComponent = ({user,isLoading,error}) => {
    if(isLoading) return <div>...loading</div>
    if(error) return <div>something went wrong</div>
    if(!user) return null
    return (
        <div className="flex  justify-center">
          {
            user.length && user.map((u)=>{
                return(
                    <div key={u.id} className="text-center mr-10">
                      <img src={u.avatar} alt="" className="mt-10 mx-auto rounded-full"/>
                      <h1>{u.first_name}</h1>
                      <h2>{u.email}</h2>
                    </div>
                )
            })
          }
        </div>
    );
};

export default UserComponent;