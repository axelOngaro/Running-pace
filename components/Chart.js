import styles from '../styles/Chart.module.scss';
import Row from '../components/Row';
import ChartIndexes from './ChartIndexes';

function Chart({ paceMinutesMin, paceMinutesMax, distances, setDistance }) {
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

  //event handler
  const onRowClickHandler = () => {
    console.log('perrych');
  };

  const startStopArray = minutesToSec(paceMinutesMin, paceMinutesMax, 10, 20);

  const chartArray = range(startStopArray[0], startStopArray[1], 10);

  return (
    <table className={styles.chart__table}>
      <ChartIndexes
        distances={distances.sort(function (a, b) {
          return a - b;
        })}
        setDistance={setDistance}
      />
      {chartArray.map((pace) => {
        return (
          <Row
            distances={distances}
            pace={pace}
            key={pace}
            onRowClickHandler={onRowClickHandler}
          />
        );
      })}
    </table>
  );
}

export default Chart;
