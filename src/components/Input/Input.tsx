import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC <InputProps> = ({ onChange , ...props}) => {
    return (
        <input
            className={styles.input}
            placeholder="Поиск по имени" type="text"
            onChange={onChange}
            {...props}
        >
        </input>
    );
};

export default Input;
