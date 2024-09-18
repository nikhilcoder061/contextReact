import React, { useContext } from 'react'
import { CartContext } from '../Context/MainContext';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    console.log(cart);



    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    {/* Cart Items */}
                    <div className="w-full md:w-2/3">
                        {/* Cart Item */}

                        {
                            cart.map((productData, productIndex) => {

                                return (
                                    <CartItem key={productIndex} productData={productData} />
                                )
                            })
                        }



                        {/* Repeat cart-item div for more products */}
                    </div>
                    {/* Cart Summary */}
                    <div className="w-full md:w-1/3 bg-white p-4 rounded-md shadow-md border border-gray-200">
                        <h4 className="text-xl font-bold mb-4 text-center">Cart Summary</h4>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span id="subtotal">$40.00</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping:</span>
                            <span id="shipping">Free</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Estimated Tax:</span>
                            <span id="tax">$3.20</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Total:</span>
                            <span id="total">$43.20</span>
                        </div>
                        <a
                            className="block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Proceed to Checkout
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
function CartItem({ productData }) {
    const { id, qty, title, price, category, thumbnail} = productData;
    return (
        <div className="bg-white p-4 mb-4 rounded-md shadow-lg flex items-start space-x-4 border-b border-gray-200 cart-item">
            <div className="flex-shrink-0">
                <img
                    src={thumbnail}
                    alt="Product Image"
                    className="w-24 h-auto"
                />
            </div>
            <div className="flex-1">
                <h5 className="text-xl font-semibold">{title}</h5>
                <p className="text-gray-600">Category: {category}</p>
            </div>
            <div>
                <h5 className="text-xl font-semibold price mr-8">₹{price}</h5>
            </div>
            <div className="text-center">

                <input
                    type="number"
                    className="w-16 p-2 border border-gray-300 rounded-md quantity"
                    min={1}
                    value={qty}
                />
            </div>
            <div className="text-right">
                <h5 className="text-xl font-semibold price">₹{price*qty}</h5>
                <span
                    className="remove-btn text-sm cursor-pointer mt-1 block text-[red]"
                >
                    Remove
                </span>
            </div>
        </div>
    )
}