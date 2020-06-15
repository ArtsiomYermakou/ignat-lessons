import React, {useState} from 'react';
import './App.css';


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
import s from "./Task3/Task3.module.css"


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

// export type FilterValue = "all" | "low" | "middle" | "hight";
//
// function App() {
//     let [affairs, setAffairs] = useState<Array<AffairsType>>([
//         {id: 1, name: "Учёба", priority: "hight"},
//         {id: 2, name: "Работа", priority: "middle"},
//         {id: 3, name: "Спорт", priority: "hight"},
//         {id: 4, name: "Астрономия", priority: "low"},
//         {id: 5, name: "Сериалы", priority: "low"},
//     ]);
//
//     let [filter, setFilter] = useState<FilterValue>("all")
//
//     function removeAffair(id: number) {
//         let filteredAffairs = affairs.filter( a => a.id !== id)
//         setAffairs(filteredAffairs)
//     }
//
//     function changeFilter(value:FilterValue){
//         setFilter(value);
//     }
//
//     let AffairsFor = affairs;
//     if(filter === "low"){
//         AffairsFor = affairs.filter( a => a.priority === "low" );
//     }
//     if(filter === "middle"){
//         AffairsFor = affairs.filter( a => a.priority === "middle" );
//     }
//     if(filter === "hight"){
//         AffairsFor = affairs.filter( a => a.priority === "hight" );
//     }
//
//
//     return (
//         <div>
//             <MyAffairs title="Список приоритетов"
//                        affairs={AffairsFor}
//                        removeAffair={removeAffair}
//                        changeFilter={changeFilter}
//             />
//         </div>
//     )
//
// }

// 3. Задание
type NameType =  {
    name: string,
    id: string
}

function App() {
    let [arr, setArr] = useState<Array<NameType>>([]);
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

export default App;
