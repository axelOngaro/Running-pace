import {
  roundNumber,
  paceToKmh,
  paceToMphConverter,
  paceKmToPaceM,
  paceToTime,
} from '../utils/functions';

function Row({ paceMin, paceSec, distances }) {
  const onClickHandler = (e) => {
    console.log(e.target);
  };
  return (
    <tr>
      <button onClick={onClickHandler}>x</button>
      <th>{roundNumber(paceToKmh(paceMin, paceSec), 2)} kph</th>
      <th>{roundNumber(paceToMphConverter(paceMin, paceSec), 2)} mph</th>
      <th>{`${paceMin}min ${paceSec} sec `}</th>
      <th>{paceKmToPaceM(paceMin, paceSec)}</th>

      {distances.map((distance) => {
        return (
          <th key={paceToTime(paceMin, paceSec, distance)}>
            {paceToTime(paceMin, paceSec, distance)}
          </th>
        );
      })}
    </tr>
  );
}

export default Row;
