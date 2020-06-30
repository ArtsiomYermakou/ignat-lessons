import {TextField} from "@material-ui/core";
import React from "react";


export const InputCustom = ({...props}) => {
    return (
        <div>
            <TextField id="outlined-basic" label="Ваше имя?" variant="outlined" onKeyPress={props.onKeyPressEnter}/>
        </div>
    )



}

