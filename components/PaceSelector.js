import styles from '../styles/PaceSelector.module.scss';
import paceMinToPaceSec from '../utils/functionsSec';

function PaceSelector({ setCurrentPace, currentPace }) {
  const currentPaceSelection = currentPace;

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
      <select id="metrics-list">
        <option value="km.min">km.min</option>
        <option value="miles.min">miles.min</option>
      </select>
    </div>
  );
}

export default PaceSelector;
