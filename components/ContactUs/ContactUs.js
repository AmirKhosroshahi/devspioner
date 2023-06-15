import React, {useState} from 'react';
import Styles from './ContactUs.module.scss';
import H_head from '../H_head/H_head';
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        text: '',
    });
    const changeHandlers = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value,
        })
    }
    const PrevDefaultHandler = (event) => {
        event.preventDefault();

        axios.post(process.env.NEXT_PUBLIC_SAVE_CONTACTUS, dataForm)
            .then(res => {
                let arrayError = res?.data;
                if (arrayError === 'Successful submission') {
                    setDataForm({
                        name: '',
                        email: '',
                        text: '',
                    });
                    toast.success(arrayError, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                typeof (arrayError) === "object" &&
                (
                    arrayError.map((item, index) => toast.error(arrayError[index][0], {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }))
                )
            })
    }


    return (
        <div className={Styles['content-contact-us']}>
            <H_head>So, what do you need?</H_head>
            <form className={Styles['content-contact-us__form-contact-us']}>
                <input value={dataForm.name} type="text" name='name' onChange={changeHandlers}
                       placeholder='Name'/>
                <input value={dataForm.email} type="text" name='email' onChange={changeHandlers}
                       placeholder='Email'/>
                <div className={Styles['content-contact-us__form-contact-us__textAr']}>
                    <textarea value={dataForm.text} name='text' onChange={changeHandlers}
                              placeholder='Tell us what do you need.'></textarea>
                </div>
                <div className={Styles['content-contact-us__form-contact-us__sub']}>
                    <button onClick={PrevDefaultHandler}>Submit</button>
                </div>
                <ToastContainer/>
            </form>

        </div>
    );
};

export default ContactUs;
