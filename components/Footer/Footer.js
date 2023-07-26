import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Styles from './Footer.module.scss';
import {footer} from "../../static/language";

const Footer = () => {
    const [dataFooter,setDataFooter] = useState([]);
    useEffect(()=>{
        setDataFooter(footer);
    },[])
    return (

        <footer className={Styles['footer-site']}>
            <div className={Styles['footer-site__footer-text']}>
                <h5>{dataFooter.title}</h5>
                <span>{dataFooter.question}</span>
                <div className={Styles['footer-site__footer-text__contact']}>
                    <Link href='/contactus' alt=''><a
                        className={Styles['footer-site__footer-text__contact__quote']}>
                        {dataFooter.contact}
                    </a></Link>
                    <span style={{padding: '22px 27px 22px 25px'}}>Or</span>
                    <span className={Styles['footer-site__footer-text__contact__email']}>Email :  <span
                        style={{color: `#3719c9`}}>devspioner@gmail.com</span>  </span>
                </div>
            </div>
        </footer>

    );
};

export default Footer;



