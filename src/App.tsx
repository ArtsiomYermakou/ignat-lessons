import React, {useState} from 'react';
import './App.css';
import "./Task5/CSS.css"

// 1 ЗАДАНИЕ ИМПОРТЫ
// import Ava from "./components/Ava/Ava";
// import Name from "./components/Name/Name";
// import Message from "./components/Message/Message";
// import Time from "./components/Time/Time";
// import a from "./components/Ava/ava.module.css";
// import m from "./components/Message/message.module.css";
// import n from "./components/Name/name.module.css";
// import t from "./components/Time/time.module.css";

// 2 ЗАДАНИЕ ИМПОРТЫ
// import {AffairsType, MyAffairs} from "./MyAffairs/MyAffairs";

//  3 ЗАДАНИЕ ИМПОРТЫ
import {Task3} from "./Task3/Task3";
import {v1} from "uuid";
import se from "./Task3/Task3.module.css"


//  4 ЗАДАНИЕ ИМПОРТЫ
// import {Task4} from "./Task4/Task4";
// import {v1} from "uuid";
// import s from "./Task3/Task3.module.css"


//  5 ЗАДАНИЕ ИМПОРТЫ
import s from "../src/Task5/Task5.module.css"
import PreJunior from "./Task5/PreJunior";
import Junior from "./Task5/Junior";
import JuniorPlus from "./Task5/JuniorPlus";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./Task5/Navbar";
import MyAffairs, {AffairsType} from "./MyAffairs/MyAffairs";
import {Task4} from "./Task4/Task4";


// 1 задание

// function App(props: any) {
//     return (
//             <div className="app-wrapper">
//                 <div className={a.ava}>
//                     <Ava />
//                 </div>
//                 <div className={n.name}>
//                     <Name name="Артём" />
//                 </div>
//                 <div className={m.message}>
//                     <Message sms="Привет, не бей палками за говнокод :)" />
//                 </div>
//                 <div className={t.time}>
//                     <Time time="Только что" />
//                 </div>
//             </div>
//     );
// }

// 2. Задание

export type FilterValue = "all" | "low" | "middle" | "hight";

 export function App1() {
    let [affairs, setAffairs] = useState<Array<AffairsType>>([
        {id: 1, name: "Учёба", priority: "hight"},
        {id: 2, name: "Работа", priority: "middle"},
        {id: 3, name: "Спорт", priority: "hight"},
        {id: 4, name: "Астрономия", priority: "low"},
        {id: 5, name: "Сериалы", priority: "low"},
    ]);

    let [filter, setFilter] = useState<FilterValue>("all")

     function removeAffair(id: number) {
        let filteredAffairs = affairs.filter( a => a.id !== id)
        setAffairs(filteredAffairs)
    }

    function changeFilter(value:FilterValue){
        setFilter(value);
    }

    let AffairsFor = affairs;
    if(filter === "low"){
        AffairsFor = affairs.filter( a => a.priority === "low" );
    }
    if(filter === "middle"){
        AffairsFor = affairs.filter( a => a.priority === "middle" );
    }
    if(filter === "hight"){
        AffairsFor = affairs.filter( a => a.priority === "hight" );
    }


    return (
        <div>
            <MyAffairs title="Список приоритетов"
                       affairs={AffairsFor}
                       removeAffair={removeAffair}
                       changeFilter={changeFilter}
            />
        </div>
    )

}

// 3. Задание

type NameType1 =  {
    name: string,
    id: string
}

export function App2() {
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


// 4. Задание

type NameType2 =  {
    name: string,
    id: string
}

export function App3() {
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











// 5. Задание


function App() {

    const [isHidden, setIsHidden] = useState(false)

    const toggle = ()=> {
        setIsHidden(!isHidden)
    }

    return (
        <HashRouter>
            <div className={s.App}>
                <input type="checkbox" id="hmt" className="hidden-menu-ticker" onClick={toggle}/>
                <label className="btn-menu" htmlFor="hmt">
                    <span className="first"/>
                    <span className="second"/>
                    <span className="third"/>
                </label>
                { isHidden && <Navbar/> }
                <div>
                    <Route path="/prejunior" component={PreJunior}/>
                    <Route path="/junior" component={Junior}/>
                    <Route path="/juniorplus" component={JuniorPlus}/>
                </div>
            </div>
        </HashRouter>
    )
}


export default App;
