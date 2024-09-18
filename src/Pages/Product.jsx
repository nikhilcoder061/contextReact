import React, { useContext } from 'react'
import { CartContext } from '../Context/MainContext';

export default function Product({ allProducts, setAllProducts }) {



    return (
        <>
            <>

                <section
                    id="Projects"
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 px-4 md:grid-cols-2 justify-items-center justify-center gap-4 gap-x-14"
                >
                    {allProducts.map((v, i) => {
                        return (
                            // <ProductItem key={i} title={v.title} price={v.price} category={v.category} img={v.thumbnail} rate={v.rating} />
                            <ProductItem key={i} pData={v} />
                        )
                    })}
                </section>
            </>

        </>
    )
}
// title, price, category, img, rate
const ProductItem = ({ pData }) => {
    const { title, price, category, thumbnail, rating, id } = pData;

    // getting cart value from context start

    const { cart, setCart } = useContext(CartContext);

    // getting cart value from context end

    // add product info in cart start

    const addToCart = () => {
        const productObj = {
            id,
            qty: 1,
            title,
            price,
            category,
            thumbnail,
        }

        // now verify product is already availble in cart or not start

        const filterCart = cart.filter((data, index) => {
            return data.id == id;
        })
        if (filterCart.length == 0) {
            const finalData = [...cart, productObj];
            setCart(finalData)
            console.log(cart);
        }else{
            alert("Product is already added in cart")
            
        }

        // now verify product is already availble in cart or not end


    }

    // add product info in cart end



    return (
        <div className="w-72 bg-white border shadow-2xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl py-2 group">
            <img
                src={thumbnail}
                alt="Product"
                className="h-80 w-[100%] object-cover rounded-t-xl group-hover:scale-105 transition-[5s]"
            />
            <div className="px-4 py-3 w-[100%]">
                <span className="text-gray-400 mr-3 uppercase text-xs">{category}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                    {title}
                </p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                        ₹{price}
                    </p>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">({rating.toFixed(1)})</p>
                    <div className="ml-auto cursor-pointer" onClick={addToCart}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-bag-plus"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
