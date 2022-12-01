import React, {useState} from "react";
import { FormEvent } from "react";
import styles from "./module.css";

export default function CreateTheme() {

    const isValid = (): boolean => {
        let result = true;


    }
    return <>
        <h3>Создать тему</h3>
        <div>
            <h1>Тема</h1>
            <input type={"text"}/>
        </div>
        <div>
            <h1>Первое сообщение</h1>
            <input type={"text"}/>
        </div>
        <div>
            <button type={"submit"}>Отмена</button>
            <button type={"submit"}>Создать</button>
        </div>

    </>;
}