import { NameContext } from "./nameContex";
import useNameState from "./useNameState";

const NameProvider = ({children}) => {
    const {name,setName} =useNameState("")
    return (
        <NameContext.Provider value={{name,setName}}>
            {children}
        </NameContext.Provider>
    );
};

export default NameProvider;