import React from 'react';

import Styles from './H_head.module.scss';
const H_head = ({children}) => {
    return (
        <h3 className={Styles.title}  >{children}</h3>
    );
};

export default H_head;
