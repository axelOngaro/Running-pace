import styles from '../styles/Chart.module.scss';
import Row from '../components/Row';
import ChartIndexes from './ChartIndexes';
const distances = [1, 3, 5, 10, 21, 42];
const paceRange = {
  paceMinMin: 2,
  paceMinMAx: 4,
  paceSecMin: 10,
  paceSecMax: 40,
};

// const minutesToSec = ({ paceMinMin, paceMinMAx, paceSecMin, paceSecMax }) => {
//   let start = paceMinMin * 60 + paceSecMin;
//   let stop = paceMinMAx * 60 + paceSecMax;
//   return [start, stop];
// };

// const range = (start, stop, step = 10) => {
//   let arraySec = [];
//   let i = start;
//   while (i <= stop) {
//     arraySec.push(i);
//     i += step;
//   }
//   return arraySec;
// };

// const chartArray = range(startStopArray[0], startStopArray[1], 10);

function Chart({ paceMinutesMin, paceMinutesMax }) {
  const minutesToSec = (paceMinutesMin, paceMinutesMax, paceSecMin, paceSecMax) => {
    let start = paceMinutesMin * 60 + paceSecMin;
    let stop = paceMinutesMax * 60 + paceSecMax;
    return [start, stop];
  };
  const range = (start, stop, step = 10) => {
    let arraySec = [];
    let i = start;
    while (i <= stop) {
      arraySec.push(i);
      i += step;
    }
    return arraySec;
  };

  const startStopArray = minutesToSec(paceMinutesMin, paceMinutesMax, 10, 20);
  console.log(startStopArray);

  const chartArray = range(startStopArray[0], startStopArray[1], 10);

  return (
    <table className={styles.chart__table}>
      <ChartIndexes distances={distances} />
      {chartArray.map((pace) => {
        return (
          <Row
            distances={distances}
            paceMin={Math.floor(pace / 60)}
            paceSec={pace % 60}
            key={pace}
          />
        );
      })}
    </table>
  );
}

export default Chart;
