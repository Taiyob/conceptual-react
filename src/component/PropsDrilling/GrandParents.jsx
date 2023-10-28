import { useState } from "react";
import Parents from "./Parents";


const GrandParents = () => {
    const [val, setVal] = useState(0);
    return (
        <div>
            <h1>Grand Parents: {val}</h1>
            <Parents value={val} setValue={setVal}></Parents>
        </div>
    );
};

export default GrandParents;