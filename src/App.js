import React from 'react';
import Header from "./components/Header";
import './App.css';
import Products from "./components/Products";
import {func} from "prop-types";

export default class App  extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Products/>
            </div>
        );
    }
};