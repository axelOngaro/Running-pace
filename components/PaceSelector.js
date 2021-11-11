import styles from '../styles/PaceSelector.module.scss';

function PaceSelector() {
  return (
    <div className={styles.paceSelector}>
      <div className={styles.paceSelector__minutes}>
        <label htmlFor="minutes">Minutes</label>
        <input type="number" name="minutes" />
      </div>
      <div className={styles.paceSelector__seconds}>
        <label htmlFor="seconds">Seconds</label>
        <input type="number" name="seconds" />
      </div>
      <label htmlFor="metrics">Select a metric</label>
      <input type="metrics" list="metrics-list" />
      <datalist id="metrics-list">
        <option value="km.min" />
        <option value="miles.min" />
      </datalist>
    </div>
  );
}

export default PaceSelector;
