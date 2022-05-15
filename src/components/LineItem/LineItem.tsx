import React from 'react';
import { ILines } from "../../types/types";
import styles from './lineItem.module.scss';

interface IClickedLines {
    line: ILines;
    onClick?: () => void;
}

const LineItem = ({ line, onClick }: IClickedLines) => {
    return (
        <tr
            className={styles.tr}
            onClick={onClick}
            key={line.id}
        >
            <td>{line.name}</td>
            <td>${line.salary}</td>
            <td>{line.bonus}</td>
            <td>{line.supervisor}</td>
        </tr>
    );
};

export default LineItem;
