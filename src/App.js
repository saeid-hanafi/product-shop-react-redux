import React from 'react';
import Header from "./components/Header";
import './App.css';
import Products from "./components/Products";
import {func} from "prop-types";

export default class App  extends React.Component {
    constructor(props) {
        super(props);
    }

    getSearchResult = event => {
        let result      = [];
        let searchVal   = event.target.value;
        if (typeof searchVal === "string") {
            this.state.products.map(productInfo => {
                if (productInfo.id === searchVal ||
                    productInfo.name.search(searchVal) >= 0 ||
                    productInfo.brand.search(searchVal) >= 0) {
                    result.push(productInfo.name);
                }
            });
        }
        return result;
    }

    addToCartHandler = (productID) => {
        let product = this.state.products.find(product => (productID === product.id));
        let basket  = this.state.basket.basket_items.findIndex(basket => (productID === basket.id));

        if (basket >= 0 && typeof product === "object") {
            let getBasket = this.state.basket;
            getBasket.basket_items[basket].count += 1;
            this.setState({
                basket: getBasket,
            })
        }else if (typeof product === "object") {
            product.count = 1;
            this.setState({
                basket: {
                    basket_items: [...this.state.basket.basket_items, product],
                    basket_items_id: [...this.state.basket.basket_items_id, productID],
                }
            })
        }
    }

    removeBasketItems = (productID) => {
        let basket = this.state.basket.basket_items;
        let basketIDs = this.state.basket.basket_items_id;
        let basketIndex = basket.findIndex(basketItem => (productID === basketItem.id));
        let basketIDIndex = basketIDs.findIndex(itemID => (productID === itemID));

        if (basketIndex >= 0 && basketIDIndex >= 0) {
            basket.splice(basketIndex, 1);
            basketIDs.splice(basketIDIndex, 1);
            this.setState({
                basket: {
                    basket_items: basket,
                    basket_items_id: basketIDs,
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Header serchRes={this.getSearchResult} removeBasket={this.removeBasketItems}/>
                <Products addToCart={this.addToCartHandler}/>
            </div>
        );
    }
};