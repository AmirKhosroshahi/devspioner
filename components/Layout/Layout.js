import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Headers";
import Head from "next/head";
export const logo = '/image/logo.png';
const Layout = ({children}) => {

    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content=""/>
                <link rel="icon" href={logo} />
            </Head>
            <Header/>
            <main>{children}</main>
            <Footer/>
            <span className='pointer'>
                <span className='pointer__right-eye'></span>
                <span className='pointer__left-eye'></span>
                <span className='pointer__nose'></span>
            </span>
        </div>
    );
};

export default Layout;