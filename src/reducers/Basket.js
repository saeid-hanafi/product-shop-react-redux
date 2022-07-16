/**
 * Set Initialize Basket Items
 * @type {{basket_items: [], basket_items_id: []}}
 */
let initializeState = {
    basket_items : [],
    basket_items_id : [],
};

/**
 * Basket Reducer
 * @param state
 * @param action
 * @returns {{basket_items: *[], basket_items_id: *[]}}
 */
export default (state = initializeState, action) => {
    if (action.type === "INCREASEBASKETPRODUCTCOUNT") {
        let basketIndex = action.payload.basketIndex;
        let newState    = {...state};
        newState.basket_items[basketIndex].count += 1;
        return newState;
    }

    if (action.type === "ADDPRODUCTINTOBASKET") {
        let productInfo = action.payload.product;
        return {...state, basket_items: [...state.basket_items, {...productInfo, count: 1}], basket_items_id: [...state.basket_items_id, productInfo.id]};
    }

    if (action.type === "REMOVEPRODUCTFROMBASKET") {
        let itemIndex   = action.payload.itemIndex;
        let itemIdIndex = action.payload.itemIDIndex;
        let newState    = {...state};
        newState.basket_items.splice(itemIndex, 1);
        newState.basket_items_id.splice(itemIdIndex, 1);
        return newState;
    }

    return state;
}