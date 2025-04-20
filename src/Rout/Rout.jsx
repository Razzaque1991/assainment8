import React from 'react';
import { createBrowserRouter } from 'react-router'
import App from '../App';
import Root from '../component/Root/Root';
import Home from '../component/Root/Home/Home';
import Errorpage from '../Page/ErrorPage/Errorpage';
 

export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<Errorpage/>,
        children:[
            {index:true, path:'/', Component:Home},
        ],
    },
    ]);
   