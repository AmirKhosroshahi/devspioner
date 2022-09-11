import React from 'react';
import Styles from './OurClients.module.scss';

import H_head from '../H_head/H_head';

/* Image  */
import logo1 from '../../public/image/logo1.svg';
import logo2 from '../../public/image/logo2.svg';
import logo3 from '../../public/image/logo3.svg';
import logo4 from '../../public/image/logo4.svg';
import logo5 from '../../public/image/logo5.svg';
import logo6 from '../../public/image/logo6.svg';
import logo7 from '../../public/image/logo7.svg';
import logo8 from '../../public/image/logo8.svg';

const OurClients = () => {
    return (
        <div className={Styles.OurClient}>
            <H_head textAlaing={`center`} margin={``}>Our clients</H_head>
            <div className={Styles.ContentLogo}>
                <span>
                    <img src={logo1} alt=""/>
                </span>
                <span>
                    <img src={logo2} alt=""/>
                </span>
                <span>
                    <img src={logo3} alt=""/>
                </span>
                <span>
                    <img src={logo4} alt=""/>
                </span>
                <span>
                    <img src={logo5} alt=""/>
                </span>
                <span>
                    <img src={logo6} alt=""/>
                </span>
                <span>
                    <img src={logo7} alt=""/>
                </span>
                <span>
                    <img src={logo8} alt=""/>
                </span>
            </div>
        </div>
    );
};

export default OurClients;
