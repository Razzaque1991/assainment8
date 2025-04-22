import React from 'react';
import { createBrowserRouter } from 'react-router-dom';  
import Root from '../component/Root/Root';
import Home from '../component/Root/Home/Home';
import Errorpage from '../Page/ErrorPage/Errorpage';
import Blog from '../Page/ErrorPage/Blog/Blog';
import LawyerDetailPage from '../Page/ErrorPage/LawyerDetailPage/LawyerDetailPage';
import MyBook from "../Page/ErrorPage/MYBooking/MyBook";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Errorpage />,
    children: [
      { index: true, Component: Home },
      { path: 'my-bookings', Component: MyBook },
      { path: 'blogs', Component: Blog },
      { path: 'lawyer/:id', Component: LawyerDetailPage },
    ],
  },
]);
