import React from 'react';

function ChartIndexes({ distances }) {
  return (
    <tr>
      <th>km.h</th>
      <th>miles.h</th>
      <th>min.k</th>
      <th>min.miles</th>
      {distances.map((distance) => {
        return <th key={distance}>{distance}k</th>;
      })}
    </tr>
  );
}

export default ChartIndexes;
