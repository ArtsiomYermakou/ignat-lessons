import {Button} from "@material-ui/core";
import React from "react";

type ButtonCustomType = {
    onClick: () => void
}

export const ButtonCustom = (props:ButtonCustomType) => {
    return <Button
                variant="contained"
                color="primary"
                onClick={props.onClick}

    >

                Добавить
            </Button>
}