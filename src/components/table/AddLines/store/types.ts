export interface InitialProps {
    name: string;
    salary: number;
    bonus: number;
    supervisor: string;
}

export enum InputsActionTypes {
    name = "name",
    salary = "salary",
    bonus = "bonus",
    supervisor = "supervisor",
}

interface InputNameAction {
    type: InputsActionTypes.name;
    payload: string;
}

interface InputSalaryAction {
    type: InputsActionTypes.salary;
    payload: number;
}

interface InputBonusAction {
    type: InputsActionTypes.bonus;
    payload: number;
}

interface InputSupervisorAction {
    type: InputsActionTypes.supervisor;
    payload: string;
}

export type InputsAction = InputNameAction | InputSalaryAction | InputBonusAction | InputSupervisorAction

