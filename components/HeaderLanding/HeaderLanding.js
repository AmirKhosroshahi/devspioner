import React, {useEffect, useRef, useState} from 'react';
import Styles from './HeaderLanding.module.scss';
import clsx from "clsx";
import {movCircleHandler} from '../../functionControlle/allFunction';
import {title} from '../../static/language';

const HeaderLanding = () => {
    const circleLeft = useRef(null);
    const circleRight = useRef(null);
    const [dataTitle,setDataTitle] = useState([]);
    useEffect(()=>{
        setDataTitle(title);
    },[])
    
    return (
        <section onMouseMove={(e)=>movCircleHandler(e,circleLeft,circleRight)} className={clsx(Styles['section-text'])}>
            <span className={Styles['section-text__circle-left']} ref={circleRight}/>
            <span className={Styles['section-text__circle-right']} ref={circleLeft} />
            <h5>
                {dataTitle.textUp}
                <br/>
                <span>{dataTitle.textCenter}</span>
                <br/>
                {dataTitle.buttText}
            </h5>

        </section>
    );
};


export default HeaderLanding;
