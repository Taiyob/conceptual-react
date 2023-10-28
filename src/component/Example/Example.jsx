// const Example = (props) => {
//     return (
//         <div>
//             <h1 className="text-center p-6 bg-neutral-700">Children props</h1>
//             {props.children}
//         </div>
//     );
// };

// export default Example;

const Example = ({children}) => {
    const names = ['rokib','sakib','afia','oli ullah','siam'];
    return (
        <div>
            <h1 className="text-center p-6 bg-neutral-700">Children props</h1>
            {children}
            {
                names.map(name=><a key={name[0]}>{name}</a>)
            }
        </div>
    );
};

export default Example;