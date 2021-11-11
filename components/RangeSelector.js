import styles from '../styles/RangeSelector.module.scss';

function RangeSelector({
  paceMinutesMin,
  paceMinutesMax,
  paceSecondsMin,
  paceSecondsMax,
  setPaceMinutesMin,
  setPaceMinutesMax,
  setPaceSecondsMin,
  setPaceSecondsMax,
}) {
  const paceMinutesMinHandler = (e) => {
    setPaceMinutesMin(e.target.value);
  };
  const paceMinutesMaxHandler = (e) => {
    setPaceMinutesMax(e.target.value);
  };

  console.log(paceMinutesMax, paceMinutesMin);

  return (
    <div className={styles.rangeSelector}>
      <div className={styles.rangeSelector__sliders}>
        <input
          type="range"
          name="min"
          id=""
          min="0"
          max="11"
          value={paceMinutesMin}
          onChange={paceMinutesMinHandler}
        />
        <label htmlFor="min">Min pace</label>
        <input
          type="range"
          name="max"
          id=""
          min="0"
          max="11"
          value={paceMinutesMax}
          onChange={paceMinutesMaxHandler}
        />
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
