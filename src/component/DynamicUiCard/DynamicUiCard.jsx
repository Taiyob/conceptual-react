const DynamicUiCard = (props) => {
    const {title, view} = props;
    return (
        <div>
            <div>
            <div className="card-body">
                <h2 className="card-title my-custom-class">
                    {title}
                </h2>
                <p style={{color:'red', fontSize:'24px'}}>Props Dynamic Card</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>  
            <figure>
                <img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="card" />
                {/* <img src="./images/card.jpg" alt="" /> */}
                {/* <img src={image} alt="" /> */}
            </figure> 
            <div>
                <p>
                    {view}
                </p>
                <p>
                    {view}
                </p>
            </div>
        </div>
        </div>
    );
};

export default DynamicUiCard;