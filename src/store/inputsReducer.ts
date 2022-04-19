import { InitialProps, InputsAction } from "./types";
import { InputsActionTypes } from "./types";

export const initialState:InitialProps = {
    name: '',
    salary: 0,
    bonus: 0,
    supervisor: '',
}

export function reducer(state: InitialProps, action: InputsAction): InitialProps{
    switch (action.type){
        case InputsActionTypes.name:
            return { ...state, name: action.payload } ;
        case InputsActionTypes.salary:
            return { ...state, salary: action.payload };
        case InputsActionTypes.bonus:
            return { ...state, bonus: action.payload };
        case InputsActionTypes.supervisor:
            return { ...state, supervisor: action.payload };
        default:
            return state;
    }
}
