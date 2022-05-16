import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
function App() {
    return (
        <Fragment>
            <h1> Welcome to our store</h1>
            <Items />
        </Fragment>
    )
}

function Items() {
    return (
        <Fragment>
            <div>
                <h3>Second component</h3>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/149869/1.jpg?7158" alt="" style={{ width: '100px', height: '100px' }} />
                <br />
                <p>Adidas SPORTS PERFORMANCE RUNFALCON</p>
                <p>$199</p>
                <button>Add to cart</button>
            </div>
            <div>
                <h3>Second component</h3>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/149869/1.jpg?7158" alt="" style={{ width: '100px', height: '100px' }} />
                <br />
                <p>Adidas SPORTS PERFORMANCE RUNFALCON</p>
                <p>$199</p>
                <button>Add to cart</button>
            </div>
            <div>
                <h3>Second component</h3>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/149869/1.jpg?7158" alt="" style={{ width: '100px', height: '100px' }} />
                <br />
                <p>Adidas SPORTS PERFORMANCE RUNFALCON</p>
                <p>$199</p>
                <button>Add to cart</button>
            </div>
            <div>
                <h3>Second component</h3>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/149869/1.jpg?7158" alt="" style={{ width: '100px', height: '100px' }} />
                <br />
                <p>Adidas SPORTS PERFORMANCE RUNFALCON</p>
                <p>$199</p>
                <button>Add to cart</button>
            </div>
            <div>
                <h3>Second component</h3>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/149869/1.jpg?7158" alt="" style={{ width: '100px', height: '100px' }} />
                <br />
                <p>Adidas SPORTS PERFORMANCE RUNFALCON</p>
                <p>$199</p>
                <button>Add to cart</button>
            </div>
            <div>
                <h3>Second component</h3>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/149869/1.jpg?7158" alt="" style={{ width: '100px', height: '100px' }} />
                <br />
                <p>Adidas SPORTS PERFORMANCE RUNFALCON</p>
                <p>$199</p>
                <button>Add to cart</button>
            </div>
        </Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App />, root);

