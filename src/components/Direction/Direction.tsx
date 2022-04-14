import React, { useState } from 'react';
import styles from './direction.module.scss';

interface IDirectionProps {
    sort: string;
}

const Direction = ({ sort }: IDirectionProps) => {
    const [direction, setDirection] = useState<boolean>(true);

    const clickHandler = () => {
        setDirection((state:boolean) => !state)
    }

    return (
        <div
            onClick={() => clickHandler()}
            className={sort === 'desc' ? styles.downArrow : styles.upArrow}
         >
        </div>
    );
};

export default Direction;
