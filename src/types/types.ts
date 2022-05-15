import { Dispatch, SetStateAction } from "react";

export interface ILines {
    name: string;
    salary: number;
    bonus: number;
    supervisor: string;
    id?: number;
}

export interface ISortedAndSearchedLines {
    lines: ILines[];
    sort: string;
    query: string;
}

export interface IAddLinesProps {
    hideTable: () => void;
    addLines: Dispatch<SetStateAction<ILines>>
}

export interface IPropsFilter{
    filter: {query: string, sort: string};
    setFilter: Dispatch<SetStateAction<{query: string, sort: string}>>
}
