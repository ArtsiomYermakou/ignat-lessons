import a from "../components/Ava/ava.module.css";
import Ava from "../components/Ava/Ava";
import n from "../components/Name/name.module.css";
import Name from "../components/Name/Name";
import m from "../components/Message/message.module.css";
import Message from "../components/Message/Message";
import t from "../components/Time/time.module.css";
import Time from "../components/Time/Time";
import React from "react";

const Task1 = () => {
    return (
        <div>
            <h3>Task1</h3>
            <div className="app-wrapper">
                <div className={a.ava}>
                    <Ava/>
                </div>
                <div className={n.name}>
                    <Name name="Артём"/>
                </div>
                <div className={m.message}>
                    <Message sms="Привет, не бей палками за говнокод :)"/>
                </div>
                <div className={t.time}>
                    <Time time="Только что"/>
                </div>
            </div>
        </div>
    )
}

export default Task1;