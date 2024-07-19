import React, { createContext, useContext, useReducer } from 'react'
import { act } from 'react-dom/test-utils';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: action.id, name: action.name, price: action.price, sale_price: action.sale_price, company_name: action.company_name, image: action.image }]
        case 'REMOVE':
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr
        default:
            console.log("Reducer Error")
    }
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
