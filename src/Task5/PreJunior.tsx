import React from "react";
import Ava from "../components/Ava/Ava";
import Name from "../components/Name/Name";
import Message from "../components/Message/Message";
import Time from "../components/Time/Time";
import a from "../components/Ava/ava.module.css"
import n from "../components/Name/name.module.css"
import m from "../components/Message/message.module.css"
import t from "../components/Time/time.module.css"

import {App1, App2, App3} from "../App";

function PreJunior() {
    return (
        <div>
            <h1>PreJunior</h1>
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
            <hr/>
            <div>
                <h3>Task2</h3>
                <div>
                    <App1 />
                </div>
            </div>
            <hr/>
            <div>
                <h3>Task3</h3>
                <App2/>
            </div>
            <hr/>
            <div>
                <h3>Task4</h3>
                <App3/>
            </div>
        </div>
    )
}

export default PreJunior;