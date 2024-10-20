'use client';

import {useState} from "react";


interface Props {
    things?: string[];
}

export default function GoodThings(props: Props): React.ReactElement {
    const [ isHidden, setIsHidden] = useState<boolean>(true);
    const { things } = props;

    return (<div className="good-things pt-10 pb-10">
        <button className="p-5 bg-stone-300" onClick={() => {
            console.log("clicked", isHidden);
            const _isHidden = !isHidden;
            setIsHidden(_isHidden);
        }}>Click me
        </button>

        {!isHidden && (<div className="p-10 bg-red-500">
            <h3>Hurra! Show me the things!</h3>
            <div>
            {things && things.map((thing, index) => (
                <div key={index}>{thing}</div>
            ))}
            </div>
        </div>)}
    </div>);
}