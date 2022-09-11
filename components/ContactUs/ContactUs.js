import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';
import Styles from './ContactUs.module.scss';
import H_head from '../H_head/H_head';

import {setNewTitle, PrevDefault} from "../functionControlle/allFunction";


const Form = Styled.form`
   
`
const ContactUs = () => {
    /* State Form */
    const [dataForm, setText] = useState({
        name: '',
        email: '',
        text: '',
        isActive: false,
    });
    /* Set Title */
    // setNewTitle(`contact us`);
    /* ChangeHandler Form */
    const changeHandlers = (event) => {
        setText({
            ...dataForm,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className={Styles.ContentContactUs}>
            <H_head >So, what do you need?</H_head>
            <form className={Styles['form-contact-us']} onSubmit={PrevDefault}>
                <input value={dataForm.name} type="text" name='name' onChange={changeHandlers} placeholder='Name'/>
                <input value={dataForm.email} type="text" name='email' onChange={changeHandlers} placeholder='Email'/>
                <div className={Styles.textAr}>
                    <textarea value={dataForm.text} name='text' onChange={changeHandlers}
                              placeholder='Tell us what do you need.'></textarea>
                </div>
                <div className={Styles.sub}>
                    <button>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default ContactUs;
