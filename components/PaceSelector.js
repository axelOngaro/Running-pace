import styles from '../styles/PaceSelector.module.scss';
import paceMinToPaceSec from '../utils/functionsSec';

function PaceSelector({
  setCurrentPace,
  currentPace,
  paceMinutes,
  paceSeconds,
  setPaceMinutes,
  setPaceSeconds,
}) {
  const currentPaceSelection = currentPace;
  const currentPaceUpdate = (paceMinutes, paceSeconds) => {
    setCurrentPace(parseInt(60 * paceMinutes) + parseInt(paceSeconds));
  };
  const onMinuteChangeHandler = (e) => {
    setPaceMinutes(e.target.value);
    currentPaceUpdate(e.target.value, paceSeconds);
  };

  const onSecondChangeHandler = (e) => {
    setPaceSeconds(e.target.value);
    currentPaceUpdate(paceMinutes, e.target.value);
  };

  return (
    <div className={styles.paceSelector}>
      <div className={styles.paceSelector__minutes}>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          name="minutes"
          onChange={onMinuteChangeHandler}
          value={paceMinutes}
        />
      </div>
      <div className={styles.paceSelector__seconds}>
        <label htmlFor="seconds">Seconds</label>
        <input
          type="number"
          name="seconds"
          onChange={onSecondChangeHandler}
          value={paceSeconds}
        />
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
