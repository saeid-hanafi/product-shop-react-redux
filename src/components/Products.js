import React from 'react';
import './Products.css';
import Product from "./Product";
import propTypes from 'prop-types';
import {connect} from "react-redux";

const Products = props => {
    return (
        <div className="Products">
            <div className="Products-wrapper">
                {props.products.map(product =>{
                    return (
                        <Product brand={product.brand} name={product.name} image={product.image}
                                 price={product.price} discountValue={product.discountValue}
                                 hasDiscount={product.hasDiscount} offValue={product.offValue}
                                 hasOff={product.hasOff} id={product.id} key={product.id}
                                 addToCartFunc={props.addToCart}/>
                    )
                })}
            </div>
        </div>
    );
};

Products.propTypes = {
    name: propTypes.string.isRequired,
    brand: propTypes.string.isRequired,
    discountValue: propTypes.number,
    hasDiscount: propTypes.bool,
    hasOff: propTypes.bool,
    image: propTypes.string.isRequired,
    offValue: propTypes.number,
    price: propTypes.number,
}

Products.defaultProps = {
    discountValue: 0,
    hasDiscount: false,
    hasOff: false,
    offValue: 0,
    price: 0,
}

const mapStateToProp = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProp)(Products);