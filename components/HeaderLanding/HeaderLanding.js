import React, {useRef} from 'react';
import Styled from 'styled-components';
import Styles from './HeaderLanding.module.scss';
import clsx from "clsx";

const Circle = Styled.i`

    width:  ${props => props.width};
    height: ${props => props.height};
    border-radius: 50%;
    background: ${props => props.background};
    position: absolute;
    ${props => props.dir};
    top: ${props => props.top};
    transition: all 0.4s;
    @media(max-width:900px){
        display:none;    
    } 
 
`

const HeaderLanding = () => {
    const CircleLeft = useRef(null);
    const CircleRight = useRef(null);
    const movCircleHandler = (event) => {
        let xPos = event.clientX;
        let yPos = event.clientY;
        /* Left && Right Mov */
        xPos <= 400 ? CircleLeft.current.style = `right:100px;` : CircleLeft.current.style = `right:54px;`
        xPos <= 400 ? CircleRight.current.style = `left:80px;` : CircleRight.current.style = `left:100px;`
    }
    return (
        <section onMouseMove={movCircleHandler} className={clsx(`${Styles.TextHeaderLanding} ${Styles.sectionText}`)}>
            <Circle ref={CircleRight} width={`60px`} height={`60px`}
                    background={`linear-gradient(156.8deg,#fff 15%,#79b0e8 75.42%)`} dir={`left:100px`} top={`168px`}/>
            <Circle ref={CircleLeft} width={`30px`} height={`30px`}
                    background={`linear-gradient(37.94deg,rgba(16,8,74,0) 16.94%,#83a4ff 87.08%),#02021e;`}
                    dir={`right:100px`} top={`168px`}/>
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
