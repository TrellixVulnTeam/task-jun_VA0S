import React, {FC} from 'react';
import styles from "./table.module.scss";
import { ILines } from "./Table";

interface ILinesProps {
    lines: ILines[]
}

const Lines: FC <ILinesProps> = ({lines}) => {
    return (
        <div>
            <tr className={styles.tr}><th>Employee</th><th>Salary</th><th>Bonus</th><th>Supervisor</th></tr>
            {lines.map((line) => (
                <tr key={line.id}><td>{line.name}</td><td>${line.salary}</td><td>{line.bonus}</td><td>{line.supervisor}</td></tr>
            ))}
        </div>
    );
};

export default Lines;
