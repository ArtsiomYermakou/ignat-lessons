import React from 'react';
// import {FilterValue} from "../App";
// import s from "./MyAffairs.module.css"
//
// export type AffairsType = {
//     id: number
//     name: string
//     priority: string
// }
//
// type PropsType = {
//     title: string
//     affairs: Array<AffairsType>
//     removeAffair: (id:number) => void
//     changeFilter: (value: FilterValue) => void
// }
//
// export function MyAffairs(props: PropsType) {
//     return (
//         <div className={s.back}>
//         <div className={s.main}>
//             <div>
//                 <h3>{props.title}</h3>
//             </div>
//             <ul>
//                 {props.affairs.map((a) => {
//                         return (
//
//                             <li className={s.li} key={a.id}><u>НАЗВАНИЕ:</u> <strong>{a.name}</strong>
//                                 <u className={s.ots}>ПРИОРИТЕТ:</u><strong>{a.priority}</strong>
//                                 <button className={s.btn1} onClick={ () => { props.removeAffair(a.id) }}>х</button>
//                             </li>
//                         )})
//                 }
//             </ul>
//             <div>
//                 <button className={s.btn} onClick={ () => {props.changeFilter("all")} }>all</button>
//                 <button className={s.btn} onClick={ () => {props.changeFilter("low")} }>low</button>
//                 <button className={s.btn} onClick={ () => {props.changeFilter("middle")} }>middle</button>
//                 <button className={s.btn} onClick={ () => {props.changeFilter("hight")} }>hight</button>
//             </div>
//         </div>
//         </div>
//     )
// }