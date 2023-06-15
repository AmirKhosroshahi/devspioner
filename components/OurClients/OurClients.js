import React from 'react';
import Styles from './OurClients.module.scss';
import Image from "next/image";
import H_head from '../H_head/H_head';
const OurClients = ({ourClients}) => {
    const iconOurClient = ourClients?.map(item => {
        return (
            <span key={item.id}>
                <Image src={item.image}
                       alt={item.title}
                       width={500}
                       height={500}/>
            </span>
        )
    })
    return (
        <div className={Styles.OurClient}>
            <H_head textAlaing={`center`} margin={``}>Our clients</H_head>
            <div className={Styles.ContentLogo}>
                {iconOurClient}
            </div>
        </div>
    );
};

export default OurClients;
