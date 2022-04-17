import React, { Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import { ILines } from "../Table";
import InputAdded from "./InputAdded";

interface IAddLinesProps {
    hideTable: () => void;
    addLines: Dispatch<SetStateAction<ILines>>
}

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
