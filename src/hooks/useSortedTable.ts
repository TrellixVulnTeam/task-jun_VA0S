import { useMemo } from "react";
import { ISortedAndSearchedLines } from "../components/Types/types";

export const useSortedLines = ( { lines, sort, query }: ISortedAndSearchedLines ) => {
    if (sort === 'desc') {
        return [...lines].sort((prev, next) => next.salary - prev.salary)
    }
    return [...lines].sort((prev, next) => prev.salary - next.salary)
}

export const useSearchedLines = ( { lines, sort, query }:ISortedAndSearchedLines ) => {
    const sortedLines = useSortedLines({ lines, sort, query });

    return useMemo(
        () => sortedLines.filter((line) =>
            line.name.toLowerCase().includes(query.toLowerCase())),
        [lines, query, sort])
};

