import { useState } from "react";


const usePracticeHook = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange

    }
};

export default usePracticeHook;