import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/fonts/ui_icon.css';
import reducer from './reducers';
import {createStore} from "redux";
import {Provider} from "react-redux";

/**
 * Get Reducers And Store Them
 * @type {Store<EmptyObject & {basket: {basket_items: *[], basket_items_id: *[]}, products: {hasOff: boolean, image: string, offValue: number, hasDiscount: boolean, price: number, name: string, id: number, brand: string, discountValue: number}[]}, AnyAction>}
 */
let store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
