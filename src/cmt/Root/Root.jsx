import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';
import Asid from '../asid/Asid';
import "../Header/h.css"
const Root = () => {
    return (
        <div>
            <Header></Header>
          <div className='a'>
         <Asid></Asid>
            <Outlet>

</Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;