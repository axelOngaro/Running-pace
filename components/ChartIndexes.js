import { Button as btton } from '@chakra-ui/button';
import React from 'react';

function ChartIndexes({ distances, setDistance }) {
  const onClickHandler = (e) => {
    const newDistances = distances.filter((item) => item !== parseInt(e.target.value));
    setDistance(newDistances);
  };
  return (
    <tr>
      <th></th>
      <th>km.h</th>
      <th>miles.h</th>
      <th>min.k</th>
      <th>min.miles</th>
      {distances.map((distance) => {
        return (
          <th key={distance}>
            {distance}k{' '}
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
