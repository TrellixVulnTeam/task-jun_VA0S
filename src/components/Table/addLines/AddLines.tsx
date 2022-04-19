import React, { FC, useState } from 'react';
import InputAdded from "./InputAdded";
import { IAddLinesProps, ILines } from "../../Types/types";

const AddLines: FC <IAddLinesProps> = ({ hideTable, addLines }) => {
    const [value, setValue] = useState<ILines | null>(null)
    const handler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addLines(value)
        hideTable()
    }

    return (
        <form onSubmit={(event) => handler(event)} >
            <InputAdded setInput={setValue}/>
            <button type="submit">Добавить поле</button>
        </form>
    );
};

export default AddLines;
