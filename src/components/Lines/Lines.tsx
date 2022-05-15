import React, { FC, useState } from 'react';
import LineItem from "../LineItem/LineItem";
import { ILines } from "../../types/types";
import styles from './lines.modules.scss';

interface ILinesProps {
    lines: ILines[]
}

const Lines: FC <ILinesProps> = ({ lines }) => {
    const [currentLines, setCurrentLines] = useState<ILines | null>(null);

    // const showLines = (line:ILines) => {
    //     if (currentLines.some((item) => item.id === line.id)) return;
    //     setCurrentLines((state) => [...state, line])
    // }

    const showLines = (line: ILines) => {
        setCurrentLines(line)
    }

    return (
        <>
            <table className={styles.table}>
                <tr className={styles.tr}><th>Employee</th><th>Salary</th><th>Bonus</th><th>Supervisor</th></tr>
                {lines.map((line) => (
                    <LineItem key={line.id} line={line} onClick={() => showLines(line)} />
                ))}
            </table>

            {currentLines &&
                <LineItem line={currentLines} />
            }

            {/*<table>*/}
            {/*    /!*{currentLines && currentLines.map((line) => (*!/*/}
            {/*    /!*    <LineItem key={line.id} line={line} />*!/*/}
            {/*    /!*))}*!/*/}
            {/*</table>*/}
        </>
    );
};

export default Lines;
