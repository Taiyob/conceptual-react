import { useState } from "react";

const UseState = () => {
    const [val,setVal] = useState(0);
    const [strval, setStrVal] = useState('oli');
    const handlePlus = ()=> {
        setVal(val + 1);
        setStrVal('oli')
    }
    const handleMinas = ()=> {
        setVal(val -1);
        setStrVal('oil');
    }
    return (
        <div className="text-center text-4xl my-25">
            <h1>Exploreing Hook</h1>
            <h1>Count: {val}</h1>
            <button onClick={handlePlus} className="btn btn-success">add</button>
            <button onClick={handleMinas} className="btn btn-danger">delete</button>
            {
                strval == 'oli' && <h1>yes</h1>
            }
            {
                strval == 'oil' && <h1>no</h1>
            }
        </div>
    );
};

export default UseState;