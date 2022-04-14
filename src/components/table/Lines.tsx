import React, { FC, useState } from 'react';
import styles from "./table.module.scss";
import { ILines } from "./Table";
import LineItem from "./components/LineItem";


interface ILinesProps {
    lines: ILines[]
}

const Lines: FC <ILinesProps> = ({ lines }) => {
    const [currentLines, setCurrentLines] = useState<ILines[]>([])

    const showLines = (line:ILines) => {
        setCurrentLines((state) => [...state, line])
    }

    return (
        <div>
            <table className={styles.tables}>
                <tr className={styles.tr}><th>Employee</th><th>Salary</th><th>Bonus</th><th>Supervisor</th></tr>
                {lines.map((line) => (
                    <LineItem key={line.id} line={line} onClick={() => showLines(line)} />
                ))}
            </table>
            <table>
                {currentLines.map((line) => (
                    <LineItem key={line.id} line={line} />
                ))}
            </table>
        </div>
    );
};

export default Lines;
