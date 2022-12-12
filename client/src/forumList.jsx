import React, {useState} from "react";
import { FormEvent } from "react";
import styles from "./module.css";
import {Link, Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Registration from "./Registration";
import CreateTheme from "./CreateTheme";

export default function ForumList() {
    const navigate = useNavigate();
    const isValid = (): boolean => {
        let result = true;


    }

    return <>
       <h3>Форум</h3>
        <div>
            <input type={"text"} placeholder={'Искать...'}/>
            <button type={"submit"}>🔎</button>
        </div>
        <nav>
            <button onClick={() => navigate("/CreateTheme")}>Добавить</button>
        </nav>

    </>;
}