import React, {useState} from "react";


export default function Reverse({str}) {
    const [Text, setText] = useState(str);
    function ReversFunc(string){
        let NewString = "";
        for(let i = string.length-1; i >= 0; i--)
        {
            NewString+=string[i];
            console.log(string[i]);
        }
        return NewString;
    }
    return <>
        <div>
            <h10>{Text}</h10>
            <button onClick={() => setText(Text !== null ? ReversFunc(Text) : "!тевирП" )}>Перевернуть</button>
        </div>
    </>;
}
/*split(txt, '').reverse().join('');*/


