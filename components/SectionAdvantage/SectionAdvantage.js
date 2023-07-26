import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link'
import Styles from './SectionAdvantage.module.scss';
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import proj1 from '../../public/image/proj1.png';
import proj2 from '../../public/image/proj2.png';
import proj3 from '../../public/image/proj3.png';
import proj4 from '../../public/image/proj4.png';
import proj5 from '../../public/image/proj5.png';
import proj6 from '../../public/image/proj6.png';
import H_head from '../H_head/H_head';

import {workImage} from "../../static/language";

const SectionAdvantage = () => {
    const [dataWork,setDataWork] = useState([]);
    const linkText = useRef(null);
    useEffect(()=>{
        setDataWork(workImage)
    },[])
    return (
        <div className={Styles.SectionAdvantage}>
            <H_head margin={'60px 0 64px 0'}>{dataWork[0]}</H_head>

            <Swiper
                slidesPerView ={4}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1120: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
             
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: true,
                }}
               
                className={Styles.mySwiper}
            >
                <SwiperSlide className={Styles.posSlid}>
                    <Image
                        className={Styles.imageSlider}
                        src={proj1}
                        alt=""
                        width={500}
                        height={500}
                    />
                    <Link href='/#' ref={linkText}>
                        <a>
                            <h3>FxSound</h3>
                            <p>
                                A groundbreaking software that brings your computer’s audio quality to a new level.
                            </p>
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={Styles.posSlid}>
                    <Image
                        className={Styles.imageSlider}
                        src={proj2}
                        alt=""
                        width={500}
                        height={500}
                    />
                    <Link href='/' ref={linkText}>
                        <a>
                            <h3>FxSound</h3>
                            <p>
                                A groundbreaking software that brings your computer’s audio quality to a new level.
                            </p>
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={Styles.posSlid}>
                    <Image
                        className={Styles.imageSlider}
                        src={proj3}
                        alt=""
                        width={500}
                        height={500}
                    />
                    <Link href='/' ref={linkText}>
                        <a>
                            <h3>FxSound</h3>
                            <p>
                                A groundbreaking software that brings your computer’s audio quality to a new level.
                            </p>
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={Styles.posSlid}>
                    <Image
                           className={Styles.imageSlider}
                           src={proj4}
                           alt=""
                           width={500}
                           height={500}/>
                    <Link href='/' ref={linkText}>
                        <a>
                            <h3>FxSound</h3>
                            <p>
                                A groundbreaking software that brings your computer’s audio quality to a new level.
                            </p>
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={Styles.posSlid}>
                    <Image
                        className={Styles.imageSlider}
                        src={proj5}
                        alt=""
                        width={500}
                        height={500}/>
                    <Link href='/' ref={linkText}>
                        <a>
                            <h3>FxSound</h3>
                            <p>
                                A groundbreaking software that brings your computer’s audio quality to a new level.
                            </p>
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={Styles.posSlid}>
                    <Image className={Styles.imageSlider} src={proj6}
                           width={500}
                           height={500}
                           alt=""/>
                    <Link href='/' ref={linkText}>
                        <a>
                            <h3>FxSound</h3>
                            <p>
                                A groundbreaking software that brings your computer’s audio quality to a new level.
                            </p>
                        </a>
                    </Link>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default SectionAdvantage;
