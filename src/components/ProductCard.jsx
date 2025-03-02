import React from 'react';
import '../ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="price-and-cart">
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart-btn">
                    <FaCartPlus className="cart-icon" />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
