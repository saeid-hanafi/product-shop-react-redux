import React from 'react';
import './Product.css';
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {IncreaseBasketProductCount, addProductIntoBasket} from "../actions";

/**
 * This Class Load Single Product
 */
class Product extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
    }

    addToCartHandler = () => {
        let productID   = this.props.id;
        let product     = this.props.products.find(product => (productID === product.id));
        let basket      = this.props.basket.basket_items.findIndex(basket => (productID === basket.id));

        if (basket >= 0 && typeof product === "object") {
            this.props.IncreaseBasketProductCount(basket);
        }else if (typeof product === "object") {
            this.props.addProductIntoBasket(product);
        }
    }

    render() {
        return (
            <div className="Product">
                <div className="Product-container">
                    <div className="Product-image">
                        <div className="Product-image-overlay"></div>
                        <img src={this.props.image} alt="Product Images"/>
                    </div>
                    <div className="Product-info">
                        {this.props.hasOff && (<div className="bottom-option">
                            <span>٪{this.props.offValue} تخفیف</span>
                        </div>)}
                        <div className="Product-info-container">
                            <div className="Product-brand">
                                {this.props.brand}
                            </div>
                            {this.props.hasDiscount && (<div className="Product-discount">{(this.props.discountValue).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} تومان</div>)}
                        </div>
                        <div className="Product-info-container">
                            <div className="Product-name">{this.props.name}</div>
                            <div className="Product-price-container">
                            <span className="Product-price">
                                {(this.props.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                            </span>

                                <span className="Product-unit">
                                تومان
                            </span>
                            </div>
                        </div>
                        <div className="Product-info-container Product-info-container--cart-btns">
                            <div className="Product-add-to-cart" onClick={this.addToCartHandler}>
                                <span className="c-ui-icon c-ui-icon--basket"></span>
                                <span className="Product-add-to-cart-text">میخرم</span>
                            </div>
                            <div className="Product-add-to-cart-later">
                                <span className="Product-add-to-cart-text">بعدا میخرم</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

/**
 * Set Variations Type
 * @type {{hasOff: Requireable<boolean>, image: Validator<NonNullable<string>>, offValue: Requireable<number>, hasDiscount: Requireable<boolean>, price: Requireable<number>, name: Validator<NonNullable<string>>, brand: Validator<NonNullable<string>>, discountValue: Requireable<number>}}
 */
Product.propTypes = {
    brand: propTypes.string.isRequired,
    discountValue: propTypes.number,
    hasDiscount: propTypes.bool,
    hasOff: propTypes.bool,
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    offValue: propTypes.number,
    price: propTypes.number,
}

/**
 * Set Variations Default Value
 * @type {{hasOff: boolean, offValue: number, hasDiscount: boolean, price: number, discountValue: number}}
 */
Product.defaultProps = {
    discountValue: 0,
    hasDiscount: false,
    hasOff: false,
    offValue: 0,
    price: 0,
}

/**
 * Get States From Redux Reducers Store
 * @param state
 * @returns {{basket: *, products: ((function(*=, *): [{hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}, {hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}, {hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}, {hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}])|*)}}
 */
const mapStateToProp = (state) => {
    return {
        products: state.products,
        basket: state.basket,
    }
}

export default connect(mapStateToProp, {
    IncreaseBasketProductCount,
    addProductIntoBasket,
})(Product);