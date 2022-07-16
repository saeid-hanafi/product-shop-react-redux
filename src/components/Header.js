import React from "react";
import "./Header.css";
import DigiStyleLogo from '../assets/images/digistyle_logo.svg';
import BasketItem from "./BasketItem";
import {connect} from "react-redux";
import {searchProduct} from "../actions";

/**
 * This Class Load Page Header And Basket Items
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    getSearchResult = event => {
        let searchVal   = event.target.value;
        if (typeof searchVal === "string") {
            this.props.searchProduct(searchVal);
        }
    }

    render() {
        let totalPrice  =  0;
        let totalCount =  0;
        let basket = this.props.basket.basket_items;
        if (basket.length > 0) {
            basket.map(basket => {
                totalPrice += basket.price * basket.count;
                totalCount += basket.count;
            });
        }
        return (
            <div className="Header">
                <div className="Header-container">
                    <ul className="Header-col Header-user-items">
                        <li className="c-ui-icon c-ui-icon--basket header-user-basket-item">
                            <div className="notification-badge">
                                {this.props.basket.basket_items_id.length}
                            </div>
                            {totalCount > 0 &&
                            <div className="basket-detailed-container">
                                <div className="basket-total-container">
                                    <div className="basket-total-price" data-lable="جمع کل مبلغ: " data-currency="تومان">
                                        {(totalPrice).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                    </div>
                                    <div className="basket-total-count">
                                        <span>{this.props.basket.basket_items_id.length}</span> محصول
                                    </div>
                                </div>
                                <div className="basket-items-container">
                                    {basket.map(basket =>(<BasketItem key={basket.id} basketInfo={basket} />))}
                                </div>
                            </div>
                            }
                        </li>
                        <li className="c-ui-icon c-ui-icon--floppy"></li>
                        <li className="c-ui-icon c-ui-icon--heart-narrow"></li>
                        <li className="Header-user-items--user-login-text">
                            وارد شوید
                        </li>
                    </ul>
                    <div className="Header-col Header-main">
                        <div className="Header-main--logo">
                            <img src={DigiStyleLogo} alt="DigiStyle Logo"/>
                        </div>
                        <div className="Header-main--separator"></div>
                        <ul className="Header-main--cats">
                            <li>مردانه</li>
                            <li>زنانه</li>
                            <li>بچه گانه</li>
                            <div className="Header-main__cats-separator"></div>
                            <li>برند ها</li>
                            <li>فروش ویژه</li>
                            <li>کارت هدیه</li>
                            <li>خانه طراحان ایرانی</li>
                        </ul>
                    </div>
                    <div className="Header-col Header-search">
                        <div className="Header-search-input-container">
                            <div className="Header-search-icon c-ui-icon c-ui-icon--search-main"></div>
                            <input type="text" placeholder="جستجو در میان 409 برند معتبر" onChange={this.getSearchResult}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Get States From Redux Reducers Store
 * @param state
 * @returns {{basket: *}}
 */
const mapStateToProp = (state) => {
    return {
        basket: state.basket,
    };
}

export default connect(mapStateToProp, {
    searchProduct,
})(Header);