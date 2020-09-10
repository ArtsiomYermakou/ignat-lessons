import React from "react";
import {Button} from "@material-ui/core";
import s from "./Loader.module.css"

type LoaderPropsType = {
    startLoadingClickHandler: () => void
}

const Loader = (props: LoaderPropsType) => {
    return (
        <div className={s.btn}>
            <Button
                size={"large"}
                variant={"contained"}
                color={"primary"}
                onClick={props.startLoadingClickHandler}>Load</Button>
        </div>
    )
}

export default Loader;