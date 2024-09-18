import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/MainContext'


export default function Header() {

    // getting cart value from context start

    const { cart, setCart } = useContext(CartContext);
    // getting cart value from context end

    const menu = [
        {
            name: "Home",
            link: "/"
        }, {
            name: "Products",
            link: "/products"
        }, {
            name: "About Us",
            link: "/about"
        }
    ]
    return (
        <>
            <div className='w-full shadow sticky top-0 bg-white z-10'>
                <div className="container px-5 py-1 mx-auto ">
                    <div className='flex justify-between items-center'>
                        <div className='max-w-[15%]'>
                            <img src="https://shorturl.at/yzRXV" alt="" width={'150px'} />
                        </div>
                        <div className='max-w-[70%] w-[70%]'>
                            <ul className=' flex justify-end gap-10'>
                                {
                                    menu.map((d, i) => {
                                        return (
                                            <li className='' key={i}>
                                                <Link to={d.link}> {d.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <Link to={'/cart'}>
                                <button className='mx-1 p-2 px-5 rounded-xl bg-[#674188] hover:bg-[#472b60] text-white transition'>Cart ({cart.length})</button>
                            </Link>
                            <button className='mx-1 p-2 px-5 rounded-xl bg-[#F7EFE5] hover:bg-[#E2BFD9] ' onClick={() => setCart([])}>Clear Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
