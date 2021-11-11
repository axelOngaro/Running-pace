import styles from '../styles/Chart.module.scss';
import Row from '../components/Row';
import ChartIndexes from './ChartIndexes';
import { useRef, useEffect } from 'react';

function Chart({ paceMin, paceMax, distances, setDistance, step, metric }) {
  const range = (start, stop, step) => {
    let arraySec = [];
    let i = start;
    while (i <= stop) {
      arraySec.push(i);
      i += step;
    }
    return arraySec;
  };

  //event handler

  const chartArray = range(paceMin, paceMax, step);

  return (
    <table className={styles.chart__table}>
      <ChartIndexes
        distances={distances.sort(function (a, b) {
          return a - b;
        })}
        metric={metric}
        setDistance={setDistance}
      />
      {chartArray.map((pace) => {
        return <Row distances={distances} pace={pace} key={pace} />;
      })}
    </table>
  );
}

export default Chart;
