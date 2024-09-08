import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import Home from '../pages/Home/Home'
import ErrorPages from '../pages/ErrorPages/ErrorPages'
import News from '../pages/News/News'
import Destination from '../pages/Destination/Destination'
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/news',
                element: <News />,
            },
            {
                path: '/destination',
                element: <Destination />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ]
    }
])

export default router