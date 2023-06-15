import React, {useState, useEffect} from 'react';
import Styles from './Header.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {activeHover, backgroundHeader, openMenu} from '../../functionControlle/allFunction';
import {useRouter} from "next/router";
import axios from "axios";
/* Function Component */
const Header = () => {
    /*  Create State  */
    const [active, setActive] = useState(true);
    const [activeClick, setActiveClick] = useState(true);
    const router = useRouter();
    const nameLink = router.asPath;
    const dataMenu = [
        {
            link: '/',
            title: 'Home',
            activeClass: nameLink === '/' && clsx(Styles.activeClick)
        }
        ,
        {
            link: '/projects',
            title: 'Projects',
            activeClass: nameLink === '/projects' && clsx(Styles.activeClick)
        }
        ,
        {
            link: '/contactus',
            title: 'Contact us',
            activeClass: nameLink === '/contactus' && clsx(Styles.activeClick)
        }
    ];
    useEffect(() => {
        backgroundHeader();
        axios.get(process.env.NEXT_PUBLIC_CHECK_LOGIN_ADMIN)
       
    })
    useEffect(() => {
        activeHover(active);
    }, [active])

    const mapDataMenu = dataMenu.map(item => {
        return (
            <li key={item.title}>
                <Link href={item.link}>
                    <a className={clsx(item.activeClass)} onClick={() => openMenu(setActiveClick, activeClick)}>
                        {item.title}
                    </a>
                </Link>
            </li>
        )
    })

    return (
        <header className={clsx(Styles['menu-header'], 'header')}>
            <div className='container-fluid'>
                <div className={clsx('row', Styles['menu-header__content-menu'])}>
                    <div className={Styles['menu-header__content-menu__left']}>
                        <div className={clsx(Styles['menu-header__content-menu__left__log'], 'log')}>
                            <Link href="/" className={Styles['menu-header__content-menu__left__log__not-padding']}>
                                <a>
                                    <Image
                                        src='/image/logo.png'
                                        alt="Logo"
                                        width={'158'}
                                        height={'100%'}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={Styles['menu-header__content-menu__right']}>
                        <span className={Styles['menu-header__content-menu__right__responsive']}
                              onClick={() => openMenu(setActiveClick, activeClick)}>
                            <FontAwesomeIcon className='open' icon={faBars}/>
                            <FontAwesomeIcon className='close' icon={faXmark}/>
                        </span>
                        <nav className={clsx(Styles['menu-header__content-menu__right__nav'], 'nav')}>
                            <ul>
                                {mapDataMenu}
                            </ul>
                            <i className='bor'> </i>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;