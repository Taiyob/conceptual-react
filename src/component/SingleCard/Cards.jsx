import '../Card/title.css';

const Cards = () => {
    const title = 'My Custom Title';
    const myObj = {
        views:'200k',
    };
    const myResult = (a,b)=> {
        return a+b;
    }
    return (
        <div>
            <div className="card-body">
                <h2 className="card-title my-custom-class">{title ? title : 'not found'}</h2>
                <p style={{color:'red', fontSize:'24px'}}>If a dog chews shoes whose shoes does he choose?</p>
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
                <p>{myObj.views}</p>
                <p>{myResult(100,50)}</p>
            </div>
        </div>
    );
};

export default Cards;