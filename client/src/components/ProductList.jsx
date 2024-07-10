import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext.jsx';

const ProductList = () => {
    const { items } = useContext(ItemContext);

    return (
        <div className="product-list">
            {items.map((item) => (
                <div key={item._id} className="product-item">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                    <p>{item.genre}</p>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
