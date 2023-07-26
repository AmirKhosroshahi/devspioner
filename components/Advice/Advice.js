import React, {useEffect, useState} from 'react';
import Styles from './Advice.module.scss';
import {description} from "../../static/language";

const Advice = () => {
    const [dataDescription , setDescription] = useState([]);
    useEffect(()=>{
        setDescription(description)
    },[])
    return (
        <div className={Styles['advice-box']}>
            <div className={Styles['advice-box__main']}>
                <div className={Styles['advice-box__main__text-left']}>
                    <h5>
                        {dataDescription.left}
                    </h5>
                </div>
                <div className={Styles['advice-box__main__text-right']}>
                    <p>
                        {dataDescription.right}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Advice;
