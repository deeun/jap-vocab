"use client"

import React, { FunctionComponent } from 'react';
import styles from './dropdown.module.css'

type Props = {
    options: [{title: '', value: ''}];
}

const Dropdown: FunctionComponent<Props> = ({options}) => {
    return (
        <div className={styles.dropdown__wrap}>
            { options.map((option) => 
            // {return (
             <div>{ option.title }</div>
            )}
            {/* )} */}
        </div>
    );
}

export default Dropdown;
