import React, {FC, useReducer} from 'react';
import { IAddLinesProps } from "../../types/types";
import { InputsActionTypes} from "../../store/types";
import styles from './inputAdded.module.scss';
import { initialState, reducer } from "../../store/inputsReducer";

const AddLines: FC <IAddLinesProps> = ({ hideTable, addLines }) => {
    const [stateValue, dispatch] = useReducer(reducer, initialState);

    const handler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addLines(stateValue)
        hideTable()
    }

    return (
        <form
            className={styles.form}
            onSubmit={(event) => handler(event)}
        >
            <div className={styles.wrapper}>
                <>
                    <h3>Добавить пользователя</h3>
                    <span
                        onClick={hideTable}
                        className={styles.close}
                    />
                </>
                <label>
                    Имя
                    <div className={styles.wrapperInput}>
                        <input
                            onChange={(event) => dispatch({type: InputsActionTypes.name, payload: event.target.value})}
                            className={styles.input}
                            type="text"
                            placeholder="Введите Имя"
                        />
                    </div>
                </label>
                <label>
                    Зарпалата
                    <div className={styles.wrapperInput}>
                        <input
                            onChange={(event) => dispatch({type: InputsActionTypes.salary, payload: +event.target.value})}
                            className={styles.input}
                            type="number"
                            placeholder="Введите Зарплату"
                        />
                    </div>
                </label>
                <label>
                    Бонус
                    <div className={styles.wrapperInput}>
                        <input
                            onChange={(event) => dispatch({type: InputsActionTypes.bonus, payload: +event.target.value})}
                            className={styles.input}
                            type="number"
                            placeholder="Введите Бонус"
                        />
                    </div>
                </label>
                <label>
                    Псевдоним
                    <div className={styles.wrapperInput}>
                        <input
                            onChange={(event) => dispatch({type: InputsActionTypes.supervisor, payload: event.target.value})}
                            className={styles.input}
                            type="text"
                            placeholder="Введите Псевдоним"
                        />
                    </div>
                </label>
                <button
                    className={styles.submit}
                    type="submit"
                >
                    Добавить поле
                </button>
            </div>
        </form>
    );
};

export default AddLines;

