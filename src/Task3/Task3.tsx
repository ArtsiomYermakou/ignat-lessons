import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type PropsType = {
    title: string
    addName: (name: string) => void
    arrayName: Array<any>
}

export function Task3(props: PropsType) {
    const [name, setName] = useState("");


    const onKeyPressEnter = (e:KeyboardEvent<HTMLInputElement>) => {
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
    const setNameEvent = (e:ChangeEvent<HTMLInputElement>) => {setName(e.currentTarget.value)}

    return (
        <div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                Привет, введи своё имя: <br/>
                <input value={name}
                       placeholder="Имя"
                       onChange={setNameEvent}
                       onKeyPress={onKeyPressEnter}/>

                <button onClick={onClickForButton}>Добавить</button>
                <br/>
                <span>
                    Количество имён в массиве: {props.arrayName.length}
                </span>
            </div>
        </div>
    )
}
