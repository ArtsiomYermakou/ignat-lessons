import React, {useState} from "react";
import MyAffairs, {AffairsType} from "./MyAffairs";

export type FilterValue = "all" | "low" | "middle" | "hight";

export function App2() {
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