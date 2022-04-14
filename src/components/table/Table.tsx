import React, { useState } from 'react';
import Lines from "./Lines";
import Filter from "../Filter";
import { useSearchedLines } from "../hooks/sortedTable";
import Direction from "../Direction/Direction";

export interface ILines {
    name: string;
    salary: number;
    bonus: number;
    supervisor: string;
    id: number;
}

const Table = () => {
    const [lines, setLines] = useState<ILines[]>([
        {name: 'Stephen C. Cox', salary: 300, bonus: 50, supervisor: 'Bob', id: 1},
        {name: 'Josephin Tan', salary: 150, bonus: 0, supervisor: 'Annie', id: 2},
        {name: 'Joyce Ming', salary: 200, bonus: 35, supervisor: 'Andy', id: 3},
        {name: 'James A. Pentel', salary: 175, bonus: 25, supervisor: 'Annie', id: 4},
    ]);

    const [filter, setFilter] = useState( { query: '', sort: '' } );
    const { sort, query } = filter;

    const sortedAndSearchedLines = useSearchedLines({ lines, sort, query } );


    return (
        <div>
            <div style={{display: 'flex'}}>
                    <Lines
                        lines={sortedAndSearchedLines}
                    />
                <div className="sorting-container">
                    <Filter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Direction sort={sort}/>
                </div>
            </div>
            {}
        </div>
    );
};

export default Table;
