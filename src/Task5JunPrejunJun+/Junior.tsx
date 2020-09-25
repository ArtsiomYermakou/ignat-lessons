import React, {ChangeEvent, useState} from "react";
import EditableSpan from "../common/EditableSpan";
import {Button} from "@material-ui/core";
import {v1} from "uuid";
import Radio from "../common/Radio";
import SelectI from "../common/Select";
import {filter18YearsAC, hwReducer, sortDownAc, sortUpAc, StateTypeReducer} from "../state/homeWorkReducer";
import Timer from "../Task9/Time";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {setLoadingAC, StateType} from "../state/loadingReducer";
import Preloader from "../common/Preloader";
import Loader from "../Task10/Loader";
import Range from "../common/Range";

export type OptionValueType = {
    id: string
    title: string
}

export type RadioTypeArr = {
    id: string
    name: string
    value: string
    status: boolean
}

const optionValue = [
    {id: v1(), title: 'HELLO'},
    {id: v1(), title: 'DEAR'},
    {id: v1(), title: 'IGNAT'},
]

function Junior() {

    const [value, setValue] = useState("ИЗМЕНИТЬ ДВОЙНЫМ КЛИКОМ")
    const [editMode, setEditMode] = useState(false);
    const [selected, setSelected] = useState('HELLO')
    const [radio, setRadio] = useState([
        {id: v1(), name: 'radio', value: 'one', status: false},
        {id: v1(), name: 'radio', value: 'two', status: true},
        {id: v1(), name: 'radio', value: 'three', status: false},
        {id: v1(), name: 'radio', value: 'four', status: false},
        {id: v1(), name: 'radio', value: 'five', status: false},
    ])
    const [people, setPeople] = useState<Array<StateTypeReducer>>([
            {id: 1, name: "Artem", age: 21},
            {id: 2, name: "Ksusha", age: 20},
            {id: 3, name: "Misha", age: 4},
            {id: 4, name: "Sasha", age: 74},
            {id: 5, name: "Igor", age: 16},
        ]
    )

    const changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const offEditMode = () => {
        setEditMode(false);
    }
    const onEditMode = () => {
        setEditMode(true);
    }
    const onKeyPressEnter = (e: any) => {
        if (e.charCode === 13 && value !== "") {
            offEditMode()
        }
    }
    const setState = () => {
        if (value === "") {
            alert("Строка не может быть пустой!");
        } else {
            setValue(value);
            setEditMode(false);
        }
    }
    const changeStatus = (id: string) => {
        const newRadioArray = radio.map(r => {
            if (r.id === id) {
                return {...r, status: true};
            } else {
                return {...r, status: false}
            }
        })
        setRadio(newRadioArray);
    }

    const SortUp = () => {
        setPeople(hwReducer(people, sortUpAc("up")))
    }
    const SortDown = () => {
        setPeople(hwReducer(people, sortDownAc("down")))
    }
    const Sort18YearsOld = () => {
        setPeople(hwReducer(people, filter18YearsAC(18)))
    }

    const load = useSelector<RootStateType, StateType>(state => state.juniorPage);
    const dispatch = useDispatch();
    const startLoadingClickHandler = () => {
        dispatch(setLoadingAC(true));
        setTimeout(dispatch, 3000, setLoadingAC(false));
    }

    return (
        <div>
            {load.loading ? <Preloader/> :
                <div>
                    <h1>Junior</h1>
                    <div>
                        <h3>Task6</h3>
                        <EditableSpan value={value}
                                      editMode={editMode}
                                      changeValueInput={changeValueInput}
                                      onEditMode={onEditMode}
                                      onKeyPressEnter={onKeyPressEnter}
                                      offEditMode={offEditMode}

                        />
                    </div>
                    <Button onClick={setState}
                            variant="contained"
                            color="secondary"
                    >SAVE</Button>
                    <hr/>
                    <div>
                        <h3>Task 7</h3>
                        <SelectI optionValue={optionValue}
                                 title={selected}
                                 setSelected={setSelected}
                        />
                        <Radio radioArr={radio} changeStatus={changeStatus}/>
                    </div>
                    <hr/>
                    <div>
                        <h3>task 8</h3>
                        {people.map(p =>
                            <p key={p.id}>{p.name} : {p.age}</p>
                        )}
                        <Button color={"primary"}
                                variant={"contained"}
                                onClick={SortUp}>Sort Up</Button>

                        <Button color={"secondary"}
                                variant={"contained"}
                                onClick={SortDown}>Sort Down</Button>

                        <Button variant={"outlined"}
                                onClick={Sort18YearsOld}>Sort 18</Button>
                    </div>
                    <hr/>
                    <div>
                        <h3>Task 9</h3>
                        <Timer/>
                    </div>
                    <hr/>
                    <div>
                        <h3>Task 10</h3>
                        <Loader startLoadingClickHandler={startLoadingClickHandler}/>
                    </div>
                    <hr/>
                    <div>
                        <h3>Task 11</h3>
                        <Range minValue={0} maxValue={100} step={1}/>
                    </div>

                </div>
            }
        </div>
    )
}

export default Junior;