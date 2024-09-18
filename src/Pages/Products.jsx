import React, { useEffect, useState } from 'react'
import Category from './Category'
import Product from './Product'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Products() {

    const { slug } = useParams();

    const [allProducts, setAllProducts] = useState([]);
    const [filterPrice, setFilterPrice] = useState({ from: 0, to: 2000 });
    const [rating, setRating] = useState(0);
    const [limit, setLimit] = useState(1)

    // get all products without any filter start 

    const getProducts = async () => {
        let apiURL;
        if (slug == null) {
            apiURL = `https://dummyjson.com/products?limit=${limit * 40}`;
        } else {
            apiURL = `https://dummyjson.com/products/category/${slug}?limit=${limit * 20}`
        }
        axios.get(apiURL)
            .then((response) => {
                let finalData = response.data.products.filter((v, i) => {

                    // filter products by price and rating start 

                    if (v.price >= filterPrice.from && v.price <= filterPrice.to && v.rating >= rating) {
                        return v;
                    }

                    // filter cart by price and rating end

                })

                setAllProducts(finalData);

            }).catch(() => {
                console.log("API Server down");
            })
    }

    // get all products without any filter end


    useEffect(
        () => {
            getProducts();
        }, [slug, limit, filterPrice, rating]
    )


    return (
        <>
            <h1 className='text-3xl font-bold text-center py-5'>Our Products</h1>

            <div className='flex justify-between border'>
                <div className='w-1/6 bg-gray-200 p-4'>
                    <Category slug={slug} filterPrice={filterPrice} setFilterPrice={setFilterPrice} rating={rating} setRating={setRating} />
                </div>
                <div className='w-5/6 p-4'>
                    <p className='font-bold my-2'>Total Products: {allProducts.length}</p>
                    <Product
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                    />
                    <div className='text-center mt-8'>
                        <button className=' px-5 py-2 border border-blue-500 rounded-lg bg-blue-500 hover:bg-blue-400 text-white' onClick={() => setLimit(limit + 1)}>Load More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
