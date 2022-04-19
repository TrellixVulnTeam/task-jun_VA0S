import React, { FC, useReducer } from 'react';
import { initialState, reducer } from "../../../store/inputsReducer";
import { InitialProps, InputsAction } from "../../../store/types";
import { InputsProps } from "../../Types/types";
import { inputs } from "../../../constants/inputs";

const InputAdded: FC <InputsProps> = ({ setInput }) => {
    const [value, dispatch] = useReducer<React.Reducer<InitialProps, InputsAction>>(reducer, initialState);

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
                            type={input.isNumber ? 'number' : 'text'}
                            onChange={(event) =>
                                dispatch(( => {

                                })
                            }
                        />
                    </div>
                </label>
            ))}
        </div>
    );
};

export default InputAdded;
