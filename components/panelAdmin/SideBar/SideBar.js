import React, {useEffect} from "react";
import Link from "next/link";
import Styles from './SideBar.module.scss'
import {useRouter} from 'next/router'

const SideBar = () => {
    const router = useRouter();
    const checkAdminLogin = ()=>{
      const getAdmin = +localStorage.getItem('adm');
      if (!getAdmin){
          router.push('loginadmin');
      }
    }
    useEffect(()=>{
        checkAdminLogin();
    },[])

    const dataMenuDash = [
        {
            link: '/dashboardamircv',
            title: 'Add Project',
        }
        ,
        {
            link: '/addimage',
            title: 'Add Image',
        }
        ,
        {
            link: '/getcontactus',
            title: 'Contact us',
        }
    ];
    const mapDataDash = dataMenuDash.map(item => {
        return (
            <li key={item.title}>
                <Link href={item.link}>
                    <a>
                        {item.title}
                    </a>
                </Link>
            </li>
        )
    })
    return (
        <aside className={Styles['main-dashboard__side-bar']}>
            <ul>
                {mapDataDash}
            </ul>
        </aside>
    );
};

export default SideBar;