import React from "react";
import "../Task5/CSS.css"
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'



function Navbar() {
    // className={ styles.isActive ? styles.isActive : styles.link }
    return (
        <div className={styles.container}>
            <div className={styles.div}><NavLink activeClassName={styles.isActive} className={styles.link} to={"/prejunior"} >PreJunior</NavLink></div>
            <div className={styles.div}><NavLink activeClassName={styles.isActive} className={styles.link} to={"/junior"} >Junior</NavLink></div>
            <div className={styles.div}><NavLink activeClassName={styles.isActive} className={styles.link} to={"/juniorplus"} >JuniorPlus</NavLink></div>
        </div>
    )
}


export default Navbar;