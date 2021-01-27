import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = props => {
    return(
        <>
        <Navbar/>
        {props.children}
        <div className="footer">
        <Footer/>
        </div>
        </>
    );
}

export default Layout;