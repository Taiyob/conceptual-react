import { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState();
    useEffect(()=>{
        const fetchData = async()=> {
            try {
                const URL = `https://openapi.programming-hero.com/api/videos/category/1000`
                const response = await fetch(URL);
                const data = await response.json();
                setData(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[])
    return (
        <div>
            {
                data && data.map((value, index) => <h1 key={index}>{value.title}</h1>)
            }
        </div>
    );
};

export default FetchData;