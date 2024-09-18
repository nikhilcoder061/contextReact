import React from 'react'
import Web from './Web'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import Home from './Pages/Home'
import About from './Pages/About'
import MainContext from './Context/MainContext'
import Cart from './Pages/Cart'

export default function App() {

    const mainRoutes = createBrowserRouter(
        [
            {
                path: "/",
                element: <MainPage />,
                children: [
                    {
                        path: '',
                        element: <Home />
                    },
                    {
                        path: '/products/:slug?',
                        // path: '/products',
                        element: <Web />
                    },
                    {
                        path: '/about',
                        element: <About />
                    },
                    {
                        path: '/cart',
                        element: <Cart />
                    }
                ]
            }
        ]
    )

    return (
        <MainContext>
            <RouterProvider router={mainRoutes} />
        </MainContext>
    )
}
