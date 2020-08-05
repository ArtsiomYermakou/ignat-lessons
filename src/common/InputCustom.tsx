import {TextField} from "@material-ui/core";
import React, {ChangeEvent, KeyboardEvent} from "react";

type InputCustomType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const InputCustom = (props: InputCustomType) => {
    return <TextField id="outlined-basic"
                      label="Ваше имя?"
                      variant="outlined"
                      value={props.value}
                      onChange={props.onChange}
                      onKeyPress={props.onKeyPress}
    />
}