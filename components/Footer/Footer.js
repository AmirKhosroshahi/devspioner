import React from 'react';
import Link from "next/link";
import Styles from './Footer.module.scss';

const Footer = () => {
    return (

        <footer className={Styles['footer-site']}>
            <div className={Styles['footer-site__footer-text']}>
                <h5>Wanna reach out to <span>Riotters?</span></h5>
                <span>Let’s start a riot. Shoulder to shoulder.</span>
                <div className={Styles['footer-site__footer-text__contact']}>
                    <Link href='/contactus' alt=''><a
                        className={Styles['footer-site__footer-text__contact__quote']}>Get
                        a quote </a></Link>
                    <span style={{padding: '22px 27px 22px 25px'}}>Or</span>
                    <span className={Styles['footer-site__footer-text__contact__email']}>Email :  <span
                        style={{color: `#3719c9`}}>barnamenvican@gmail.com</span>  </span>
                </div>
            </div>
        </footer>

    );
};

export default Footer;



