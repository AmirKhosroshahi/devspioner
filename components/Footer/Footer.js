import React from 'react';
import Link from "next/link";

import Styles from './Footer.module.scss';

/* Image */
import footer_back from '../../public/image/footer_back.png';

/* Setting */
import {moveUpLink} from "../functionControlle/allFunction";


const Footer = () => {
    return (
        <>
            <footer className={Styles.footerSite}>
                <div className={Styles.FooterText}>
                    <h5>Wanna reach out to <span>Riotters?</span></h5>
                    <span>Let’s start a riot. Shoulder to shoulder.</span>
                    <div className={Styles.Contact}>
                        <Link href='/contactus'   alt=''><a onClick={moveUpLink} className={Styles.quote}>Get a quote </a></Link>
                        <span style={{padding: '22px 27px 22px 25px'}}>Or</span>
                        <span className={Styles.Email}>Email :  <span
                            style={{color: `#3719c9`}}>barnamenvican@gmail.com</span>  <span
                            className={Styles.Or}>Or</span>   <span
                            style={{color: `#3719c9`}}> milad.barzegar71@gmail.com</span> </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
