import { useState } from "react";


const Country = ({country,error,isLoading,handelDetails}) => {

    const [visited,setVisit]=useState(false)

    if(isLoading) return <div className="text-center mt-10">...loading</div>
    if(error) return <div className=" text-center"> something went wrong </div>
    if(!country) return null

    const handelVisitedButton =(country)=>{
        setVisit(!visited)
        handelDetails(country)
    }

    return (
        <div className="text-center p-10 border rounded-xl shadow-xl relative z-0 transition-all duration-300 hover:scale-110 m-3">
           
            <img src={country.flags.png} className="w-[100px] max-h-[50px] mx-auto" alt="" />
            <h1 className="mt-5">{country.name.common}</h1>
            <h1>{country.capital}</h1>
            <button onClick={()=>handelVisitedButton(country)}  className="select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5">{visited ? "visited": "Going" }</button>
        </div>
    );
};

export default Country;