import React, {useState} from "react";
import {Button} from "@material-ui/core";
import moment from "moment";
import s from "./Time.module.css"

const Timer = () => {

    const [timerId, setTimerId] = useState(0);
    const [date, setDate] = useState("HH:mm:ss");

    const fullDate = moment().format("LLLL")

    const startDateOnClick = () => {
        const idInterval: any = setInterval(() => {
            const newDateAdd = moment().format("HH:mm:ss")
            setDate(newDateAdd);
        }, 1000)
        setTimerId(idInterval);
    }
    const showTimer = () => {
        clearInterval(timerId);
        const timer_id: any = setInterval(() => setDate(moment().format("HH:mm:ss")), 1000);
        setTimerId(timer_id);
    }

    const stopUpdate = () => {
        clearInterval(timerId)
    }

    return (
        <div>
            <div>
                <div className={s.fullDate}>{fullDate}</div>
                <b><div className={s.date}>{date}</div></b>
            </div>
            <div className={s.intervalId}> Interval ID: <b>{timerId}</b> </div>
            <Button color={"primary"} variant={"outlined"} onClick={startDateOnClick} size={"small"}>Start Timer</Button>
            <Button color={"secondary"} variant={"outlined"} onClick={showTimer} size={"medium"}>Show Timer</Button>
            <Button color={"primary"} variant={"outlined"} onClick={stopUpdate} size={"small"}>Stop Update</Button>
        </div>
    )
}

export default Timer;