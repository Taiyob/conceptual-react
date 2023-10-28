import { useEffect, useState } from "react";

const UseEffect = () => {
    const [val, setVal] = useState(0);
    const handleClick = ()=> {
        setVal(val + 1);
    }
    useEffect(()=>{

    },[])
    return (
        <div>
            <h1>count: {val}</h1>
            <button onClick={handleClick}></button>
        </div>
    );
};

export default UseEffect;