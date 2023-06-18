import React, {useEffect, useState} from 'react';
import Styles from './LoginAdminSite.module.scss';
import {ToastContainer, toast} from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'
import {checkAdminLogin} from "../../../functionControlle/allFunction";

const LoginAdminSite = () => {
    const router = useRouter();
    const [dataAdmin, setDataAdmin] = useState({
        email: '',
        password: '',
    });
    const handlerInput = (event) => {
        setDataAdmin({
            ...dataAdmin,
            [event.target.name]: event.target.value,
        })
    }
    useEffect(() => {
        checkAdminLogin(router);
    }, [])

    const handlerClickPost = (event) => {
        event.preventDefault();
        axios.post(process.env.NEXT_PUBLIC_LOGIN_ADDMIN_SITE, dataAdmin)
            .then(item => {
                const dataError = item?.data[0];
                if (item.data[0] === 'admin_set') {
                    localStorage.setItem('adm' , item.data[1]);
                    router.push(`/dashboardamircv`);
                } else {
                    dataError?.length &&
                    toast.error(dataError, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            })

    }

    return (
        <form action={process.env.NEXT_PUBLIC_LOGIN_ADDMIN_SITE} method={'post'}>
            <div className={Styles['main-contact-us']}>
                <div className={Styles['main-contact-us__box-input']}>
                    <input type="text" name='email' placeholder='Email' onChange={handlerInput}/>
                </div>
                <div className={Styles['main-contact-us__box-input']}>
                    <input type="text" name='password' placeholder='Password' onChange={handlerInput}/>
                </div>
                <button className={Styles['main-contact-us__login-btn']} onClick={handlerClickPost}>Login</button>
                <ToastContainer/>
            </div>
        </form>
    );
};

export default LoginAdminSite;