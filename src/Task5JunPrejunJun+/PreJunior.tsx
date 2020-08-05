import React from "react";
import Task1 from "../Task1/Task1";
import {App2} from "../Task2/Task2";
import {App3} from "../Task3/Task3.source";
import {App4} from "../Task4/Task4.source";

function PreJunior() {

    return (
        <div>
            <h1>PreJunior</h1>
            <Task1/>
            <hr/>
            <div>
                <h3>Task2</h3>
                <div>
                    <App2/>
                </div>
            </div>
            <hr/>
            <div>
                <h3>Task3</h3>
                <App3/>
            </div>
            <hr/>
            <div>
                <h3>Task4</h3>
                <App4/>
            </div>
        </div>
    )
}

export default PreJunior;