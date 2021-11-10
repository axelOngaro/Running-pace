import styles from '../styles/Chart.module.scss';

function Chart() {
  return (
    <table className={styles.chart__table}>
      <tr className={styles.indexes}>
        <th>km.h</th>
        <th>miles.h</th>
        <th>min.miles</th>
        <th>min.miles</th>
        <th>min.miles</th>
        <th>min.miles</th>
      </tr>
      <tr className={styles.values}>
        <th>14</th>
        <th>18</th>
        <th>3</th>
        <th>3</th>
        <th>3</th>
        <th>3</th>
      </tr>
    </table>
  );
}

export default Chart;
