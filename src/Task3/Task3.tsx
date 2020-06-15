import React, {useState} from "react";

type PropsType = {
    title: string
    addName: (name: string) => void
    arrayName: Array<any>
}
export function Task3(props: PropsType) {
    const [name, setName] = useState("");
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                Привет, введи своё имя: <br/>
                <input value={name}
                       placeholder="Имя"
                       onChange={(e) => {
                           setName(e.currentTarget.value)
                       }}
                       onKeyPress={(e) => {
                           if (e.charCode === 13 && name.trim() !== "") {
                               props.addName(name)
                               alert("Привет, " + name + " !")
                               setName("");
                           }
                       }}/>
                <button onClick={() => {
                    if (name.trim() !== "") {
                        props.addName(name)
                        alert("Привет, " + name + " !")
                        setName("");
                    }
                }}>Добавить</button>
                <br/>
                <span>
                    Количество имён в массиве: {props.arrayName.length}
                </span>
            </div>
        </div>
    )
}
