import React, { Dispatch, FC, SetStateAction, useReducer, useState } from 'react';
import { inputs } from "../../consts/consts";
import { ILines } from "../Table";
import { initialState, reducer } from "./store/inputsReducer";

interface InputsProps {
    setInput: Dispatch<SetStateAction<ILines>>
}

const InputAdded: FC <InputsProps> = ({ setInput }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    if(value) {
        setInput(value)
    }

    return (
        <div>
            {inputs.map((input) => (
                <label key={input.id}>
                    {input.text}
                    <div>
                        <input
                            type='text'
                            onChange={(event) =>
                                dispatch({
                                    type: input.type,
                                    payload: input.isNumber ?+event.target.value : event.target.value
                                })}
                        />
                    </div>
                </label>
            ))}Ы
        </div>
    );
};

export default InputAdded;
