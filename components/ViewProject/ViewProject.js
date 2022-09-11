import React, {useEffect} from 'react';
import Styles from './ViewProject.module.scss';

import figma from '../../public/image/figma.svg';
import reactJs from '../../public/image/reactJs.svg';
import nodeJs from '../../public/image/nodeJs.svg';
import Image from "next/image";
import Link from "next/link";


const ViewProject = ({id, title, link, image, technology}) => {

    const odd = (number) => {
        let style = ''
        for (let i = 0; i <= number; i++) {
            i % 2 === 0 ? style = 'row' :  style = 'row-reverse'
        }
        return style;
    }

    return (
        <div className={Styles.main}>
            <section className={Styles.contactView}>
                <div style={{flexDirection: odd(id), display: "flex"}} className={Styles.All_box}>
                    <div className={Styles.image}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={Styles.TextProject}>
                        {title}
                        <Link href={`${link}`}>
                            <a className={Styles.linkViewProject} target='_blank'>
                                view project
                            </a>
                        </Link>
                        <div className={Styles.Technology}>
                            <span>
                                <Image src={figma} alt=""/>
                                Figma
                            </span>
                            <span>
                                <Image src={reactJs} alt=""/>
                                ReactJs
                            </span>
                            <span>
                                <Image src={nodeJs} alt=""/>
                                NodeJS
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewProject;
