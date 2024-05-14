import React from 'react';
import styles from './header.module.css'

function Header() {
    return (
        <div className={`s-bg-red ${styles.header__wrap}`}>
            <div className={`center h100 ${styles.header__title} bold`}>일본어 하나둘셋</div>
        </div>
    );
}

export default Header;
