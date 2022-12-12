import React, {useState} from "react";
import { FormEvent } from "react";
import styles from "./module.css";
import {useNavigate} from "react-router-dom";

export default function CreateTheme() {
    const [Theme, setTheme] = useState("");
    const [Text, setText] = useState("");
    const navigate = useNavigate();
    const isValid = (): boolean => {
        let result = true;
        return result;
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid()) {
            // отправка данных на сервер
            const response = await fetch("http://localhost:3001/user", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                Theme,
                Text
        })
        });
            const data = await response.json();
            console.log(data);

        }
    };
    return <>
        <h3>Создать тему</h3>
        <div>
            <h10>Тема</h10>
            <input type={"text"}  value={Theme} onChange={e => setTheme(e.target.value)}/>
        </div>
        <div>
            <h10>Первое сообщение</h10>
            <input type={"text"}  value={Text} onChange={e => setText(e.target.value)}/>
        </div>
        <div>
            <button type={"submit"} onClick={() => navigate("/forumList")}>Отмена</button>
            <button type={"submit"} onClick={() => navigate("/forumList")}>Создать</button>
        </div>

    </>;
}