import React from "react";
import ".//CSS.css"
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'



function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.div}><NavLink activeClassName={styles.isActive} className={styles.link} to={"/prejunior"} >PreJunior</NavLink></div>
            <div className={styles.div}><NavLink activeClassName={styles.isActive} className={styles.link} to={"/junior"} >Junior</NavLink></div>
            <div className={styles.div}><NavLink activeClassName={styles.isActive} className={styles.link} to={"/juniorplus"} >JuniorPlus</NavLink></div>
        </div>
    )
}


export default Navbar;