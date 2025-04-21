import React from 'react';
import { createBrowserRouter } from 'react-router'
import App from '../App';
import Root from '../component/Root/Root';
import Home from '../component/Root/Home/Home';
import Errorpage from '../Page/ErrorPage/Errorpage';
import Mybook from '../Page/ErrorPage/MYBooking/Mybook';
import Blog from '../Page/ErrorPage/Blog/Blog';
export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<Errorpage/>,
        children:[
            {index:true, path:'/', Component:Home},
            {path:'my-bookings', Component:Mybook},
            {path:'blogs', Component:Blog},
        ],
    },
    ]);
   