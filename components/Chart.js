import styles from '../styles/Chart.module.scss';
import Row from '../components/Row';
import ChartIndexes from './ChartIndexes';
const distances = [1, 3, 10, 21, 42];
const paceRange = {
  paceMinMin: 3,
  paceMinMAx: 4,
  paceSecMin: 10,
  paceSecMax: 40,
};

const range = (start, stop, step = 10) => {
  let arraySec = [];
  let i = start;
  while (i !== stop) {
    arraySec.push(i);
    i += step;
  }
  return arraySec;
};

function Chart() {
  return (
    <table className={styles.chart__table}>
      <ChartIndexes distances={distances} />

      <Row distances={distances} paceMin={3} paceSec={30} />
      <Row distances={distances} paceMin={3} paceSec={40} />
    </table>
  );
}

export default Chart;
