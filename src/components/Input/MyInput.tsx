import React, { FC } from 'react';

interface InputProps {
    onChange: any; // Подправить
}

const MyInput: FC <InputProps> = ({ onChange }) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <input
            placeholder="Поиск по имени" type="text"
            onChange={(event) => changeHandler(event)}
        >
        </input>
    );
};

export default MyInput;
