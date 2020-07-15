import React from 'react';
import {FilterValue} from "../App";
import s from "./MyAffairs.module.css"
import {Button, ButtonGroup} from "@material-ui/core";
import {ButtonCustom} from "../common/ButtonCustom";

export type AffairsType = {
    id: number
    name: string
    priority: string
}

type PropsType = {
    title: string
    affairs: Array<AffairsType>
    removeAffair: (id: number) => void
    changeFilter: (value: FilterValue) => void
}


function MyAffairs(props: PropsType) {
    return (
        <div className={s.back}>
            <div className={s.main}>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <ul>
                    {props.affairs.map((a) => {
                        return (

                            <div className={s.li} key={a.id}><u>НАЗВАНИЕ:</u> <strong>{a.name}</strong>
                                <u className={s.ots}>ПРИОРИТЕТ:</u><strong>{a.priority}</strong>
                                <Button className={s.btn1} onClick={() => {props.removeAffair(a.id)}} variant={"contained"} color={"secondary"} size={"small"}>х
                                </Button>
                            </div>
                        )
                    })
                    }
                </ul>
                <div>
                    <ButtonGroup>
                        <Button className={s.btn} onClick={() => {props.changeFilter("all")}} color={"primary"} variant={"contained"}>all</Button>
                        <Button className={s.btn} onClick={() => {props.changeFilter("low")}} color={"primary"} variant={"contained"}>low</Button>
                        <Button className={s.btn} onClick={() => {props.changeFilter("middle")}} color={"primary"} variant={"contained"}>middle</Button>
                        <Button className={s.btn} onClick={() => {props.changeFilter("hight")}} color={"primary"} variant={"contained"}>hight</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default MyAffairs;