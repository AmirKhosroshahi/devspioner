import React, {useState, useEffect} from 'react';
/* Import Style Module */
import Styles from './Header.module.scss';
/* Import Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Import Link react-router-dom */
import Link from "next/link";
/* Import Clsx */
import clsx from "clsx";
/* Import FontAwesomeIcon */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


/* Function Component */
const Header = () => {

    /*  Create State  */
    const [active, setActive] = useState(true);
    const dataMenu = [
        {
            link: '/',
            title: 'Home',
            activeClass: clsx(Styles.activeClick)
        }
        ,
        {
            link: '/projects',
            title: 'Projects',
            activeClass: ''
        }
        ,
        {
            link: '/contactus',
            title: 'Contact us',
            activeClass: ''
        }
    ];
    useEffect(() => {
        let getTagHeader = document.querySelector(".header")
        window.addEventListener("scroll", e => {
            if (window.scrollY > 0) {
                getTagHeader.style = 'background:rgba(2, 2, 31, 0.87) none repeat scroll 0% 0%;padding-top: 10px;'
            } else {
                getTagHeader.style = 'padding: 10px;'
            }
        })

    })
    useEffect(() => {
        const getLink = document.querySelectorAll(".nav>ul>li>a");
        getLink.forEach((ele) =>
            ele.addEventListener("click", function (event) {
                getLink.forEach((ele) => ele.classList.remove(clsx(Styles.activeClick)));
                this.classList.add(clsx(Styles.activeClick))
            })
        );
    }, [])
    useEffect(() => {
        const activeHover = () => {
            const getLink = document.querySelectorAll(".nav>ul>li");
            getLink.forEach(item => {
                item.addEventListener('mouseover', (e) => {
                    const activeHover = document.querySelector('.bor');
                    !active ? activeHover.style = `width:0;height:0;border-bottom: 2px solid #3719c9;position:absolute;bottom:0;left:${item.offsetLeft}px;transition: all 0.2s;` : activeHover.style = `width:${e.target.clientWidth}px;height:2px;border-bottom: 2px solid #3719c9;position:absolute;bottom:0;left:${item.offsetLeft}px;transition: all 0.2s;`
                })
            })
            getLink.forEach(item => {
                item.addEventListener('mouseleave', (e) => {
                    const activeHover = document.querySelector('.bor');
                    !active ? activeHover.style = `width:0;height:0;border-bottom: 2px solid #3719c9;position:absolute;bottom:0;left:${item.offsetLeft}px;transition: all 0.2s;` : activeHover.style = `width:${e.target.clientWidth}px;transform: scale(0);height:2px;border-bottom: 2px solid #3719c9;position:absolute;bottom:0;left:${item.offsetLeft}px;transition: all 0.6s;`

                })
            })
        }
        activeHover();
    }, [active])
    const goToHome = () => {
        const getLinkFirstChild = document.querySelector(".nav>ul>li:first-child a");
        const getLinkAll = document.querySelectorAll(".nav>ul>li>a");
        getLinkAll.forEach(item=>{
            item.classList.remove(clsx(Styles.activeClick))
        })
        getLinkFirstChild.classList.add(clsx(Styles.activeClick))
    }
    const mapDataMenu = dataMenu.map(item => {
        return (
            <li key={item.title} className='Link'>
                <Link href={item.link}>
                    <a className={item.activeClass}>
                        {item.title}
                    </a>
                </Link>
            </li>
        )
    })


    return (
        <header className={clsx(Styles.menuHeader, 'header')}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-xl-8 col-sm-6">
                        <div className={Styles.log}>
                            <Link href="/" className={Styles.notPadding}>
                                <a onClick={() => goToHome()}>
                                    <img
                                        src='/image/logo.png'
                                        alt="Logo"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                        <span className={Styles.responsive}><FontAwesomeIcon icon={faBars}/></span>
                        <nav className={clsx(`${Styles.nav} nav`)}>
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