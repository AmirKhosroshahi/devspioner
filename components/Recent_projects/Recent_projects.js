import React, {useEffect, useRef} from 'react';
import Styles from './Recent_projects.module.scss';
import H_head from '../H_head/H_head';
import clsx from "clsx";
import {transformEffect} from '../../functionControlle/allFunction'
import Image from "next/image";
const Recent_projects = ({image}) => {
   
    const transform = useRef(null);
    /*  Lifecycle ===> Mounting */
    useEffect(() => {

        transformEffect(transform)

    }, [])

    const createImage = image?.map((images, index) => {
        return (
            <div className={Styles['content__recent-projects__Pro']} key={`item_${index}`}>
                <Image src={`/image/image_info/${images.image}`}
                       alt=""
                       width={500}
                       height={500}
                />
            </div>
        )
    })

    return (
        <div className={Styles['content']}>
            <H_head>Recent Works</H_head>
            <div ref={transform} className={clsx(Styles['content__recent-projects'], 'trans')}>
                {
                    createImage
                }
            </div>
        </div>
    );
};

export default Recent_projects;
