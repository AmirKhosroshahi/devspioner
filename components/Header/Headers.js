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
import {menu} from '../../static/language';


const Header = () => {
    /*  Create State  */
    const [active, setActive] = useState(true);
    const [activeClick, setActiveClick] = useState(true);
    const [dataMeu, setDataMenu] = useState([]);
    const router = useRouter();
    const nameLink = router.asPath;
    useEffect(() => {
        setDataMenu(menu);
    }, [])
    useEffect(() => {
        backgroundHeader();
    })
    useEffect(() => {
        activeHover(active);
    }, [active])
    const {Home, Projects, contact} = dataMeu;
    const dataMenu = [
        {
            id:1,
            link: '/',
            title: Home,
            activeClass: nameLink === '/' && clsx(Styles.activeClick)
        }
        ,
        {
            id:2,
            link: '/projects',
            title: Projects,
            activeClass: nameLink === '/projects' && clsx(Styles.activeClick)
        }
        ,
        {
            id:3,
            link: '/contactus',
            title: contact,
            activeClass: nameLink === '/contactus' && clsx(Styles.activeClick)
        }
    ];
    const mapDataMenu = dataMenu.map(item => {
        return (
            <li key={item.id}>
                <Link key={item.link} href={item.link}>
                    <a key={item.title} className={clsx(item.activeClass)} onClick={() => openMenu(setActiveClick, activeClick)}>
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
                                        src='/image/Devs_Pioner.svg'
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