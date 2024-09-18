import React from 'react'
import Header from './Common/Header'
import Products from './Pages/Products'

export default function Web() {
    return (
        <>

            <div className='w-full'>
                <div className="container px-5 mx-auto">
                    <Products />
                </div>
            </div>
        </>
    )
}
