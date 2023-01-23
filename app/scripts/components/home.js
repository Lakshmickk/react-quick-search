/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';

const Home = ({products=[]}) => (
    <section id="home">
        <div className="content">
            {
                products.map(prod => <ProductItem key={prod._id} product={prod} />)
            }
        </div>
    </section>
)

const ProductItem = ({product = {}}) => (
    <div className="card prod-item">
        <img src="https://via.placeholder.com/250x350" alt={product.name} />
        <div className="container">
            <h4>{product.name}</h4>
            <span>{product.price}</span>
            <p>{product.about}</p>
        </div>
    </div>
)

export default Home;