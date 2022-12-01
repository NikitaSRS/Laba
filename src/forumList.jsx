import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { FormEvent } from "react";
import styles from "./module.css";
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

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
        <button onClick={() => Link<>}>
            <Link to="/CreatTheme"/>
        </button>
    <Routes>
        <Route path="/CreateTheme" element={<ForumList />} />
    </Routes>

    </>;
}