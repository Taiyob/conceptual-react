import Children from "./Children";

const Parents = ({value, setValue}) => {
    const handleClick = ()=> {
        setValue(value + 1);
    }
    return (
        <div>
            <h1>Parents: {value}</h1>
            <button className="btn btn-success" onClick={handleClick}>add</button>
            <Children value={value}></Children>
        </div>
    );
};

export default Parents;