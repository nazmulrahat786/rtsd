import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation,  } from 'react-router';
import Footer from '../../Footer/Footer';
import Asid from '../asid/Asid';
import "../Header/h.css"
const Root = () => {
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)
const style = {
    color: 'red',
    fontSize: '20px',
    fontWeight: 'bold',
}
    return (
        <div>
            <Header></Header>
            {isNavigating && <span style={style} >Loading...</span>}
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