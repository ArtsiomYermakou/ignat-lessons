import React from "react";
import {CircularProgress} from "@material-ui/core";
import s from "./Preloader.module.css"

const Preloader = () => {
    return(
        <div>
            <CircularProgress color={"secondary"} className={s.preload}/>
        </div>
    )
}

export default Preloader;
