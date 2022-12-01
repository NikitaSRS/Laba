import React, {useState} from "react";
import { FormEvent } from "react";
import styles from "./module.css";
import {Route} from "react-router-dom";

export default function ForumList() {

    const isValid = (): boolean => {
        let result = true;


    }
    return <>
       <h3>Форум</h3>
        <div>
            <input type={"text"} placeholder={'Искать...'}/>
            <button type={"submit"}>🔎</button>
        </div>
        <button type={"submit"} onClick={<Route path="/CreateTheme" element={<ForumList />} />}>Добавить тему</button>

    </>;
}