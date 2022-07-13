import React from 'react';
import './Product.css';
import propTypes from 'prop-types';

class Product extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
    }

    addToCartCallback = () => {
        return this.props.addToCartFunc(this.props.id);
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
                            <div className="Product-add-to-cart" onClick={this.addToCartCallback}>
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

Product.defaultProps = {
    discountValue: 0,
    hasDiscount: false,
    hasOff: false,
    offValue: 0,
    price: 0,
}

export default Product;