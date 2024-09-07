import { useState } from "react";

const useNameState = (defaultValue) => {

    const [name, setName] = useState(defaultValue)

    return {
        name, setName
    }

};

export default useNameState;