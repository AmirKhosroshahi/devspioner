import React, {useEffect, useRef, useCallback} from 'react';
import Styles from './Recent_projects.module.scss';
import H_head from '../H_head/H_head';

const Recent_projects = ({image}) => {
    const transform = useRef(null);
    /*  Lifecycle ===> Mounting */
    useEffect(() => {
        let tagTransform = transform?.current;
        let checkNullCurrent = tagTransform !== null;
        if (checkNullCurrent) {
            window.addEventListener('scroll', () => {
                let positionTag = tagTransform?.getBoundingClientRect();
                let bottomScroll = positionTag.top;
                bottomScroll <= window.pageYOffset ? tagTransform.style = `transform: translate3d(${-bottomScroll + 100}px, 0px, 0px);` : tagTransform.style = 'transform: translate3d(-300, 0px, 0px);';
            });
        }
    }, [])

    const createImage = image?.map((images, index) => {
        return (
            <div className={Styles.Pro} key={`item_${index}`}>
                <img src={`/${images.image}`} alt=""/>
            </div>
        )
    })

    return (
        <div className={Styles.Content}>
            <H_head>Recent Works</H_head>
            <div ref={transform} className={Styles.Recent_projects}>
                {
                    createImage
                }
            </div>
        </div>
    );
};

export default Recent_projects;
