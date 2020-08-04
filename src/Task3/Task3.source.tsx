import React, {useState} from "react";
import {v1} from "uuid";
import s from "../Task5JunPrejunJun+/Task5.module.css";
import {Task3} from "./Task3";

type NameType1 =  {
    name: string,
    id: string
}

export function App3() {
    let [arr, setArr] = useState<Array<NameType1>>([]);
    function addName(name: string) {
        let newName = {id: v1(), name: name };
        let newNames = [newName, ...arr];
        setArr(newNames);
        console.log(arr);
    }
    return(
        <div className={s.App}>
            <Task3 title="ЗАДАНИЕ 3"
                   addName={addName}
                   arrayName={arr}

            />
        </div>
    )
}