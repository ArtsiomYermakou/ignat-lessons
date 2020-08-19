import React, {ChangeEvent, KeyboardEvent} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    editMode: boolean
    value: string
    changeValueInput: (e: ChangeEvent<HTMLInputElement>) => void
    onEditMode: () => void
    onKeyPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    offEditMode: () => void
}


const EditableSpan = (props: EditableSpanType) => {

    return (
        props.editMode ? <TextField
                value={props.value}
                onChange={props.changeValueInput}
                onKeyPress={props.onKeyPressEnter}
                variant="standard"
                color="secondary"
                label={"Введите значение"}
                autoFocus={true}
                onBlur={props.offEditMode}
            />
            : <span onDoubleClick={props.onEditMode}>{props.value}</span>
    )
}

export default EditableSpan;