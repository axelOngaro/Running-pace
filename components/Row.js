import { durationCalculator, kmhToMph, roundNumber } from '../utils/functions';

function Row({ speed, distances }) {
  return (
    <tr>
      <th>{speed}</th>
      <th>{roundNumber(kmhToMph(speed), 2)}</th>
      <th>{}</th>

      {distances.map((distance) => {
        return (
          <th key={durationCalculator(distance, speed)}>
            {durationCalculator(distance, speed)}
          </th>
        );
      })}
    </tr>
  );
}

export default Row;
