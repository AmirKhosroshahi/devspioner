import React from 'react';
import Styled from 'styled-components';

const BoxContentImage = Styled.div`
    width: 167px;
    height: 167px;
    background-color: #09090959;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TopLeft = Styled.i`
    position: absolute;
    top: 0;
    right: 0;
    width: 46px;
    height: 46px;
    border-top: 2px solid #1d1e1f;
    border-right: 2px solid #1d1e1f;
`

const TopRight = Styled.i`
    position: absolute;
    top: 0;
    left: 0;
    width: 46px;
    height: 46px;
    border-top: 2px solid #1d1e1f;
    border-left: 2px solid #1d1e1f;
`

const BottomLeft = Styled.i`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 46px;
    height: 46px;
    border-bottom: 2px solid #1d1e1f;
    border-left: 2px solid #1d1e1f;
`

const BottomRight = Styled.i`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 46px;
    height: 46px;
    border-bottom: 2px solid #1d1e1f;
    border-right: 2px solid #1d1e1f;
`
const ImageTechnology = Styled.i`
        width: 83px;
        height: 83px;
        background-image : url(${props=>props.imageTechnology});
        display: flex;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 58pt;
        z-index : 1;

`

const LeftImageHeader = ({imageTechnology, number}) => {


    const StyleNumber = {
        position: 'absolute',
        bottom: '23px',
        right: '13px',
        fontSize: '53pt',
        zIndex: 0,
        color: '#202022',
    }

    return (
        <>
            <BoxContentImage>
                <TopLeft/>
                <TopRight/>
                <BottomLeft/>
                <BottomRight/>
                <ImageTechnology imageTechnology={imageTechnology}/>
                <h6 style={StyleNumber}>{number}</h6>
            </BoxContentImage>
        </>
    );
};

export default LeftImageHeader;
