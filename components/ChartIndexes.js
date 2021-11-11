import { Button as btton } from '@chakra-ui/button';
import React from 'react';
import styles from '../styles/ChartIndex.module.scss';

function ChartIndexes({ distances, setDistance, metric }) {
  const onClickHandler = (e) => {
    const newDistances = distances.filter((item) => item !== parseInt(e.target.value));
    setDistance(newDistances);
  };
  return (
    <tr className={styles.indexes}>
      <th></th>
      <th>km.h</th>
      <th>miles.h</th>
      <th>min.k</th>
      <th>min.miles</th>
      {distances.map((distance) => {
        return (
          <th key={distance}>
            {distance} {metric}{' '}
            <button onClick={onClickHandler} value={distance}>
              x
            </button>
          </th>
        );
      })}
    </tr>
  );
}

export default ChartIndexes;
