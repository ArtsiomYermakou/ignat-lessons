import {Button} from "@material-ui/core";
import React from "react";

type ButtonCustomType = {
    onClick?: () => void
    title?: string
    className?: string
}

export const ButtonCustom = (props:ButtonCustomType) => {
    return <Button
                variant="contained"
                color="primary"
                onClick={props.onClick}>{props.title}</Button>
}