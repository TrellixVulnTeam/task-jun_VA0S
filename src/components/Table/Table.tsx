import React, { useState } from 'react';
import Lines from "../Lines/Lines";
import Filter from "../Filter/Filter";
import { useSearchedLines } from "../../hooks/useSortedTable";
import AddLines from "../AddLines/AddLines";
import { ILines } from "../../types/types";
import styles from './table.module.scss';

const Table = () => {
    const [lines, setLines] = useState<ILines[]>([
        {name: 'Stephen C. Cox', salary: 300, bonus: 50, supervisor: 'Bob', id: 1},
        {name: 'Josephin Tan', salary: 150, bonus: 0, supervisor: 'Annie', id: 2},
        {name: 'Joyce Ming', salary: 200, bonus: 35, supervisor: 'Andy', id: 3},
        {name: 'James A. Pentel', salary: 175, bonus: 25, supervisor: 'Annie', id: 4},
    ]);

    const [checkButton, setCheckButton] = useState<boolean>(false);
    const [filter, setFilter] = useState<{query: string, sort: string}>( { query: '', sort: '' } );
    const { sort, query } = filter;
    const sortedAndSearchedLines = useSearchedLines({ lines, sort, query } );

    const addLines = (item:ILines) => {
        setLines((state) => [...state, item])
    }

    const showAddedTable = () => {
        setCheckButton((state) => !state)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.sortingContainer}>
                <Filter
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            <Lines
                lines={sortedAndSearchedLines}
            />
            {checkButton
                ? <AddLines addLines={addLines} hideTable={showAddedTable}/>
                : <button type="submit" onClick={() => showAddedTable()}>Добавить поле</button>
            }
        </div>
    );
};

export default Table;
