import React from 'react';
import Styled from 'styled-components';
import Styles from './SectionOne,module.scss';
import LeftImageHeader from "../LeftImageHeader/LeftImageHeader";

/* Image */
import Image_h from '../../public/image/imageHeader.png';
import html from '../../public/image/html-5.png';
import css from '../../public/image/css-3.png';
import javascript from '../../public/image/java-script.png';
import react_image from '../../public/image/react_image.png';
import bootstrap from '../../public/image/boot.png';
import git from '../../public/image/git.png';
import arrow from '../../public/image/arrow.png';

/* Style Components */
const SectionImageHeader = Styled.div`
    width: 100%;
    height: 670px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 50px;
    background-image:url(${Image_h});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
   
`
const ArrowDown = Styled.i`
    width : 26px;
    height :26px;
    display : flex;
    background-image : url(${arrow});
    background-size: 13pt;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: #ffffff7d;
    margin: 7px 0 0 9px;
    :hover{
    background-color : #ffffffb3;
    }

`

/* Function Component */
const SectionOne = () => {

    return (
        <SectionImageHeader>
            <div className={Styles.textSectionOne}>
                <h5>Programming means love
                    It means creating the effect</h5>
                <div className={Styles.goBottom}>
                    Scroll for more
                    <ArrowDown/>
                </div>
            </div>
            <div className={Styles.leftImage}>
                <LeftImageHeader imageTechnology={html} number={'01'} />
                <LeftImageHeader imageTechnology={css} number={'02'} />
                <LeftImageHeader imageTechnology={javascript} number={'03'} />
                <LeftImageHeader imageTechnology={react_image} number={'04'} />
                <LeftImageHeader imageTechnology={bootstrap} number={'05'} />
                <LeftImageHeader imageTechnology={git} number={'06'} />
            </div>
        </SectionImageHeader>
    );
};

export default SectionOne;
