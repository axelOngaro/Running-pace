// import {
//   roundNumber,
//   paceToKmh,
//   paceToMphConverter,
//   paceKmToPaceM,
//   paceToTime,
// } from '../utils/functions';

import {
  roundNumber,
  paceSecToKmh,
  paceSecKmToPaceM,
  paceSecToSpeedConverter,
  paceSecToMphConverter,
  paceToTime,
} from '../utils/functionsSec';

import { useRef } from 'react';

//PACE IS IN SECONDS

function Row({ pace, distances, onRowClickHandler }) {
  const onClickHandler = (e) => {
    console.log(e.target);
  };

  console.log(paceToTime(pace, 1));

  return (
    <tr onClick={onRowClickHandler}>
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
