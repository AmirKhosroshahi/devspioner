import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Headers";

const Layout = ({children}) => {

    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;