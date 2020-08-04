import React, {useState} from 'react';
import './App.css';
import "./Task5JunPrejunJun+/CSS.css"
import s from "./Task5JunPrejunJun+/Task5.module.css"
import PreJunior from "./Task5JunPrejunJun+/PreJunior";
import Junior from "./Task5JunPrejunJun+/Junior";
import JuniorPlus from "./Task5JunPrejunJun+/JuniorPlus";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./Task5JunPrejunJun+/Navbar";

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
