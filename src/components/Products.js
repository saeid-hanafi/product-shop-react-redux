import React from 'react';
import './Products.css';
import Product from "./Product";
import propTypes from 'prop-types';
import {connect} from "react-redux";

/**
 * This Function Map Products And Give Information To product And Load Them
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Products = props => {
    return (
        <div className="Products">
            <div className="Products-wrapper">
                {props.products.map(product =>{
                    return (
                        <Product brand={product.brand} name={product.name} image={product.image}
                                 price={product.price} discountValue={product.discountValue}
                                 hasDiscount={product.hasDiscount} offValue={product.offValue}
                                 hasOff={product.hasOff} id={product.id} key={product.id}/>
                    )
                })}
            </div>
        </div>
    );
};

/**
 * Set Variations Type
 * @type {{hasOff: Requireable<boolean>, image: Validator<NonNullable<string>>, offValue: Requireable<number>, hasDiscount: Requireable<boolean>, price: Requireable<number>, name: Validator<NonNullable<string>>, brand: Validator<NonNullable<string>>, discountValue: Requireable<number>}}
 */
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

/**
 * Set Variations Default Value
 * @type {{hasOff: boolean, offValue: number, hasDiscount: boolean, price: number, discountValue: number}}
 */
Products.defaultProps = {
    discountValue: 0,
    hasDiscount: false,
    hasOff: false,
    offValue: 0,
    price: 0,
}

/**
 * Get States From Redux Reducers Store
 * @param state
 * @returns {{products: ((function(*=, *): [{hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}, {hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}, {hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}, {hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}])|*)}}
 */
const mapStateToProp = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProp)(Products);