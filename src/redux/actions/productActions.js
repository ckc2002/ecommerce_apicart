import { ActionTypes } from "../contants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const addToCart = (products) => {
    return {
        type: ActionTypes.ADDTO_CART,
        payload: products
    }
}

export const adjustQty = (productId,value) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: {
            id: productId,
            qty: value
        }
    }
}



export const removeFromCart = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: productId
        }
    }
}