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

    /* const [editMode, setEditMode] = useState(false);
     const [value, setValue] = useState("ИЗМЕНИТЬ ДВОЙНЫМ КЛИКОМ")*/

    /*  const changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.currentTarget.value)
      }

      const offEditMode = () => {
          setEditMode(false);
      }

      const onEditMode = () => {
          setEditMode(true);
      }*/

    /*const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            offEditMode()
        }
    }*/

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