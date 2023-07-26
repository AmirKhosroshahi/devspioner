import React, {useEffect, useRef, useState} from 'react';
import Styles from './Recent_projects.module.scss';
import H_head from '../H_head/H_head';
import clsx from "clsx";
import {transformEffect} from '../../functionControlle/allFunction'
import Image from "next/image";
import {workImage} from "../../static/language";

const Recent_projects = ({image}) => {
   
    const transform = useRef(null);
    const [dataWork,setDataWork] = useState([]);
    
    useEffect(() => {

        transformEffect(transform)

    }, [])
   useEffect(()=>{
       setDataWork(workImage)
   },[])
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
            <H_head>{dataWork[0]}</H_head>
            <div ref={transform} className={clsx(Styles['content__recent-projects'], 'trans')}>
                {
                    createImage
                }
            </div>
        </div>
    );
};

export default Recent_projects;
