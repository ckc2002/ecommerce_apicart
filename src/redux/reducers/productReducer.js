import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
    cart: []
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.ADDTO_CART:
            const inCart = state.cart.find((item) => item.id === payload.id ? true : false)
            return { ...state, cart: inCart ? state.cart.map((item) => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...payload, qty: 1 }] }
        case ActionTypes.ADJUST_QTY:
            return { ...state, cart: state.cart.map((item) => item.id === payload.id ? { ...item, qty: payload.qty }: item) }
        case ActionTypes.REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter((item) => item.id !== payload.id)}
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

// export const addToCartReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.ADDTO_CART:
//             return { ...state, cart: payload};
//         case ActionTypes.REMOVE_FROM_CART:
//             return { ...state, cart: state.cart.filter((item) => item.id !== payload.id) }
//         case ActionTypes.ADJUST_QTY:
//             return {
//                 ...state,
//                 cart: state.cart.map(item => item.id === payload.id ? { ...item, qty: payload.qty } : item)
//             }
//         default:
//             return state;
//     }
// }

// export const addProductToCart = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.ADDTO_CART:
//             const item = state.products.find((prod) => prod.id === payload.id)

//             const inCart = state.cart.find((item) => item.id === payload.id ? true : false)
//             return { ...state, cart: inCart ? state.cart.map((item) => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }] }
//         case ActionTypes.REMOVE_FROM_CART:
//             return { ...state, cart: state.cart.filter((item) => item.id !== payload.id) }
//         case ActionTypes.ADJUST_QTY:
//             return {
//                 ...state,
//                 cart: state.cart.map(item => item.id === payload.id ? { ...item, qty: payload.qty } : item)
//             }
//         default:
//             return state;
//     }
// }



