import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export default function MainContext({ children }) {

    // getting value from localStorage start
    const oldCartData = JSON.parse(localStorage.getItem('cartLocal')) ?? [];
    // getting value from localStorage end

    const [cart, setCart] = useState(oldCartData);

    // inserting value in localStorage when change in cart start 

    useEffect(() => {
        localStorage.setItem('cartLocal', JSON.stringify(cart))
    }, [cart])

    // inserting value in localStorage when change in cart end

    const obj = { cart, setCart };
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
