import React, {useRef, useState} from 'react';
import Styled from 'styled-components';
import Styles from './SectionDevelopment.module.scss';


/* Head H3 */

import H_head from '../H_head/H_head';

const MyDiv = Styled.div`
     display:flex;
     height : 500px;
     margin: 96px 0 42px 0;
     background-image : url(${props=> props.background && props.background});
     background-position: ${props=>props.positionImageRed ? props.positionImageRed : 'left bottom' };
     background-size:  ${props=>props.sizeImage ? props.sizeImage : '130pt' };
     background-repeat: no-repeat;
     justify-content: space-evenly;
     align-items: center;
`

const Content = Styled.div`
     width: 80%;
     display: flex;
     flex-direction : ${props=> props && props.dir};

`


const SectionDevelopment = ({Images,directionFlex,backgroundImage,backgroundPosition,backgroundSize,titleText,description}) => {

    return (
        <MyDiv background={backgroundImage} positionImageRed={backgroundPosition} sizeImage={backgroundSize} >
            <Content dir={directionFlex}>
                <div className={Styles.dev_image}>
                    <img src={Images} alt=""/>
                </div>
                <div className={Styles.textDeve}>
                    <H_head margin={``}>{titleText}</H_head>
                    <p>
                        {description}
                    </p>
                </div>
            </Content>
        </MyDiv>
    );
};

export default SectionDevelopment;
