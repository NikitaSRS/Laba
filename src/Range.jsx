import React, {useState} from "react";

export default function RangeLength({max = 0, min = 50}) {
    const [long, setValue] = useState(0);
    const [short, setValueS] = nodeuseState(0);

    function handleChange(e) {
        setValue(Number.parseInt(e.target.value));
    }

    function handleChangeS(e) {
        setValueS(Number.parseInt(e.target.value));
    }

    return <>
        <div> Длина:
            <label>
                <input
                    type="range"
                    value={long}
                    onChange={handleChange}
                />
            </label>
            {long}
        </div>
        <div> Ширина:
            <label>
                <input
                    type="range"
                    value={short}
                    onChange={handleChangeS}
                />
            </label>
            {short}
        </div>
        Площадь: {long * short}

    </>;
}