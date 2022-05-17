import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
function App() {
    let products = [
        {
            id: 1,
            img: "https://ae01.alicdn.com/kf/H6c39ee15779941fbbc36036cb6a24024r/Samsung-Galaxy-Note9-Note-9-N960U1-128GB-512GB-ROM-Unlocked-Mobile-Phone-Snapdragon-845-Octa-Core.jpg_50x50.jpg_.webp",
            product: "Tecno",
            price: 234,
        },
        {
            id: 2,
            img: "https://ae01.alicdn.com/kf/Se190724d71774589bafbc898e08f472dj/For-Tecno-Camon-18-Case-Luxury-Calfskin-PU-Leather-lines-Hard-Back-Cover-Case-For-Tecno.jpg_50x50.jpg_.webp",
            product: "iPhone",
            price: 1000,
        },
        {
            id: 3,
            img: "https://ae01.alicdn.com/kf/Se190724d71774589bafbc898e08f472dj/For-Tecno-Camon-18-Case-Luxury-Calfskin-PU-Leather-lines-Hard-Back-Cover-Case-For-Tecno.jpg_50x50.jpg_.webp",
            product: "Samsung",
            price: 1200,
        }
    ]
    return (
        <Fragment>
            <h1> Welcome to our store</h1>
            {products.map((value, index) => {
                const { img, product, price } = value;
                return <Items key={index} img={img} price={price} product={product} />
                //  return <Items key={index} {...value} />

            })}

        </Fragment>
    )
}
// function Items({ img, product, price }) {
function Items(props) {
    const { img, product, price } = props;
    // console.log(props)
    return (
        <Fragment>
            <div>
                <h3>Second component</h3>
                <img src={img} alt="" style={{ width: "100px", height: '100px' }} />
                <br />
                <p>{product}</p>
                <p>${price}</p>
                <button>Add to cart</button>
            </div>
        </Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App />, root);

