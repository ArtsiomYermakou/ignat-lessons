import React from "react";
import {Checkbox} from "@material-ui/core";

export const CheckboxCustom = (props:any) => {
    return (
        <div>
            <Checkbox
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    )
}