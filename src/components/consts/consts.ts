import {InputsAction, InputsActionTypes} from "../table/AddLines/store/types";

interface InputsProps {
    text: string;
    type: InputsAction;
    id: number;
}

export const inputs = [
    {text: "Имя", type: InputsActionTypes.name, id: 1},
    {text: "Сумма", type: InputsActionTypes.salary, id: 2},
    {text: "Бонус", type: InputsActionTypes.bonus, id: 3},
    {text: "Псевдоним", type: InputsActionTypes.supervisor, id: 4},
]
