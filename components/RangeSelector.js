import styles from '../styles/RangeSelector.module.scss';

function RangeSelector() {
  return (
    <div className={styles.rangeSelector}>
      <div className={styles.rangeSelector__sliders}>
        <input type="range" name="min" id="" min="0" max="11" />
        <label htmlFor="min">Min pace</label>
        <input type="range" name="max" id="" min="0" max="11" />
        <label htmlFor="max">Max pace</label>
      </div>
      <div className={styles.rangeSelector__inputs}>
        <label htmlFor="minPace">minPace</label>
        <input type="number" name="minPace" id="" />
        <input type="number" name="secMinPace" />
        <label htmlFor="maxPace">maxPace</label>
        <input type="number" name="maxPace" id="" />
        <input type="number" name="secMaxPace" />
      </div>
    </div>
  );
}

export default RangeSelector;
