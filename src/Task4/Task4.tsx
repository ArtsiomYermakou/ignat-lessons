import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Task4.module.css"
import {CheckboxCustom} from "../common/Checkbox";
import {Button, TextField} from "@material-ui/core";
import {InputCustom} from "../common/InputCustom";
import {ButtonCustom} from "../common/ButtonCustom";


type PropsType = {
    title: string
    addName: (name: string) => void
    arrayName: Array<any>
}

export function Task4(props: PropsType) {
    const [name, setName] = useState("");


    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13 && name.trim() !== "") {
            props.addName(name)
            alert("Привет, " + name + " !")
            setName("");
        }
    }
    const onClickForButton = () => {
        if (name.trim() !== "") {
            props.addName(name)
            alert("Привет, " + name + " !")
            setName("");
        }
    }
    const setNameEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }



    return (
        <div>
            <div>
                <h3 className={s.title}>{props.title}</h3>
            </div>
            <div>
                Привет, введи своё имя: <br/>

                <InputCustom value={name}
                       onChange={setNameEvent}
                       onKeyPress={onKeyPressEnter}/>

                <ButtonCustom onClick={onClickForButton} title={"Добавить"}/>
                <br/>
                <span>
                    Количество имён в массиве: <span className={s.numb}>{props.arrayName.length}</span>
                </span>
                <br/>
                <CheckboxCustom/>
            </div>
        </div>
    )
}
