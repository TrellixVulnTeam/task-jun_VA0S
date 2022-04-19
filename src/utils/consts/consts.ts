import { InputsActionTypes } from "../../store/types";

export const inputs = [
    {text: "Имя", type: InputsActionTypes.name, isNumber: false, id: 1},
    {text: "Сумма", type: InputsActionTypes.salary, isNumber: true, id: 2},
    {text: "Бонус", type: InputsActionTypes.bonus, isNumber: true, id: 3},
    {text: "Псевдоним", type: InputsActionTypes.supervisor, isNumber: false, id: 4},
]
