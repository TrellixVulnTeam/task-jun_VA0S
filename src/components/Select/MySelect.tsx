import React, { FC } from 'react';

interface IOptionsProps {
    title: string;
    id: number;
    value: string;
}

interface ISelectProps {
    defaultValue: string;
    options: IOptionsProps[]
    onChange: any; //ПОДПРАВИТЬ ТИПЫ
}

const MySelect: FC <ISelectProps> = ({ defaultValue, options, onChange }) => {
    return (
            <select
                defaultValue={defaultValue}
                onChange={(event:React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
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

export default MySelect;
