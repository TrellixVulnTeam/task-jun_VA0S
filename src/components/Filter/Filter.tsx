import React, { FC } from 'react';
import MySelect from "../Select/MySelect";
import MyInput from "../Input/MyInput";
import { IPropsFilter } from "../Types/types";

const Filter: FC <IPropsFilter> = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                onChange={(searched:React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: searched})}
            />
            <MySelect
                onChange={(selectedSort:React.ChangeEvent<HTMLSelectElement>) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка по"
                options={[
                    {title: 'По возрастанию', value: 'asc', id: 1},
                    {title: 'По убыванию', value: 'desc', id: 2},
                ]}
            />
        </div>
    );
};

export default Filter;

