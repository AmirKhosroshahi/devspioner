import React, {useEffect} from 'react';
import Styles from './ViewProject.module.scss';
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {odd, effectScrollProject} from '../../functionControlle/allFunction';

const ViewProject = ({id, title, link, image, technology}) => {
    useEffect(() => {
        effectScrollProject();
    })
    const technologyAttr = technology?.map((item) => {
        {
            return (
                <span key={`item_${item.id}`}>
                        <Image
                            width={32}
                            height={32}
                            src={item?.image}
                            alt={item?.label}/>
                    {item?.label}
                    </span>
            )
        }
    })

    return (
        <div className={clsx(Styles['main'])}>
            <section className={clsx(Styles['main__contact-view'])}>
                <div
                    className={clsx(Styles['main__contact-view__all-box'], odd(id) === 'row' ? Styles['main__contact-view__row'] : Styles['main__contact-view__column'])}>
                    <div className={clsx(Styles['main__contact-view__all-box__image'])}>
                        <Image
                            src={image}
                            alt=""
                            width={500}
                            height={500}
                            data-image={image}
                        />
                    </div>
                    <div className={Styles['main__contact-view__all-box__text-project']}>
                        {title}
                        <Link href={`${link}`}>
                            <a className={Styles['main__contact-view__all-box__link-view']} target='_blank'>
                                view project
                            </a>
                        </Link>
                        <div className={Styles['main__contact-view__all-box__technology']}>
                            {technologyAttr}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewProject;
