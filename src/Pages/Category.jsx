import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Category({ slug, filterPrice, setFilterPrice, rating, setRating }) {

    const [categories, setCategories] = useState([]);

    // get all categories start

    const getCategories = async () => {
        axios.get('https://dummyjson.com/products/categories')
            .then((response) => {
                setCategories(response.data)
                // console.log(response.data);
            }).catch(() => {
                console.log("API server down");
            })
    }

    // get all categories end
    useEffect(
        () => {
            getCategories();
        }, []
    )

    // clear all filter js start

    const clearFilter = () => {
        setFilterPrice({ from: 0, to: 2000 });
        setRating(0);

    }

    // clear all filter js end

    return (
        <>
            <div>
                <Link to={`/products`}>
                    <button className='mx-1 p-2 px-5 rounded-xl bg-[#674188] hover:bg-[#472b60] text-white transition' onClick={clearFilter}>Clear Filter</button>
                </Link>
            </div>
            <div>
                <h1 className='text-3xl'>Rating</h1>
                <div className='text-start' style={{ cursor: "pointer" }}>
                    <p className={`p-2 px-5 border border-[#674188] rounded-lg my-2 cursor-pointer ${rating == 4 ? 'bg-[#674188] text-white' : ''}`} onClick={() => setRating(4)}>4⭐ and Above</p>
                    <p className={`p-2 px-5 border border-[#674188] rounded-lg my-2 cursor-pointer ${rating == 3 ? 'bg-[#674188] text-white' : ''}`} onClick={() => setRating(3)}>3⭐ and Above</p>
                    <p className={`p-2 px-5 border border-[#674188] rounded-lg my-2 cursor-pointer ${rating == 2 ? 'bg-[#674188] text-white' : ''}`} onClick={() => setRating(2)}>2⭐ and Above</p>
                    <p className={`p-2 px-5 border border-[#674188] rounded-lg my-2 cursor-pointer ${rating == 1 ? 'bg-[#674188] text-white' : ''}`} onClick={() => setRating(1)}>1⭐ and Above</p>
                    <p className={`p-2 px-5 border border-[#674188] rounded-lg my-2 cursor-pointer ${rating == 0 ? 'bg-[#674188] text-white' : ''}`} onClick={() => setRating(0)}>0⭐ and Above</p>
                </div>
            </div>

            <div className='mb-2'>
                <h1 className='text-3xl'>Price</h1>
                <input type="number" className='m-2 w-20 text-center border border-black' value={filterPrice.from} onChange={(min) => setFilterPrice({ ...filterPrice, from: min.target.value })} />

                To

                <input type="number" className='m-2 w-20 text-center border border-black' value={filterPrice.to} onChange={(max) => setFilterPrice({ ...filterPrice, to: max.target.value })} />
            </div>
            <ul>
                <Link to={`/products`}>
                    <li className={`p-2 px-5 rounded-lg my-2 cursor-pointer border border-[#674188] ${slug == null ? 'bg-[#674188] text-white' : ''}`}>All Categories</li>
                </Link>
                {
                    categories.map((v, i) => {
                        // console.log(v);
                        return (
                            <Link to={`/products/${v.slug}`} key={i}>
                                <li className={`p-2 px-5 border border-[#674188] rounded-lg my-2 cursor-pointer ${slug == v.slug ? 'bg-[#674188] text-white' : ''}`}>{v.name}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </>
    )
}
