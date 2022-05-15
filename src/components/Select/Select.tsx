import React, { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';
import styles from './select.module.scss';

interface IOptionsProps {
    title: string;
    id: number;
    value: string;
}

interface ISelectProps extends SelectProps{
    defaultValue: string;
    options: IOptionsProps[]
}

type SelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

const Select: FC <ISelectProps> = ({ defaultValue, options, onChange, ...props }) => {
    return (
            <select
                className={styles.select}
                defaultValue={defaultValue}
                onChange={onChange}
                {...props}
            >
                <option disabled>{defaultValue}</option>
                {options.map((option) => (
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option.title}
                    </option>
                ))}
            </select>
    );
};

export default Select;
