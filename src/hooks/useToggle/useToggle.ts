import { useState } from "react";


export const  useToggle = () => {

    const [value, setValue] = useState<boolean>(false);

    const toggle = () => {
        setValue(!value);
    };


    return [value, toggle];
}

