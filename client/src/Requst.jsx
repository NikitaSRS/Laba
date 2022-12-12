import React, {useState} from "react";
import { FormEvent } from "react";
import styles from "./module.css";

const URL = "https://jsonplaceholder.typicode.com";

export default function Request() {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState();
    const [result2, setResult2] = useState();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        try {
            const response = await fetch(`${URL}/posts/${id}`);
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            console.log(data);
            setResult(data);
            const response2 = await fetch(`${URL}/users/${data.userId}`);
            const data2 = await response2.json();
            setResult2(data2);

        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return <form onSubmit={handleSubmit}>
        <label>
            ID:
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <br/>
        </label>
        <button type="submit">Получить данные!</button>
        {result && <div>
            <b>{result?.title}</b><br/>
            {result?.body}
            <br/>
            <br/>
            <b>{result2?.name}</b>
            <br/>
            {result2?.email}
        </div>}
        {error && <div className={styles.error}>{error}</div>}
    </form>;
}
