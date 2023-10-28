import { useState } from "react";

const StateArray = () => {
    const arrayOfObjects = [
        {id: 1, name: 'Obj 1'},
        {id: 2, name: 'Obj 2'},
        {id: 3, name: 'Obj 3'},
        {id: 4, name: 'Obj 4'},
        {id: 5, name: 'Obj 5'},
        {id: 6, name: 'Obj 6'},
        {id: 7, name: 'Obj 7'},
        {id: 8, name: 'Obj 8'},
        {id: 9, name: 'Obj 9'},
        {id: 10, name: 'Obj 10'},
    ];
    const [data, setData] = useState(arrayOfObjects);
    const handleRemoveAll = ()=> {
        setData([]);
    }
    const handleSingleRemove = (id)=> {
        const filteredData = data.filter((item)=> item.id !== id);
        setData(filteredData);
    }
    return (
        <div>
            {
                data &&
                data?.map((item,index) => 
                <div key={index}>
                    <h1>{item.name}</h1>
                    <button className="btn btn-xs btn-success" onClick={()=>handleSingleRemove(item.id)}>remove</button>
                </div>
                )
            }
            <button className="btn btn-accent" onClick={handleRemoveAll}>remove all</button>
        </div>
    );
};

export default StateArray;