/**
 * Increase Product Count Into Basket After Click Action
 * Reducer Action
 * @param basketIndex
 * @returns {{payload: {basketIndex}, type: string}}
 * @constructor
 */
export const IncreaseBasketProductCount = (basketIndex) => {
    return {
        type: "INCREASEBASKETPRODUCTCOUNT",
        payload: {
            basketIndex: basketIndex,
        }
    }
}

/**
 * Add Product Into Basket After Click Action
 * Reducer Action
 * @param product
 * @returns {{payload: {product}, type: string}}
 */
export const addProductIntoBasket = (product) => {
    return {
        type: "ADDPRODUCTINTOBASKET",
        payload: {
            product: product,
        }
    }
}

/**
 * Remove Product From Basket After Click Action
 * Reducer Action
 * @param itemIndex
 * @param itemIDIndex
 * @returns {{payload: {itemIndex, itemIDIndex}, type: string}}
 */
export const removeProductFromBasket = (itemIndex, itemIDIndex) => {
    return {
        type: "REMOVEPRODUCTFROMBASKET",
        payload: {
            itemIndex: itemIndex,
            itemIDIndex: itemIDIndex,
        }
    }
}

/**
 * Filter Products Display After Type On Search Input
 * Reducer Action
 * @param searchVal
 * @returns {{payload: {searchVal}, type: string}}
 */
export const searchProduct = (searchVal) => {
    return {
        type: "SEARCHPRODUCT",
        payload: {
            searchVal: searchVal,
        }
    }
}