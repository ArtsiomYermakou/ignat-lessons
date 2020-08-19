import React, {ChangeEvent, useState} from "react";
import EditableSpan from "../common/EditableSpan";
import {Button} from "@material-ui/core";
import Select from "../common/Select";
import {v1} from "uuid";
import Radio from "../common/Radio";

export type OptionValueType = {
    id: string
    title: string
}

export type RadioTypeArr = {
    id: string
    name: string
    value: string
    status: boolean
}

const optionValue = [
    {id: v1(), title: 'HELLO'},
    {id: v1(), title: 'DEAR'},
    {id: v1(), title: 'IGNAT'},
]

function Junior() {

    const [value, setValue] = useState("ИЗМЕНИТЬ ДВОЙНЫМ КЛИКОМ")
    const [editMode, setEditMode] = useState(false);
    const [selected, setSelected] = useState('HELLO')
    const [radio, setRadio] = useState([
            {id: v1(), name: 'radio', value: 'one', status: false},
            {id: v1(), name: 'radio', value: 'two', status: true},
            {id: v1(), name: 'radio', value: 'three', status: false},
            {id: v1(), name: 'radio', value: 'four', status: false},
            {id: v1(), name: 'radio', value: 'five', status: false},
        ]
    )
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
    const changeStatus = (id: string) => {
        const newRadioArray = radio.map(r => {
            if (r.id === id) {
                return {...r, status: true};
            } else {
                return {...r, status: false}
            }
        })
        setRadio(newRadioArray);
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
                              offEditMode={offEditMode}

                />
            </div>
            <Button onClick={setState}
                    variant="contained"
                    color="secondary"
            >SAVE</Button>
            <hr/>
            <div>
                <Select optionValue={optionValue}
                        title={selected}
                        setSelected={setSelected}
                />
                <Radio radioArr={radio} changeStatus={changeStatus}/>
            </div>
        </div>
    )
}

export default Junior;