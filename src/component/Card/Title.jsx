import './title.css';

const Title = () => {
    return (
        <div className="card-body">
            <h2 className="card-title my-custom-class">Card!</h2>
            <p style={{color:'red', fontSize:'24px'}}>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default Title;