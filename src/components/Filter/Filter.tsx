import React, { FC } from 'react';
import Select from "../Select/Select";
import Input from "../Input/Input";
import { IPropsFilter } from "../../types/types";
import Direction from "../Direction/Direction";

const Filter: FC <IPropsFilter> = ({ filter, setFilter }) => {
    return (
        <div>
            <Input
                onChange={(searched:React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: searched.target.value})}
            />
            <Select
                onChange={(selectedSort:React.ChangeEvent<HTMLSelectElement>) => setFilter({ ...filter, sort: selectedSort.target.value })}
                defaultValue="Сортировка по"
                options={[
                    {title: 'По возрастанию', value: 'asc', id: 1},
                    {title: 'По убыванию', value: 'desc', id: 2},
                ]}
            />
            <Direction sort={filter.sort}/>
        </div>
    );
};

export default Filter;


