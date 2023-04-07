import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home/Home';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};

export default Main;