import React, {ChangeEvent, useState} from "react";
import EditableSpan from "../common/EditableSpan";
import {Button} from "@material-ui/core";

function Junior() {

    const [value, setValue] = useState("ИЗМЕНИТЬ ДВОЙНЫМ КЛИКОМ")
    const [editMode, setEditMode] = useState(false);

    const changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const offEditMode = () => {
        setEditMode(false);
    }

    const onEditMode = () => {
        setEditMode(true);
    }

    const onKeyPressEnter = (e: any) => {
        if (e.charCode === 13 && value !== "") {
            offEditMode()
        }
    }

    const setState = () => {
        if (value === "") {
            alert("Строка не может быть пустой!");
        } else {
            setValue(value);
            setEditMode(false);
        }
    }

    return (
        <div>
            <h1>Junior</h1>
            <div>
                <h3>Task6</h3>
                <EditableSpan value={value}
                              editMode={editMode}
                              changeValueInput={changeValueInput}
                              onEditMode={onEditMode}
                              onKeyPressEnter={onKeyPressEnter}

                />
            </div>
            <Button onClick={setState}
                    variant="contained"
                    color="secondary"
            >SAVE</Button>
            <hr/>
        </div>

    )
}

export default Junior;