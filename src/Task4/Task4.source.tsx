import React, {useState} from "react";
import {v1} from "uuid";
import s from "../Task5JunPrejunJun+/Task5.module.css";
import {Task4} from "./Task4";

type NameType2 =  {
    name: string,
    id: string
}

export function App4() {
    let [arr, setArr] = useState<Array<NameType2>>([]);
    function addName(name: string) {
        let newName = {id: v1(), name: name };
        let newNames = [newName, ...arr];
        setArr(newNames);
        console.log(arr);
    }
    return(
        <div className={s.App}>
            <Task4 title="ЗАДАНИЕ 4"
                   addName={addName}
                   arrayName={arr}
            />
        </div>
    )
}