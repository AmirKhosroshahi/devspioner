import React, {useRef} from 'react';
import Styles from './HeaderLanding.module.scss';
import clsx from "clsx";
import {movCircleHandler} from '../../functionControlle/allFunction';

const HeaderLanding = () => {
    const circleLeft = useRef(null);
    const circleRight = useRef(null);
    return (
        <section onMouseMove={(e)=>movCircleHandler(e,circleLeft,circleRight)} className={clsx(Styles['section-text'])}>
            <span className={Styles['section-text__circle-left']} ref={circleRight}/>
            <span className={Styles['section-text__circle-right']} ref={circleLeft} />
            <h5>
                Design-driven
                <br/>
                <span>development of your</span>
                <br/>
                web product
            </h5>

        </section>
    );
};


export default HeaderLanding;
