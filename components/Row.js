import {
  roundNumber,
  paceSecToKmh,
  paceSecKmToPaceM,
  paceSecToSpeedConverter,
  paceSecToMphConverter,
  paceToTime,
} from '../utils/functionsSec';

import { useRef } from 'react';
import styles from '../styles/row.module.scss';
//PACE IS IN SECONDS

function Row({ pace, distances }) {
  const onClickHandler = (e) => {
    const parentRow = e.target.parentElement;
    parentRow.remove();
  };

  return (
    <tr className={styles.row} id={pace}>
      <button onClick={onClickHandler}>x</button>
      <th>{roundNumber(paceSecToKmh(pace), 2)} kph</th>
      <th>{roundNumber(paceSecToMphConverter(pace), 2)} mph</th>
      <th>{paceToTime(pace, 1)}</th>
      <th>{paceSecKmToPaceM(pace)}</th>
      {distances.map((distance) => {
        return <th key={paceToTime(pace, distance)}>{paceToTime(pace, distance)}</th>;
      })}
    </tr>
  );
}

export default Row;
