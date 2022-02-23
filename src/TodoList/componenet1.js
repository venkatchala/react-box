import React, { useState, useEffect, useRef } from "react";

function Component1() {
    const [value, setValue] = useState([])
    const inputValue = useRef(null)

    useEffect(() => {
        setValue([...value, inputValue])
        const onClickHandler = () =>
            inputValue.current = value;


    });


    return (
        <div>
            <input ref={inputValue} type="text" name="todoList"></input>
            <button onClick={onClickHandler}>Add</button>
            <h1>{value}</h1>

        </div>
    )
}
export default Component1;