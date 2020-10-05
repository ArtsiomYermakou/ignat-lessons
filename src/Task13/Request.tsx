import React, {ChangeEvent, useState} from "react";
import {Button, Checkbox} from "@material-ui/core";
import {RequestAPI} from "./RequestAPI";

const Request = () => {

    const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)
    const [valueDone, setValueDone] = useState("")
    const [valueError, setValueError] = useState("")

    const checkBoxChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setValueCheckbox(e.currentTarget.checked)
    }

    const sendRequest = () => {
        RequestAPI.requestPost(valueCheckbox)
            .then((res) => {
                setValueError("")
                setValueDone(res.statusText)

            })
            .catch((error) => {
                setValueDone("")
                setValueError(error.response.data.errorText)
            })
    }

    return (
        <div>
            <div>
                <Checkbox checked={valueCheckbox} onChange={checkBoxChanged} color="primary"/>
            </div>
            <div>
                <Button onClick={sendRequest} color={"primary"} variant={"contained"}>Request</Button>
            </div>
            <div>
                <span>{valueDone}</span>
                <span>{valueError}</span>
            </div>
        </div>
    )
}

export default Request;