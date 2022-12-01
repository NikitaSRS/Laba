import React, {useState} from "react";
import { FormEvent } from "react";
import styles from "./module.css";
import {Route} from "react-router-dom";
import Login from "./Login";


export default function Registration() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [passwordRepeatError, setPasswordRepeatError] = useState("");

    const isValid = (): boolean => {
        let result = true;

        // очищаем ошибки
        setLoginError("");

        if (!/^([a-z0-9]{6,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }

        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }

        setPasswordError("");

        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
            result = false;
        }

        setPasswordRepeatError("");

        if (passwordRepeat !== password) {
            setPasswordRepeatError("Пароли должны совпадать");
            result = false;
        }

        return result;
    };

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
                    nickname: login,
                    password
                })
            });
            const data = await response.json();
            console.log(data);

        }
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Логин:
                    <input value={login} onChange={e => setLogin(e.target.value)}/>
                </label>
                {loginError && <div className={styles.error}>
                    {loginError}
                </div>}
            </div>
            <div>
                <label>Пароль:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                {passwordError && <div className={styles.error}>
                    {passwordError}
                </div>}
            </div>
            <div>
                <label>Повторите пароль:
                    <input type="password" value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)}/>
                </label>
                {passwordRepeatError && <div className={styles.error}>
                    {passwordRepeatError}
                </div>}
            </div>
            <button type="submit">Войти</button>
        </form>
    </>;
}